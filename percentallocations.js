
Highcharts.chart('percallocations-preretire', {
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
        text: 'Starting Fund Allocation'
    },
    subtitle: {
        text: 'Allocation starting to adjust at '+age_to_start_adjust_port_allocations+' yrs old'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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

Highcharts.chart('percallocations-retire', {
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
        text: 'Final Fund Allocation'
    },
    subtitle: {
        text: 'Allocation by  '+age_to_end_adjust_port_allocations+ ' yrs old'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            y: retire_stockallocation,
            sliced: true,
            selected: true
        }, {
            name: 'Treasury Bonds',
            y: retire_tbondallocation
        }, {
            name: 'Corporate Bonds',
            y: retire_corpbondallocation
        }, {
            name: 'Cash',
            y: retire_cashallocation
        }]
    }]
});
