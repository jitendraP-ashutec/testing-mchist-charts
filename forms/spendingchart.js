
// Historical Version
var HISTSpending = Highcharts.chart('histyearlyspendingchart', {
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
        text: 'Rolling Yearly Net Spending & Average Withdrawal Rate',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    subtitle: {
        text: 'Inflation Adjusted Yearly Spending Bar Chart, with the Average Widthrdawal Rate Line.',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        }
    },
    xAxis: {
        categories: null,
        type: 'datetime',
        labels: {
            formatter: function() {
              return Highcharts.dateFormat('%Y', this.value);
            },
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
          },
          style: {
              'font-family': 'Open Sans,sans-serif',
              'font-size': '1rem'
          }
    },
    yAxis: [{ // Primary y Axis
        labels: {
            format: '${value}',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
        },
        title: {
            text: 'Rolling 1 Year Spending/Income',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        }
    }, { // Secondary y Axis
        title: {
            text: 'Withdraw Rate (%)',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        },
        labels: {
            format: '{value}%',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
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
        xDateFormat: '%Y',
        split: true,
        animation: false,
        shadow: false,
        headerFormat: "<span><b>{point.key}</b></span><br/>",
        style: {
            'font-family': 'Open Sans,sans-serif'
        }
    },
    series: [{
        name: 'Net Spending (-) or Income (+)',
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
        animation: false,
        color: '#000000'
    },{
        name: 'Average Withdraw (-) or Deposit (+) Rate',
        data: null,
        yAxis: 1,
        type: 'spline',
        tooltip: {valueDecimals: 1,valueSuffix: '%'},
        animation: false,
        color: '#7900FF'
    }
    ]
});

/////////////////////////////////////////////////////////////////
// Monte Carlo Version
var MCSpending = Highcharts.chart('mcyearlyspendingchart', {
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
        text: 'Rolling Yearly Net Spending & Average Withdrawal Rate',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    subtitle: {
        text: 'Inflation Adjusted Yearly Spending Bar Chart, with the Average Widthrdawal Rate Line.',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        }
    },
    xAxis: {
        categories: null,
        type: 'datetime',
        labels: {
            formatter: function() {
              return Highcharts.dateFormat('%Y', this.value);
            },
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
          }
    },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '${value}',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
        },
        title: {
            text: 'Rolling 1 Year Spending/Income',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Withdraw Rate (%)',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        },
        labels: {
            format: '{value}%',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '0.9rem'
            }
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
        xDateFormat: '%Y',
        split: true,
        animation: false,
        shadow: false,
        headerFormat: "<span><b>{point.key}</b></span><br/>",
        style: {
            'font-family': 'Open Sans,sans-serif'
        }
    },
    series: [{
        name: 'Net Spending (-) or Income (+)',
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
        animation: false,
        color: '#000000'
    },{
        name: 'Average Withdraw (-) or Deposit (+) Rate',
        data: null,
        yAxis: 1,
        type: 'spline',
        tooltip: {valueDecimals: 1,valueSuffix: '%'},
        animation: false,
        color: '#7900FF'
    }
    ]
});
