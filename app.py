
# These are the imports, i pip installed some of them.
# Some of them are built in.
import datetime
import json
import numpy as np
import requests
import pandas as pd
import streamlit as st
from copy import deepcopy

# This is for the heading of the page and the initial configurations.
st.set_page_config(page_title="Vaccine Tracker",page_icon="🦠",layout='wide', initial_sidebar_state='collapsed')

# This is to avoid unnecessary warnings.
@st.cache(allow_output_mutation=True, suppress_st_warning=True)

def filter_column(df, col, value):
    df_temp = deepcopy(df.loc[df[col] == value, :])
    return df_temp

# This loads all the district with their codes into their mapping dataframe.
mapping_df = pd.read_csv("district_mapping.csv")

# Creating a dictionary of {district_id: district_name}
mapping_dict = pd.Series(mapping_df["district id"].values,
                         index = mapping_df["district name"].values).to_dict()

rename_mapping = {
    'date': 'Date',
    'min_age_limit': 'Minimum Age Limit',
    'available_capacity': 'Available Capacity',
    'pincode': 'Pincode',
    'name': 'Hospital Name',
    'state_name' : 'State',
    'district_name' : 'District',
    'block_name': 'Block Name',
    'fee_type' : 'Fees'
    }

# st.title('CoWIN Vaccination Slot Availability')

# numdays = st.sidebar.slider('Select Date Range', 0, 100, 10)

# Sorting districts wrto their names.
unique_districts = list(mapping_df["district name"].unique())
unique_districts.sort()


left_column_1, right_column_1 = st.beta_columns(2)

# This for setting the date limit upto which we can see the appointments.
with left_column_1:
    numdays = st.slider('Select Date Range', 0, 100, 5)

# Todo: mapping districts on map.
with right_column_1:
    dist_input = st.selectbox('Select District', unique_districts)

district_id = mapping_dict[dist_input]

base = datetime.datetime.today()  # This sets the base date as is today.
date_list = [base + datetime.timedelta(days=x) for x in range(numdays)] # This creates the list for the selected no. of days
date_str = [x.strftime("%d-%m-%Y") for x in date_list] # This creates the date string list for the respective days.

final_df = None
for input_date in date_str:
    # Getting response per date from the co-vin api which stores all the appointments to come and converting to json
    URL = f"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id={dist_input}&date={input_date}"
    response = requests.get(URL)
    # If the list of centers is available then printing the center information based on the age limit
    if (response.ok) and ('centers' in json.loads(response.text)):
        resp_json = json.loads(response.text)['centers']
        print(resp_json.address)
        if resp_json is not None:
            df = pd.DataFrame(resp_json)
            if len(df):
                df = df.explode("sessions")
                df['min_age_limit'] = df.sessions.apply(lambda x: x['min_age_limit'])
                df['available_capacity'] = df.sessions.apply(lambda x: x['available_capacity'])
                df['date'] = df.sessions.apply(lambda x: x['date'])
                df = df[["date", "available_capacity", "min_age_limit", "pincode", "name", "state_name", "district_name", "block_name", "fee_type"]]
                if final_df is not None:
                    final_df = pd.concat([final_df, df])
                else:
                    final_df = deepcopy(df)
            else:
                st.error("No rows in the data Extracted from the API")

if len(final_df):
    final_df.drop_duplicates(inplace=True)
    final_df.rename(columns=rename_mapping, inplace=True)

    left_column_2, center_column_2, right_column_2 = st.beta_columns(3)
    with left_column_2:
        valid_pincodes = list(np.unique(final_df["Pincode"].values))
        pincode_inp = st.selectbox('Select Pincode', [""] + valid_pincodes)
        if pincode_inp != "":
            final_df = filter_column(final_df, "Pincode", pincode_inp)

    with center_column_2:
        valid_age = [18, 45]
        age_inp = st.selectbox('Select Minimum Age', [""] + valid_age)
        if age_inp != "":
            final_df = filter_column(final_df, "Minimum Age Limit", age_inp)

    with right_column_2:
        valid_payments = ["Free", "Paid"]
        pay_inp = st.selectbox('Select Free or Paid', [""] + valid_payments)
        if pay_inp != "":
            final_df = filter_column(final_df, "Fees", pay_inp)

    table = deepcopy(final_df)
    table.reset_index(inplace=True, drop=True)
    st.table(table)
else:
    st.error("No Data Found")
