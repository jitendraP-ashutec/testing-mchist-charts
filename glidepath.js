

var client_age = numAgeFNC(client_birthday, client_birthmonth, client_birthyear);
var coclient_age = numAgeFNC(coclient_birthday, coclient_birthmonth, coclient_birthyear);

var lenarray = numYearsFNC(client_age, coclient_age, maxagetoplan, coclient_selected) + 2;

let numyears_adjust_start = age_to_start_adjust_port_allocations - client_age;
if (numyears_adjust_start < 0) { numyears_adjust_start = 0; }
let numyears_adjust_end = age_to_end_adjust_port_allocations - client_age;
if (numyears_adjust_end < 0) { numyears_adjust_end = 0; }

var stockpath = getMapFNC(lenarray, numyears_adjust_start, numyears_adjust_end, preretire_stockallocation, retire_stockallocation)
var tbondpath = getMapFNC(lenarray, numyears_adjust_start, numyears_adjust_end, preretire_tbondallocation, retire_tbondallocation)
var corpbondpath = getMapFNC(lenarray, numyears_adjust_start, numyears_adjust_end, preretire_corpbondallocation, retire_corpbondallocation)
var cashpath = getMapFNC(lenarray, numyears_adjust_start, numyears_adjust_end, preretire_cashallocation, retire_cashallocation)

var xval = getXVALYearsArray(lenarray);

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
        categories: xval,
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
        data: stockpath,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }, {
        name: 'Treasury Bonds',
        data: tbondpath,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }, {
        name: 'Corporate Bonds',
        data: corpbondpath,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }, {
        name: 'Cash',
        data: cashpath,
        events: {
            legendItemClick: function (e) {
                e.preventDefault()
            }
        }
    }]
});