
Highcharts.chart('container-mcarea', {
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#00FFF5', '#9F00FF'],
    credits: {
        enabled: false
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
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: "Account Value ($)"
        },
        min: 0,
        max: 1000000
    },
    tooltip: {
        xDateFormat: '%Y',
        crosshairs: true,
        shared: true,
        valuePrefix: '$',
        animation: false,
        shadow: false,
        valueDecimals: 0,
        headerFormat: "<span style='font-size: 14px'><b>{point.key}</b></span><br/>"
    },
    chart: {
        zoomType: 'xy',
        panning: true,
        panKey: 'shift',
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
                enabled: false
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
            visible: false,
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
