
Highcharts.chart('container-mcperc', {
    chart: {
        backgroundColor: "#fff"
    },
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
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
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