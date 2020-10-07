
var MCArea = Highcharts.chart('container-mcarea', {
    credits: {
        enabled: false
    },
    lang: {
        thousandsSep: ','
      },
    exporting: {
        enabled: true,
        scale: 6,
        buttons: {
            contextButton: {
                menuItems: ["downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG", "separator", "viewFullscreen", "printChart", 'downloadCSV', 'downloadXLS']
            }
        }
    },
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        crosshair: {
            width: 2,
            color: 'gray',
            dashStyle: 'shortdot'
        },
        labels: {
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        }
    },
    yAxis: {
        title: {
            text: "Account Value",
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        },
        labels: {
            format: '${value}',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.8rem'
            }
        },
        min: 0,
        max: 1000000
    },
    tooltip: {
        xDateFormat: '<b>%Y</b>',
        crosshairs: true,
        split: true,
        valuePrefix: '$',
        animation: false,
        shadow: false,
        valueDecimals: 0,
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    chart: {
        zoomType: 'xy',
        panning: true,
        panKey: 'shift'
    },
    series: [
        {
            name: 'Average',
            visible: true,
            type: 'line',
            zIndex: 5,
            boostThreshold: 0,
            data: null,
            marker: {
                enabled: true
            }
        },
        {
            name: '25th-75th Percentile',
            visible: true,
            data: null,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            boostThreshold: 0,
            color: '#A8FAFF',
            fillOpacity: 0.5,
            zIndex: 1,
            marker: {
                enabled: false
            },
            showInLegend: true
        },
        {
            name: '10th-90th Percentile',
            visible: true,
            data: null,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            boostThreshold: 0,
            color: '#A8FAFF',
            fillOpacity: 0.3,
            zIndex: 0,
            marker: {
                enabled: false
            },
            showInLegend: true
        }]
});
