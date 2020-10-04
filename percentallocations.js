var preretire_stockallocation = 70;
var preretire_tbondallocation = 10;
var preretire_corpbondallocation = 20;
var preretire_cashallocation = 0;

var retire_stockallocation = 50;
var retire_tbondallocation = 20;
var retire_corpbondallocation = 20;
var retire_cashallocation = 10;

Highcharts.chart('dashboard-percallocations-preretire', {
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
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: null
    },
    tooltip: {
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
                format: '<b>{point.name}</b>: {point.percentage:.0f} %'
            }
        }
    },
    series: [{
        name: 'Allocation',
        colorByPoint: true,
        data: [{
            name: 'Stock',
            y: preretire_stockallocation,
            sliced: true,
            selected: true
        }, {
            name: 'Treasury Bonds',
            y: preretire_tbondallocation
        }, {
            name: 'Corporate Bonds',
            y: preretire_corpbondallocation
        }, {
            name: 'Cash',
            y: preretire_cashallocation
        }]
    }]
});