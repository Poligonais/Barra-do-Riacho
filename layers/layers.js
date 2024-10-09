var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXVIreadeEsperadosPrticos_1 = new ol.format.GeoJSON();
var features_AnexoXVIreadeEsperadosPrticos_1 = format_AnexoXVIreadeEsperadosPrticos_1.readFeatures(json_AnexoXVIreadeEsperadosPrticos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIreadeEsperadosPrticos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIreadeEsperadosPrticos_1.addFeatures(features_AnexoXVIreadeEsperadosPrticos_1);
var lyr_AnexoXVIreadeEsperadosPrticos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIreadeEsperadosPrticos_1, 
                style: style_AnexoXVIreadeEsperadosPrticos_1,
                popuplayertitle: "Anexo XVI - Área de Espera dos Práticos",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIreadeEsperadosPrticos_1.png" /> Anexo XVI - Área de Espera dos Práticos'
            });
var format_AnexoXVreadeFundeio3_2 = new ol.format.GeoJSON();
var features_AnexoXVreadeFundeio3_2 = format_AnexoXVreadeFundeio3_2.readFeatures(json_AnexoXVreadeFundeio3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVreadeFundeio3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVreadeFundeio3_2.addFeatures(features_AnexoXVreadeFundeio3_2);
var lyr_AnexoXVreadeFundeio3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVreadeFundeio3_2, 
                style: style_AnexoXVreadeFundeio3_2,
                popuplayertitle: "Anexo XV - Área de Fundeio 3",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVreadeFundeio3_2.png" /> Anexo XV - Área de Fundeio 3'
            });
var format_AnexoXIVreadeFundeio1_3 = new ol.format.GeoJSON();
var features_AnexoXIVreadeFundeio1_3 = format_AnexoXIVreadeFundeio1_3.readFeatures(json_AnexoXIVreadeFundeio1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVreadeFundeio1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVreadeFundeio1_3.addFeatures(features_AnexoXIVreadeFundeio1_3);
var lyr_AnexoXIVreadeFundeio1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVreadeFundeio1_3, 
                style: style_AnexoXIVreadeFundeio1_3,
                popuplayertitle: "Anexo XIV - Área de Fundeio 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVreadeFundeio1_3.png" /> Anexo XIV - Área de Fundeio 1'
            });
var format_AnexoXIIIPolgonoAqutico_4 = new ol.format.GeoJSON();
var features_AnexoXIIIPolgonoAqutico_4 = format_AnexoXIIIPolgonoAqutico_4.readFeatures(json_AnexoXIIIPolgonoAqutico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIPolgonoAqutico_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIPolgonoAqutico_4.addFeatures(features_AnexoXIIIPolgonoAqutico_4);
var lyr_AnexoXIIIPolgonoAqutico_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIPolgonoAqutico_4, 
                style: style_AnexoXIIIPolgonoAqutico_4,
                popuplayertitle: "Anexo XIII- Polígono Aquático",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIPolgonoAqutico_4.png" /> Anexo XIII- Polígono Aquático'
            });
var format_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5 = new ol.format.GeoJSON();
var features_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5 = format_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.readFeatures(json_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.addFeatures(features_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5);
var lyr_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5, 
                style: style_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5,
                popuplayertitle: "Anexo XII - Terreno da Marinha, de Propriedade da União, Adjacente a Terreno de Propriedade da CODESA (Parte 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.png" /> Anexo XII - Terreno da Marinha, de Propriedade da União, Adjacente a Terreno de Propriedade da CODESA (Parte 2)'
            });
var format_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6 = new ol.format.GeoJSON();
var features_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6 = format_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.readFeatures(json_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.addFeatures(features_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6);
var lyr_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6, 
                style: style_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6,
                popuplayertitle: "Anexo XI - Terreno Acrescido da Marinha, de Propriedade da União, Adjacente a Terreno de Propriedade da CODESA (Parte 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.png" /> Anexo XI - Terreno Acrescido da Marinha, de Propriedade da União, Adjacente a Terreno de Propriedade da CODESA (Parte 1)'
            });
var format_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7 = new ol.format.GeoJSON();
var features_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7 = format_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.readFeatures(json_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.addFeatures(features_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7);
var lyr_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7, 
                style: style_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7,
                popuplayertitle: "Anexo X - Terreno da Marinha, de Propriedade da União, Adjacente a Terreno de Propriedade da CODESA (Parte 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.png" /> Anexo X - Terreno da Marinha, de Propriedade da União, Adjacente a Terreno de Propriedade da CODESA (Parte 1)'
            });
var format_AnexoIXTerrenodePropriedadedaCODESAParte4_8 = new ol.format.GeoJSON();
var features_AnexoIXTerrenodePropriedadedaCODESAParte4_8 = format_AnexoIXTerrenodePropriedadedaCODESAParte4_8.readFeatures(json_AnexoIXTerrenodePropriedadedaCODESAParte4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXTerrenodePropriedadedaCODESAParte4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXTerrenodePropriedadedaCODESAParte4_8.addFeatures(features_AnexoIXTerrenodePropriedadedaCODESAParte4_8);
var lyr_AnexoIXTerrenodePropriedadedaCODESAParte4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXTerrenodePropriedadedaCODESAParte4_8, 
                style: style_AnexoIXTerrenodePropriedadedaCODESAParte4_8,
                popuplayertitle: "Anexo IX - Terreno de Propriedade da CODESA (Parte 4)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXTerrenodePropriedadedaCODESAParte4_8.png" /> Anexo IX - Terreno de Propriedade da CODESA (Parte 4)'
            });
var format_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9 = new ol.format.GeoJSON();
var features_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9 = format_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.readFeatures(json_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.addFeatures(features_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9);
var lyr_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9, 
                style: style_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9,
                popuplayertitle: "Anexo VIII - Terreno de Propriedade da CODESA (Parte 3 - Trecho 3)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.png" /> Anexo VIII - Terreno de Propriedade da CODESA (Parte 3 - Trecho 3)'
            });
var format_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10 = new ol.format.GeoJSON();
var features_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10 = format_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.readFeatures(json_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.addFeatures(features_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10);
var lyr_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10, 
                style: style_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10,
                popuplayertitle: "Anexo VII - Terreno de Propriedade da CODESA (Parte 3 - Trecho 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.png" /> Anexo VII - Terreno de Propriedade da CODESA (Parte 3 - Trecho 2)'
            });
var format_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11 = new ol.format.GeoJSON();
var features_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11 = format_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.readFeatures(json_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.addFeatures(features_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11);
var lyr_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11, 
                style: style_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11,
                popuplayertitle: "Anexo VI - Terreno de Propriedade da CODESA (Parte 3 - Trecho 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.png" /> Anexo VI - Terreno de Propriedade da CODESA (Parte 3 - Trecho 1)'
            });
var format_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12 = new ol.format.GeoJSON();
var features_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12 = format_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.readFeatures(json_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.addFeatures(features_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12);
var lyr_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12, 
                style: style_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12,
                popuplayertitle: "Anexo V - Terreno de Propriedade da CODESA (Parte 2 - Trecho 3)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.png" /> Anexo V - Terreno de Propriedade da CODESA (Parte 2 - Trecho 3)'
            });
var format_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13 = new ol.format.GeoJSON();
var features_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13 = format_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.readFeatures(json_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.addFeatures(features_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13);
var lyr_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13, 
                style: style_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13,
                popuplayertitle: "Anexo IV - Terreno de Propriedade da CODESA (Parte 2 - Trecho 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.png" /> Anexo IV - Terreno de Propriedade da CODESA (Parte 2 - Trecho 2)'
            });
var format_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14 = new ol.format.GeoJSON();
var features_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14 = format_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.readFeatures(json_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.addFeatures(features_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14);
var lyr_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14, 
                style: style_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14,
                popuplayertitle: "Anexo III - Terreno de Propriedade da CODESA (Parte 2 - Trecho 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.png" /> Anexo III - Terreno de Propriedade da CODESA (Parte 2 - Trecho 1)'
            });
var format_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15 = new ol.format.GeoJSON();
var features_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15 = format_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.readFeatures(json_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.addFeatures(features_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15);
var lyr_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15, 
                style: style_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15,
                popuplayertitle: "Anexo II - Terreno de Propriedade da CODESA (Parte 1 - Trecho 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.png" /> Anexo II - Terreno de Propriedade da CODESA (Parte 1 - Trecho 2)'
            });
var format_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16 = new ol.format.GeoJSON();
var features_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16 = format_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.readFeatures(json_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.addFeatures(features_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16);
var lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16, 
                style: style_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16,
                popuplayertitle: "Anexo I - Terreno de Propriedade da CODESA (Parte 1 - Trecho 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.png" /> Anexo I - Terreno de Propriedade da CODESA (Parte 1 - Trecho 1)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXVIreadeEsperadosPrticos_1.setVisible(true);lyr_AnexoXVreadeFundeio3_2.setVisible(true);lyr_AnexoXIVreadeFundeio1_3.setVisible(true);lyr_AnexoXIIIPolgonoAqutico_4.setVisible(true);lyr_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.setVisible(true);lyr_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.setVisible(true);lyr_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.setVisible(true);lyr_AnexoIXTerrenodePropriedadedaCODESAParte4_8.setVisible(true);lyr_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.setVisible(true);lyr_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.setVisible(true);lyr_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.setVisible(true);lyr_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.setVisible(true);lyr_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.setVisible(true);lyr_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.setVisible(true);lyr_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.setVisible(true);lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoXVIreadeEsperadosPrticos_1,lyr_AnexoXVreadeFundeio3_2,lyr_AnexoXIVreadeFundeio1_3,lyr_AnexoXIIIPolgonoAqutico_4,lyr_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5,lyr_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6,lyr_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7,lyr_AnexoIXTerrenodePropriedadedaCODESAParte4_8,lyr_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9,lyr_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10,lyr_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11,lyr_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12,lyr_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13,lyr_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14,lyr_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15,lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16];
lyr_AnexoXVIreadeEsperadosPrticos_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVreadeFundeio3_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVreadeFundeio1_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIPolgonoAqutico_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXTerrenodePropriedadedaCODESAParte4_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIreadeEsperadosPrticos_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVreadeFundeio3_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIVreadeFundeio1_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIIPolgonoAqutico_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXTerrenodePropriedadedaCODESAParte4_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIreadeEsperadosPrticos_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVreadeFundeio3_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIVreadeFundeio1_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIPolgonoAqutico_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIITerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte2_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXITerrenoAcrescidodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXTerrenodaMarinhadePropriedadedaUnioAdjacenteaTerrenodePropriedadedaCODESAParte1_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXTerrenodePropriedadedaCODESAParte4_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIITerrenodePropriedadedaCODESAParte3Trecho3_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIITerrenodePropriedadedaCODESAParte3Trecho2_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVITerrenodePropriedadedaCODESAParte3Trecho1_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVTerrenodePropriedadedaCODESAParte2Trecho3_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVTerrenodePropriedadedaCODESAParte2Trecho2_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIITerrenodePropriedadedaCODESAParte2Trecho1_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIITerrenodePropriedadedaCODESAParte1Trecho2_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoITerrenodePropriedadedaCODESAParte1Trecho1_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});