

var HISTArea = Highcharts.chart('container-histarea', {
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    },
    chart: {
        zoomType: 'xy',
        panning: true,
        panKey: 'shift'
    },
    title: {
        text: null
    },
    subtitle: {
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
    plotOptions: {
        animation: false,
        shadow: false
    },
    tooltip: {
        xDateFormat: '<b>%Y</b>',
        crosshairs: true,
        split: true,
        valuePrefix: '$',
        valueSuffix: ' ',
        valueDecimals: 0,
        animation: false,
        shadow: false,
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },

    series: [{
        name: 'Worst Year',
        data: null,
        showInLegend: true
    }, {
        name: '2nd Worst Year',
        data: null,
        showInLegend: true
    },
    {
        name: '3rd Worst Year',
        data: null,
        showInLegend: true
    }, {
        name: 'Best Year',
        data: null,
        showInLegend: true
    }, {
        name: '2nd Best Year',
        data: null,
        showInLegend: true
    },
    {
        name: '3rd Best Year',
        data: null,
        showInLegend: true
    }, {
        name: 'Average of All Years',
        data: null,
        showInLegend: true
    }]
});