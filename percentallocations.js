
var percallocation_preretire = Highcharts.chart('percallocations-preretire', {
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Starting Fund Allocation',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    subtitle: {
        text: null,
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        }
    },
    tooltip: {
        animation: false,
        shadow: false,
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.0f} %',
                style: {
                    'font-family': 'Open Sans,sans-serif'
                }
            }
        }
    },
    series: [{
        name: 'Allocation',
        colorByPoint: true,
        data: [{
            name: '<b>Stock</b>',
            y: null,
            sliced: true,
            selected: true
        }, {
            name: '<b>Treasury</b><br><b>Bonds</b>',
            y: null
        }, {
            name: '<b>Corporate</b><br><b>Bonds</b>',
            y: null
        }, {
            name: '<b>Cash</b>',
            y: null
        }]
    }]
});

var percallocation_retire = Highcharts.chart('percallocations-retire', {
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Final Fund Allocation',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    subtitle: {
        text: null,
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.0f} %',
                style: {
                    'font-family': 'Open Sans,sans-serif'
                }
            }
        }
    },
    series: [{
        name: 'Allocation',
        colorByPoint: true,
        data: [{
            name: '<b>Stock</b>',
            y: null,
            sliced: true,
            selected: true
        }, {
            name: '<b>Treasury</b><br><b>Bonds</b>',
            y: null
        }, {
            name: '<b>Corporate</b><br><b>Bonds</b>',
            y: null
        }, {
            name: '<b>Cash</b>',
            y: null
        }]
    }]
});
