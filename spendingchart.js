// Historical Version
var HISTSpending = Highcharts.chart('histyearlyspendingchart', {
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#00FFF5', '#9F00FF'],
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
    chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Rolling 12-month Net Spending & Average Withdrawal Rate'
    },
    xAxis: {
        categories: null,
        type: 'datetime',
        labels: {
            formatter: function() {
              return Highcharts.dateFormat('%Y', this.value);
            }
          }
    },
    yAxis: [{ // Primary y Axis
        labels: {
            format: '${value}'
        },
        title: {
            text: 'Inflation Adjusted Rolling 1 Year Spending/Income'
        }
    }, { // Secondary y Axis
        title: {
            text: 'Withdraw Rate (%)'
        },
        labels: {
            format: '{value}%'
        },
        opposite: true
    }],
    plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center'
    },
    tooltip: {
        xDateFormat: '%b %Y',
        shared: true,
        animation: false,
        shadow: false,
        headerFormat: "<span style='font-size: 14px'><b>{point.key}</b></span><br/>"
    },
    series: [{
        name: 'Net Spending/Income',
        data: null,
        type: 'column',
        yAxis: 0,
        tooltip: {valueDecimals: 0,valuePrefix: '$'},
        zones: [{
            value: 0,
            color: '#FFA6A6'
        },{
            color: '#A6FFA6'
        }],
        animation: false
    },{
        name: 'Average Withdraw/Deposit Rate (%)',
        data: null,
        yAxis: 1,
        type: 'spline',
        tooltip: {valueDecimals: 1,valueSuffix: '%'},
        animation: false
    }
    ]
});

// Monte Carlo Version
var MCSpending = Highcharts.chart('mcyearlyspendingchart', {
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#00FFF5', '#9F00FF'],
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
    chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Rolling 12-month Net Spending & Average Withdrawal Rate'
    },
    xAxis: {
        categories: null,
        type: 'datetime',
        labels: {
            formatter: function() {
              return Highcharts.dateFormat('%Y', this.value);
            }
          }
    },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '${value}'
        },
        title: {
            text: 'Inflation Adjusted Rolling 1 Year Spending/Income'
        }
    }, { // Secondary yAxis
        title: {
            text: 'Withdraw Rate (%)'
        },
        labels: {
            format: '{value}%'
        },
        opposite: true
    }],
    plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center'
    },
    tooltip: {
        xDateFormat: '%b %Y',
        shared: true,
        animation: false,
        shadow: false,
        headerFormat: "<span style='font-size: 14px'><b>{point.key}</b></span><br/>"
    },
    series: [{
        name: 'Net Spending/Income',
        data: null,
        type: 'column',
        yAxis: 0,
        tooltip: {valueDecimals: 0,valuePrefix: '$'},
        zones: [{
            value: 0,
            color: '#FFA6A6'
        },{
            color: '#A6FFA6'
        }],
        animation: false
    },{
        name: 'Average Withdraw/Deposit Rate (%)',
        data: null,
        yAxis: 1,
        type: 'spline',
        tooltip: {valueDecimals: 1,valueSuffix: '%'},
        animation: false
    }
    ]
});
