
Highcharts.chart('container-glidechart', {
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
        type: 'area'
    },
    title: {
        text: 'Investment Allocations'
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: null,
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        labels: {
            format: '{value}%'
        },
        title: {
            enabled: false
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}"><b>{series.name}</b></span><b>: {point.percentage:.1f}%</b><br/>',
        split: true
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