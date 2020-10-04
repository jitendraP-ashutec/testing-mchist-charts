///////////////////////////////////////
// Chart Options
// Transition Chart (% start/end transition)
export const optionstransitionchart = {
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
};

// Historical Area Range
export const optionshistareachart = {
    chart: {
        zoomType: 'xy',
        panning: true,
        panKey: 'shift'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: "Account Value ($)"
        },
        min: 0,
        max: 1000000
    },
    plotOptions: {
        animation: false,
        shadow: false
    },
    tooltip: {
        xDateFormat: '%Y',
        crosshairs: true,
        shared: true,
        valuePrefix: '$',
        valueDecimals: 0,
        animation: false,
        shadow: false,
        headerFormat: "<span style='font-size: 14px'><b>{point.key}</b></span><br/>"
    },

    series: [{
        name: 'Worst Year',
        data: null,
        showInLegend: true
    }, {
        name: '2nd Worst Year',
        data: null,
        showInLegend: true
    },
    {
        name: '3rd Worst Year',
        data: null,
        showInLegend: true
    }, {
        name: 'Best Year',
        data: null,
        showInLegend: true
    }, {
        name: '2nd Best Year',
        data: null,
        showInLegend: true
    },
    {
        name: '3rd Best Year',
        data: null,
        showInLegend: true
    }, {
        name: 'Average of All Years',
        data: null,
        showInLegend: true
    }]

};
// Monte Carlo Area Range
export const optionsmcareachart = {
    plotOptions: {
        series: {
            animation: false,
            shadow: false
        }
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: "Account Value ($)"
        },
        min: 0,
        max: 1000000
    },
    tooltip: {
        xDateFormat: '%Y',
        crosshairs: true,
        shared: true,
        valuePrefix: '$',
        animation: false,
        shadow: false,
        valueDecimals: 0,
        headerFormat: "<span style='font-size: 14px'><b>{point.key}</b></span><br/>"
    },
    chart: {
        zoomType: 'xy',
        panning: true,
        panKey: 'shift',
    },
    series: [
        {
            name: 'Average',
            visible: true,
            type: 'line',
            zIndex: 5,
            boostThreshold: 0,
            data: null,
            marker: {
                enabled: false
            }
        },
        {
            name: '25th-75th Percentile',
            visible: true,
            data: null,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            boostThreshold: 0,
            color: '#A8FAFF',
            fillOpacity: 0.5,
            zIndex: 1,
            marker: {
                enabled: false
            },
            showInLegend: true
        },
        {
            name: '10th-90th Percentile',
            visible: false,
            data: null,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            boostThreshold: 0,
            color: '#A8FAFF',
            fillOpacity: 0.3,
            zIndex: 0,
            marker: {
                enabled: false
            },
            showInLegend: true
        }]

};


// Universal Highcharts Options
export const optionshighchartsuniveral = {
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
        backgroundColor: "#fff"
    },
    title: {
        style: {
            color: '#333',
            font: 'bold 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        }
    },
    subtitle: {
        style: {
            color: '#666',
            font: 'bold 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        }
    },
    xAxis: {
        gridLineWidth: 0,
        lineColor: '#999',
        tickColor: '#999',
        labels: {
            style: {
                color: '#555',
                fontWeight: 'bold'
            }
        },
        title: {
            style: {
                color: '#333',
                font: 'normal 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
            }
        }
    },
    yAxis: {
        alternateGridColor: null,
        minorTickInterval: null,
        gridLineColor: '#ddd',
        minorGridLineColor: '#ddd',
        lineWidth: 0,
        tickWidth: 0,
        labels: {
            style: {
                color: '#555',
                fontWeight: 'normal'
            }
        },
        title: {
            style: {
                color: '#333',
                font: 'normal 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
            }
        }
    },
    legend: {
        itemStyle: {
            color: '#000',
            font: 'normal 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        },
        itemHoverStyle: {
            color: '#ccc',
            font: 'normal 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        }
    },
    tooltip: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        animation: false,
        shadow: false,
        style: {
            color: '#000',
            font: 'normal 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        }
    },
    lang: {
        thousandsSep: ','
    }
};

