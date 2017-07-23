/**
 * Created by chencheng on 16/9/26.
 */
//地图
function getChinaMap(obj) {
    var option = {
        tooltip: {
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
        series: [
            {
                name: 'pm2.5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                //data: convertData(obj),
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
                        color: 'rgb(255, 16, 82)'
                    }
                }
            }

        ]
    };
    return option;
}


//严重程度圆形图
function pie() {
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
                    return 100-params.value
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
                    return 100-params.value
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
                    return 100-params.value
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
                    {name: '低危', value: 76, itemStyle: labelTop},
                    {name: 'other', value: 24, itemStyle: labelBottom}
                ]
            },
            {
                type: 'pie',
                center: ['50%', '50%'],
                radius: [43, 40],
                x: '20%', // for funnel
                itemStyle: highLabelFromatter,
                data: [
                    {name: '高危', value: 26, itemStyle: labelTop},
                    {name: 'other', value: 74, itemStyle: labelBottom}
                ]
            },
            {
                type: 'pie',
                center: ['85%', '50%'],
                radius: [33, 30],
                x: '40%', // for funnel
                itemStyle: midlLabelFromatter,
                data: [
                    {name: '中危', value: 65, itemStyle: labelTop},
                    {name: 'other', value: 35, itemStyle: labelBottom}
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
    if (obj.color) {
        color.push(obj.color);
    } else {
        color.push('#4b9cdd');
    }
    var option = {
        //color:['#4b9cdd'],
        color: color,
        title: {
            text: obj.title,
            //color: '#fff'
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
                data: ['1月', '2月', '3月', '4月', '5月'],
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
        series: //obj.series
            [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [25.6, 23.2, 7.0, 4.9, 2.0],
                    barWidth: '15',
                },
            ]
    };
    return option;
}

//右侧下面
//右下1---协议分类
function getPie(obj) {
    var option = {
        color: ['#46525e', '#5596e6', '#c46e5d', '#7168b7', '#e3e7ea'],
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
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 154, name: '搜索引擎'}
                ]
            }
        ]
    };
    return option;
}
//右下2---踪迹圆形图
function getPie_ring(obj) {
    var option = {
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
                data: [
                    {value: 335, name: '直达'},
                    {value: 679, name: '营销广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            },
            {
                name: '踪迹',
                type: 'pie',
                radius: ['53%', '68%'],
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '直达'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1048, name: '百度'},
                    {value: 251, name: '谷歌'},
                    {value: 147, name: '必应'},
                    {value: 102, name: '其他'}
                ],
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
        color: ['rgb(230,98,93)', 'rgba(235,188,84,.9)', 'rgba(23,165,247,.7)'],
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
        legend: {
            data: ['邮件营销', '联盟广告'],
            textStyle: {color: 'rgb(212,222,224)', fontSize: 12},
            left: 40,
            top: 35
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
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
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
function getLine_process(obj){
    var option = {
        color: ['rgba(1,208,7,.9)','rgba(23,165,247,.7)',],
        grid: {
            left: '3%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:obj.xAxis,/* ['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日'],*/
            axisTick : {show:false,},
            axisLine : { show: false},
            splitLine : { show: false, },
            axisLabel:{show:false}
        },
        yAxis: {
            type: 'value',
            boundaryGap: true,
            axisTick : {show:false,},
            axisLine : { show: false},
            splitLine : { show: false, },
            axisLabel:{show:false}
        },
        series: [
            {
                name:'进程数',
                type:'line',
                stack: '总量',
                symbol: 'none',
                data:obj.series/*[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]*/
            }
        ]
    };
    return option;
}
