/**
 * Created by chencheng on 16/9/26.
 */
//地图
var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '大庆':[125.03,46.58]
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                text:data[i].value
            });
        }
    }
    return res;
};
function getChinaMap(obj){
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            zoom: 1.21,
            itemStyle: {
                normal: {
                    areaColor: '#2a313b',   //地图颜色
                    borderColor: '#fff'
                },
                emphasis: {
                    areaColor: '#2a313b'  //鼠标浮上去颜色
                }
            }
        },
        series : [
            {
                name: 'pm2.5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(obj),
                symbolSize: 10,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 3,
                        shadowColor: 'rgba(37, 140, 249, 0.8)',
                        color: '#e56564'
                    }
                }
            }

        ]
    };
    return option;
}


//严重程度圆形图
function pie(obj) {
    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    color: '#fff',
                    fontSize: 12
                },
            },
            labelLine: {
                show: false
            },
        }
    };
    var labelBottom = {
        normal: {
            color: '#BDB9B9',
            label: {
                show: true,
                position: 'center',
                y: '10px'
            },
            labelLine: {
                show: false
            },
        },
        emphasis: {
            color: 'rgb(0,0,0,0)'
        }
    };
    //低危
    var lowLabelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return obj[0].total - params.value
                },
                textStyle: {
                    baseline: 'top',
                    color: '#fff'
                }
            },
            color: '#80beb1'
        },
    }
    //高危
    var highLabelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return obj[1].total - params.value
                },
                textStyle: {
                    baseline: 'top',
                    color: '#fff',
                }
            },
            color: '#ff6278'
        },
    }
    //中危
    var midlLabelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return obj[2].total - params.value
                },
                textStyle: {
                    baseline: 'top',
                    color: '#fff'
                }
            },
            color: '#cba93e'
        },
    }
    option = {
        title: {
            show: false,
            text: '严重程度',
            x: '100',
            textStyle: {
                fontSize: 12,
                //fontWeight:'normal',
                color: '#fff'
            }
        },
        series: [
            {
                type: 'pie',
                center: ['15%', '50%'],
                radius: [33, 30],
                x: '0%', // for funnel
                itemStyle: lowLabelFromatter,
                data: [
                    {name: '低危', value: obj[0].value, itemStyle: labelTop},
                    {name: 'other', value: obj[0].total - obj[0].value, itemStyle: labelBottom}
                ]
            },
            {
                type: 'pie',
                center: ['50%', '50%'],
                radius: [43, 40],
                x: '20%', // for funnel
                itemStyle: highLabelFromatter,
                data: [
                    {name: '高危', value: obj[1].value, itemStyle: labelTop},
                    {name: 'other', value: obj[1].total - obj[1].value, itemStyle: labelBottom}
                ]
            },
            {
                type: 'pie',
                center: ['85%', '50%'],
                radius: [33, 30],
                x: '40%', // for funnel
                itemStyle: midlLabelFromatter,
                data: [
                    {name: '中危', value: obj[2].value, itemStyle: labelTop},
                    {name: 'other', value: obj[2].total - obj[2].value, itemStyle: labelBottom}
                ]
            },

        ]
    };
    return option;
}


//右侧类容区左边两个柱状图
function getBar_commmon(obj) {
    console.log(obj.title);
    var color = [];
    color.push(obj.color)
    // if (obj.color) {
    //     color.push(obj.color);
    // } else {
    //     color.push('#4b9cdd');
    // }
    var option = {
        //color:['#4b9cdd'],
        color: color,
        title: {
            text: obj.title,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            position: ['center', 'middle'],
        },
        calculable: true,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',//图形距离底部的空间高度,如IP太长显示不完全调整此参数
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: obj.x,
                axisTick: {show: false,},
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: { //网格线
                    show: false,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: { //网格线
                    show: false,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                }
            }
        ],
        series: obj.series
        // [
        //     {
        //         name: '蒸发量',
        //         type: 'bar',
        //         data: [25.6, 23.2, 7.0, 4.9, 2.0],
        //         barWidth: '15',
        //     },
        // ]
    };
    return option;
}

//右侧下面
//右下1---协议分类
function getPie(obj) {
    var option = {
        color: ['#5596e6', '#e56564', '#7168b7', '#e3e7ea', '#46525e'],//['#46525e', '#5596e6', '#c46e5d', '#7168b7', '#e3e7ea'],
        title: {
            text: '协议分类',
            x: 'left',
            textStyle: {
                color: 'rgb(212,222,224)',
                fontSize: 12,
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            position: ['center', 'middle'],
        },
        calculable: false,
        series: [
            {
                name: '访问来源',
                type: 'pie',
                itemStyle: {
                    normal: {
                        labelLine: {
                            show: true,
                            length: 5,
                            lineStyle: {
                                color: "#9E9FA0",
                                //width:2
                            }
                        },
                        label: {
                            textStyle: {
                                color: "#9E9FA0",
                            }
                        }
                    }
                },
                radius: '55%',
                center: ['50%', '60%'],
                data: obj.data
            }
        ]
    };
    // var option = {
    //     color: ['#46525e','#c46e5d', '#5596e6',  '#7168b7', '#e3e7ea'],//['#46525e', '#5596e6', '#c46e5d', '#7168b7', '#e3e7ea'],
    //     title: {
    //         text: '协议分类',
    //         x: 'left',
    //         textStyle: {
    //             color: 'rgb(212,222,224)',
    //             fontSize: 12,
    //         }
    //     },
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: "{a} <br/>{b} : {c} ({d}%)",
    //         position: ['center', 'middle'],
    //
    //     },
    //     calculable : true,
    //     series : [
    //         {
    //             name:'',
    //             type:'pie',
    //             radius : [0, 60],
    //             center : ['50%', 100],
    //             roseType : 'area',
    //             x: '50%',               // for funnel
    //             max: 40,                // for funnel
    //             sort : 'ascending',     // for funnel
    //             data:obj.data
    //         }
    //     ]
    // };
    return option;
}
//右下2---踪迹圆形图
function getPie_ring(obj) {
    var option = {
        color: ['#e56564', '#7168b7', '#5596e6'],
        title: {
            text: '踪迹',
            x: '25',
            y: '10',
            textStyle: {
                color: 'rgb(212,222,224)',
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            position: ['center', 'middle'],
        },

        series: [
            {
                name: '踪迹分类',
                type: 'pie',
                selectedMode: 'single',
                center: ['50%', '60%'],
                radius: [0, '40%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: obj.centerData
            },
            {
                name: '踪迹',
                type: 'pie',
                radius: ['53%', '68%'],
                center: ['50%', '60%'],
                data: obj.outData,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            }
        ]
    };

    return option;
}


//右下3---活动记录堆积折线图
function getLine_area(obj) {
    var option = {
        color: ['#836c89', '#4e618b', '#484e70'],
        title: {
            text: '活动记录',
            x: '25',
            y: '10',
            textStyle: {
                color: 'rgb(212,222,224)',
                fontSize: 13
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            position: ['center', 'middle'],
        },
        grid: {
            left: '3%',
            right: '9%',
            bottom: '9%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],//
                axisTick: {show: true,},
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: { //网格线
                    show: false,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show: true,},
                axisLine: {    // 轴线
                    show: true,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                },
                splitLine: { //网格线
                    show: false,
                    lineStyle: {
                        color: 'rgb(133,134,153)',
                        shadowColor: '#fff', //默认透明
                        type: 'solid',
                        width: 1
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [420, 432, 401, 434, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '广告',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
        ]
    };

    return option;
}

//右下4--被攻击省市分类统计柱状图
function getBar_lying(obj) {
    var option = {
        color: ['rgb(1,217,255)', 'rgba(23,165,247,.7)', 'rgba(235,188,84,.9)'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            //position: ['12px', 'middle'],
        },
        legend: {
            data: [1, 2, 3, 4, 5],//['2011年', '2012年']
            textStyle: {color: 'rgb(212,222,224)', fontSize: 13},
            left: 20,
            top: 0
        },
        grid: {
            left: '10%',
            right: '9%',
            bottom: '9%',
            containLabel: false
        },
        xAxis: {
            type: 'value',
            splitNumber: 4,
            splitLine: {show: false,},
            axisLine: {    // 轴线
                show: true,
                lineStyle: {
                    color: 'rgb(133,134,153)',
                    shadowColor: '#fff', //默认透明
                    type: 'solid',
                    width: 1
                }
            },
            splitLine: { //网格线
                show: false,
                lineStyle: {
                    color: 'rgb(133,134,153)',
                    shadowColor: '#fff', //默认透明
                    type: 'solid',
                    width: 1
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
//            axisLable:{
//                    show: false
//               }
            axisLine: {    // 轴线
                show: false,
                lineStyle: {
                    color: 'rgb(133,134,153)',
                    shadowColor: '#fff', //默认透明
                    type: 'solid',
                    width: 1
                }
            },
            splitLine: { //网格线
                show: false,
                lineStyle: {
                    color: 'rgb(133,134,153)',
                    shadowColor: '#fff', //默认透明
                    type: 'solid',
                    width: 1
                }
            },
            axisLabel: {show: false}
        },
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744]
            },
        ]
    };

    return option;
}

//折线图 进程数
function getLine_process(obj) {
    console.log(obj)
    var option = {
        color: ['rgba(1,208,7,.9)','rgba(23,165,247,.7)',],
        grid: {
            left: '3%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: obj.xAxis, /* ['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日'],*/
            axisTick: {show: false,},
            axisLine: {show: false},
            splitLine: {show: false,},
            axisLabel: {show: false}
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            axisTick: {show: false,},
            axisLine: {show: false},
            splitLine: {show: false,},
            axisLabel: {show: false}
        },
        series: [
            {
                name: '进程数',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: obj.series
                /*[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]*/
            }
        ]
    };
    return option;
}


function chinaMap(obj) {
    var placeList = obj;
    var option = {
        backgroundColor: '#1b1b1b',
        color: [
            'rgba(255, 255, 255, 0.8)',
            'rgba(14, 241, 242, 0.8)',
            'rgba(37, 140, 249, 0.8)'
        ],
        title: {
            text: '',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '弱',
                type: 'map',
                mapType: 'china',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 1.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                markPoint: {
                    symbolSize: 2,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: (function () {
                        var data = [];
                        var len = 3000;
                        var geoCoord
                        while (len--) {
                            geoCoord = placeList[len % placeList.length].geoCoord;
                            data.push({
                                name: placeList[len % placeList.length].name + len,
                                value: 10,
                                geoCoord: [
                                    geoCoord[0] + Math.random() * 5 - 2.5,
                                    geoCoord[1] + Math.random() * 3 - 1.5
                                ]
                            })
                        }
                        return data;
                    })()
                }
            },
            {
                name: '中',
                type: 'map',
                mapType: 'china',
                data: [],
                markPoint: {
                    symbolSize: 3,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: (function () {
                        var data = [];
                        var len = 1000;
                        var geoCoord
                        while (len--) {
                            geoCoord = placeList[len % placeList.length].geoCoord;
                            data.push({
                                name: placeList[len % placeList.length].name + len,
                                value: 50,
                                geoCoord: [
                                    geoCoord[0] + Math.random() * 5 - 2.5,
                                    geoCoord[1] + Math.random() * 3 - 1.5
                                ]
                            })
                        }
                        return data;
                    })()
                }
            },
            {
                name: '强',
                type: 'map',
                mapType: 'china',
                hoverable: false,
                roam: true,
                data: [],
                markPoint: {
                    symbol: 'diamond',
                    symbolSize: 6,
                    large: true,
                    effect: {
                        show: true
                    },
                    data: (function () {
                        var data = [];
                        var len = placeList.length;
                        while (len--) {
                            data.push({
                                name: placeList[len].name,
                                value: 90,
                                geoCoord: placeList[len].geoCoord
                            })
                        }
                        return data;
                    })()
                }
            }
        ]
    };
    return option;
}

