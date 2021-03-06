
var MCPAlive = Highcharts.chart('container-mcperc', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        spacingBottom: -100
    },
    tooltip: {
        enabled: false
    },
    title: {
        text: '<h2>100%</h2>',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
        useHTML: true
    },
    plotOptions: {
        pie: {
            colors: ["#00ff00", "#ffffff"],
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '57%'],
            size: '110%'
        },
        series: {
            animation: false
        }
    },
    series: [{
        type: 'pie',
        innerSize: '50%',
        data: [
            ['', 100],
            ['', 0]

        ],
        dataLabels: {
            enabled: false
        },
        animation: false
    }]
});


var MCPAliveLegacy = Highcharts.chart('container-mcperc-legacy', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        spacingBottom: -100
    },
    tooltip: {
        enabled: false
    },
    title: {
        text: '<h2>100%</h2>',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
        useHTML: true
    },
    plotOptions: {
        pie: {
            colors: ["#00ff00", "#ffffff"],
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '57%'],
            size: '110%'
        },
        series: {
            animation: false
        }
    },
    series: [{
        type: 'pie',
        innerSize: '50%',
        data: [
            ['', 100],
            ['', 0]

        ],
        dataLabels: {
            enabled: false
        },
        animation: false
    }]
});