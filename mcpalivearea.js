var MCPAlive = Highcharts.chart('palivechart', {
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
    chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        type: 'column'
    },
    legend: {
        enabled: false
    },
    title: {
        text: null
    },
    xAxis: {
        categories: null,
        type: 'datetime'
    },
yAxis: {
    title: {
        text: "% Successful Simulations"
    },
    min: 0,
    max: 100
},
    plotOptions: {
        series: {
            //fillOpacity: 1,
            pointPadding: 0,
            groupPadding: 0
        }
    },
    tooltip: {
        xDateFormat: '%b %Y',
        valueDecimals: 0,
        valueSuffix: '%',
        animation: false,
        shadow: false,
        headerFormat: "<span style='font-size: 14px'><b>{point.key}</b></span><br/>"
    },
    series: [{
        name: '% Alive',
        data: null,
        zones: colorjson
    }]
});