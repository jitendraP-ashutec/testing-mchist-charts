Highcharts.chart('palivechart', {
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