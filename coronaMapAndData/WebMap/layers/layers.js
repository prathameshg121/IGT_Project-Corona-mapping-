var wms_layers = [];

var format_Previncial_0 = new ol.format.GeoJSON();
var features_Previncial_0 = format_Previncial_0.readFeatures(json_Previncial_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Previncial_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Previncial_0.addFeatures(features_Previncial_0);
var lyr_Previncial_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Previncial_0, 
                style: style_Previncial_0,
                interactive: true,
    title: 'Previncial<br />\
    <img src="styles/legend/Previncial_0_0.png" /> 1039 - 2573<br />\
    <img src="styles/legend/Previncial_0_1.png" /> 2573 - 3411<br />\
    <img src="styles/legend/Previncial_0_2.png" /> 3411 - 30062<br />\
    <img src="styles/legend/Previncial_0_3.png" /> 30062 - 31992<br />\
    <img src="styles/legend/Previncial_0_4.png" /> 31992 - 53865<br />\
    <img src="styles/legend/Previncial_0_5.png" /> 53865 - 84715<br />\
    <img src="styles/legend/Previncial_0_6.png" /> 84715 - 117014<br />\
    <img src="styles/legend/Previncial_0_7.png" /> 117014 - 141009<br />\
    <img src="styles/legend/Previncial_0_8.png" /> 141009 - 231807<br />\
    <img src="styles/legend/Previncial_0_9.png" /> 231807 - 630467<br />'
        });

lyr_Previncial_0.setVisible(true);
var layersList = [lyr_Previncial_0];
lyr_Previncial_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'LINK': 'LINK', 'active_Cas': 'active_Cas', 'CovidDatacsv_sno': 'CovidDatacsv_sno', 'CovidDatacsv_statecode': 'CovidDatacsv_statecode', 'CovidDatacsv_active_cases_today': 'CovidDatacsv_active_cases_today', 'CovidDatacsv_active_cases_yesterday': 'CovidDatacsv_active_cases_yesterday', 'CovidDatacsv_positive_cases_today': 'CovidDatacsv_positive_cases_today', 'CovidDatacsv_positive_cases_yesterday': 'CovidDatacsv_positive_cases_yesterday', 'CovidDatacsv_cured_cases_today': 'CovidDatacsv_cured_cases_today', 'CovidDatacsv_cured_cases_yesterday': 'CovidDatacsv_cured_cases_yesterday', 'CovidDatacsv_death_cases_today': 'CovidDatacsv_death_cases_today', 'CovidDatacsv_death_cases_yesterday': 'CovidDatacsv_death_cases_yesterday', });
lyr_Previncial_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'LINK': 'TextEdit', 'active_Cas': 'TextEdit', 'CovidDatacsv_sno': 'TextEdit', 'CovidDatacsv_statecode': 'TextEdit', 'CovidDatacsv_active_cases_today': 'TextEdit', 'CovidDatacsv_active_cases_yesterday': 'TextEdit', 'CovidDatacsv_positive_cases_today': 'TextEdit', 'CovidDatacsv_positive_cases_yesterday': 'TextEdit', 'CovidDatacsv_cured_cases_today': 'TextEdit', 'CovidDatacsv_cured_cases_yesterday': 'TextEdit', 'CovidDatacsv_death_cases_today': 'TextEdit', 'CovidDatacsv_death_cases_yesterday': 'TextEdit', });
lyr_Previncial_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'LINK': 'no label', 'active_Cas': 'no label', 'CovidDatacsv_sno': 'no label', 'CovidDatacsv_statecode': 'no label', 'CovidDatacsv_active_cases_today': 'no label', 'CovidDatacsv_active_cases_yesterday': 'no label', 'CovidDatacsv_positive_cases_today': 'no label', 'CovidDatacsv_positive_cases_yesterday': 'no label', 'CovidDatacsv_cured_cases_today': 'no label', 'CovidDatacsv_cured_cases_yesterday': 'no label', 'CovidDatacsv_death_cases_today': 'no label', 'CovidDatacsv_death_cases_yesterday': 'no label', });
lyr_Previncial_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});