Highcharts.chart('yearlyspendingchart', {
    chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Rolling 12-month Net Spending'
    },
    xAxis: {
        categories: null,
        type: 'datetime'
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