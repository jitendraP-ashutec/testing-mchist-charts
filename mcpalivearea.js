let colorjson=[{value:0,color:"#FF0000"},{value:1,color:"#FF0000"},{value:2,color:"#FF0000"},{value:3,color:"#FF0000"},{value:4,color:"#FF0000"},{value:5,color:"#FF0000"},{value:6,color:"#FF0000"},{value:7,color:"#FF0000"},{value:8,color:"#FF0000"},{value:9,color:"#FF0000"},{value:10,color:"#FF0000"},{value:11,color:"#FF0000"},{value:12,color:"#FF0000"},{value:13,color:"#FF0000"},{value:14,color:"#FF0000"},{value:15,color:"#FF0000"},{value:16,color:"#FF0000"},{value:17,color:"#FF0000"},{value:18,color:"#FF0000"},{value:19,color:"#FF0000"},{value:20,color:"#FF0000"},{value:21,color:"#FF0000"},{value:22,color:"#FF0000"},{value:23,color:"#FF0000"},{value:24,color:"#FF0000"},{value:25,color:"#FF0000"},{value:26,color:"#FF0000"},{value:27,color:"#FF0000"},{value:28,color:"#FF0000"},{value:29,color:"#FF0000"},{value:30,color:"#FF0000"},{value:31,color:"#FF0000"},{value:32,color:"#FF0000"},{value:33,color:"#FF0000"},{value:34,color:"#FF0000"},{value:35,color:"#FF0000"},{value:36,color:"#FF0000"},{value:37,color:"#FF0000"},{value:38,color:"#FF0000"},{value:39,color:"#FF0000"},{value:40,color:"#FF0000"},{value:41,color:"#FF0000"},{value:42,color:"#FF0000"},{value:43,color:"#FF0000"},{value:44,color:"#FF0000"},{value:45,color:"#FF0000"},{value:46,color:"#FF0000"},{value:47,color:"#FF0000"},{value:48,color:"#FF0000"},{value:49,color:"#FF0000"},{value:50,color:"#FF0000"},{value:51,color:"#FF0000"},{value:52,color:"#FF0000"},{value:53,color:"#FF0000"},{value:54,color:"#FF0000"},{value:55,color:"#FF0000"},{value:56,color:"#FF0000"},{value:57,color:"#FF0000"},{value:58,color:"#FF0000"},{value:59,color:"#FF0000"},{value:60,color:"#FF0000"},{value:61,color:"#FF0000"},{value:62,color:"#FF0000"},{value:63,color:"#FF0000"},{value:64,color:"#FF0000"},{value:65,color:"#FF0000"},{value:66,color:"#FF0000"},{value:67,color:"#FF0000"},{value:68,color:"#FF0000"},{value:69,color:"#FF0000"},{value:70,color:"#FF0000"},{value:71,color:"#ff1100"},{value:72,color:"#ff2200"},{value:73,color:"#ff3300"},{value:74,color:"#ff4400"},{value:75,color:"#ff5500"},{value:76,color:"#ff6600"},{value:77,color:"#ff7700"},{value:78,color:"#ff8800"},{value:79,color:"#ff9900"},{value:80,color:"#ffaa00"},{value:81,color:"#ffbb00"},{value:82,color:"#ffcc00"},{value:83,color:"#ffdd00"},{value:84,color:"#ffee00"},{value:85,color:"#ffff00"},{value:86,color:"#eeff00"},{value:87,color:"#ddff00"},{value:88,color:"#ccff00"},{value:89,color:"#bbff00"},{value:90,color:"#aaff00"},{value:91,color:"#99ff00"},{value:92,color:"#88ff00"},{value:93,color:"#77ff00"},{value:94,color:"#66ff00"},{value:95,color:"#55ff00"},{value:96,color:"#44ff00"},{value:97,color:"#33ff00"},{value:98,color:"#22ff00"},{value:99,color:"#11ff00"},{value:100,color:"#00ff00"},{value:101,color:"#00ff00"}];


var MCPAliveArea = Highcharts.chart('palivechart', {
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    },
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
        text: 'Probability of Success By Year',
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    subtitle: {
        text: 'Probability of having a Portfolio Value Above 0 at a Specific Point in the Future.',
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
yAxis: {
    title: {
        text: "% Success",
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1rem'
        }
    },
    min: 0,
    max: 100,
        labels: {
            format: '{value}%',
            style: {
                'font-family': 'Open Sans,sans-serif',
                'font-size': '1rem'
            }
        },
    },
    plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
    tooltip: {
        xDateFormat: '<b>%Y</b>',
        valueDecimals: 0,
        valueSuffix: '%',
        animation: false,
        shadow: false,
        headerFormat: "<span style='font-size: 1.4rem'><b>{point.key}</b></span><br/>",
        style: {
            'font-family': 'Open Sans,sans-serif',
            'font-size': '1.4rem'
        }
    },
    series: [{
        name: '',
        data: null,
        zones: colorjson
    }]
});