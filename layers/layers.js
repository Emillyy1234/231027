var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

    var projection__1 = ol.proj.get('EPSG:3857');
    var projectionExtent__1 = projection__1.getExtent();
    var size__1 = ol.extent.getWidth(projectionExtent__1) / 256;
    var resolutions__1 = new Array(14);
    var matrixIds__1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__1[z] = size__1 / Math.pow(2, z);
        matrixIds__1[z] = z;
    }
    var lyr__1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "EMAP",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection__1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__1),
                resolutions: resolutions__1,
                matrixIds: matrixIds__1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "臺灣通用電子地圖",
                            opacity: 1.0,
                            
                            
                          });
var lyr_1620_modified_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "16~20_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1620_modified_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13515387.847610, 2876014.736975, 13528960.271618, 2890238.405686]
                            })
                        });
var lyr_101112_modified_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "10+11+12_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/101112_modified_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13513465.273367, 2898507.000479, 13525494.446529, 2909751.248698]
                            })
                        });
var lyr_131415_modified_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "13+14+15_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/131415_modified_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13510980.426645, 2889985.241448, 13524272.005494, 2898525.555378]
                            })
                        });
var lyr_789_modified_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "7+8+9_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/789_modified_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13551020.576845, 2888891.415848, 13568321.408146, 2895944.104227]
                            })
                        });
var lyr_456_modified_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "4+5+6_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/456_modified_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13537377.853439, 2894771.266973, 13553303.699397, 2905792.274012]
                            })
                        });
var lyr_23_modified_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "2+3_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/23_modified_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13532240.953090, 2905417.381408, 13544933.828692, 2913709.339783]
                            })
                        });
var lyr_1_modified_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "1_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1_modified_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13524953.558898, 2908726.576254, 13534124.994718, 2913927.614991]
                            })
                        });
var lyr__9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "LANDSECT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "地段外圍圖(段籍圖)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__9, 0]);

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr_1620_modified_2.setVisible(true);lyr_101112_modified_3.setVisible(true);lyr_131415_modified_4.setVisible(true);lyr_789_modified_5.setVisible(true);lyr_456_modified_6.setVisible(true);lyr_23_modified_7.setVisible(true);lyr_1_modified_8.setVisible(true);lyr__9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr_1620_modified_2,lyr_101112_modified_3,lyr_131415_modified_4,lyr_789_modified_5,lyr_456_modified_6,lyr_23_modified_7,lyr_1_modified_8,lyr__9];
