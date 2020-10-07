
var glidpathchart = Highcharts.chart('container-glidechart', {
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    },
    chart: {
        type: 'area'
    },
    title: {
        text: 'Investment Allocations By Year',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    subtitle: {
        text: 'Adjusting your allocations each year based on current and target portfolios selected',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        }
    },
    xAxis: {
        categories: null,
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
        labels: {
            format: '{value}%',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
        },
        title: {
            enabled: false
        }
    },
    tooltip: {
        split: true,
        animation: false,
        shadow: false,
        formatter: function () {
            // The first returned item is the header, subsequent items are the points
            return ['<b>' + this.x + '</b>'].concat(
                this.points ?
                    this.points.map(function (point) {
                        return '<b>' + point.series.name + ': ' + Math.round(point.y) + '%</b>';
                    }) : []
            );
        },
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        },
        labels: {
            format: '{value}%',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        },
    },
    plotOptions: {
        area: {
            stacking: 'percent',
            lineColor: '#ffffff',
            lineWidth: 1
        },
        series: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Stocks',
        data: null,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }, {
        name: 'Treasury Bonds',
        data: null,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }, {
        name: 'Corporate Bonds',
        data: null,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }, {
        name: 'Cash',
        data: null,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }]
});