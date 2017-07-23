/**
 * Created by chencheng on 16/9/26.
 */
$(function(){
    showRotate();
    //严重程度
    function loadOuter() {
        var severity = echarts.init(document.getElementById("severityDiv"));
        /////////////////////////////////////////////////
        //数据封装格式
        var Ddate=[
            {value:10,total:100,type:'低危'},
            {value:26,total:100,type:'高危'},
            {value:65,total:100,type:'中危'}
        ]
        severity.setOption(pie(Ddate));
    };
    loadOuter();




    function loadShow(data) {
        //攻击来源主机
        var attackSource = echarts.init(document.getElementById("attackSource"));



        ///////////////////////////////////////////
        //数据封装格式
        var siData = {};
        siData['x'] = ['1月', '2月', '3月', '4月', '5月'];
        siData['title']='攻击来源主机';
        siData['series'] = [
            {
                name: '攻击来源主机',
                type: 'bar',
                stack: '总量',
                barWidth: '9',
                data: [25.6, 23.2, 7.0, 4.9, 2.0],
            }
        ];
        //['#4b9cdd']
        siData['color']='#4b9cdd';
        attackSource.setOption(getBar_commmon(siData));



        //被攻击数量
        var attacked=echarts.init(document.getElementById("attacked"));


        ///////////////////////////////////////////
        //数据封装格式
        var badData = {};
        badData['x'] = ['1月', '2月', '3月', '4月', '5月'];
        badData['title']='被攻击数量';
        badData['series'] = [
            {
                name: '被攻击数量',
                type: 'bar',
                barWidth: '9',
                data: [25.6, 23.2, 7.0, 4.9, 2.0],
            }
        ]
        badData['color']='#e56564';
        attacked.setOption(getBar_commmon( badData));
    }
    //中间右边部分
    //地图

    var mapDiv = echarts.init(document.getElementById('mapDiv'));


    var mapData = [
        {name: '海门', value: 9},
        {name: '鄂尔多斯', value: 12},
        {name: '招远', value: 12},
        {name: '舟山', value: 12},
        {name: '齐齐哈尔', value: 14},
        {name: '盐城', value: 15},
        {name: '赤峰', value: 16},
        {name: '青岛', value: 18},
        {name: '乳山', value: 18},
        {name: '丹东', value: 27},
        {name: '太仓', value: 27},
        {name: '曲靖', value: 27},
        {name: '烟台', value: 28},
        {name: '福州', value: 29},
        {name: '瓦房店', value: 30},
        {name: '即墨', value: 30},
        {name: '抚顺', value: 31},
        {name: '玉溪', value: 31},
        {name: '张家口', value: 31},
        {name: '阳泉', value: 31},
        {name: '莱州', value: 32},
        {name: '湖州', value: 32},
        {name: '汕头', value: 32},
        {name: '昆山', value: 33},
        {name: '南昌', value: 54},
        {name: '柳州', value: 54},
        {name: '三亚', value: 54},
        {name: '自贡', value: 56},
        {name: '吉林', value: 56},
        {name: '阳江', value: 57},
        {name: '泸州', value: 57},
        {name: '西宁', value: 57},
        {name: '宜宾', value: 58},
        {name: '呼和浩特', value: 58},
        {name: '乌鲁木齐', value: 84},
        {name: '安阳', value: 90},
        {name: '开封', value: 90},
        {name: '济南', value: 92},
        {name: '德阳', value: 93},
        {name: '温州', value: 95},
        {name: '九江', value: 96},
        {name: '邯郸', value: 98},
        {name: '临安', value: 99},
        {name: '兰州', value: 99},
        {name: '沧州', value: 100},
        {name: '临沂', value: 103},

    ];
    mapDiv.setOption(getChinaMap(mapData));
    loadShow();

    //进程数
    var progess_line = echarts.init(document.getElementById('processLine'));
    var plpData = {};
    plpData.xAxis = [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]; //坐标轴数据虽然不显示，但也必须写上
    plpData.series = [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210];
    progess_line.setOption(getLine_process(plpData));

   //底部

    //协议分类
    var threatenDiv = echarts.init(document.getElementById('classification'));

    ///////////////////////////////////////////
    //数据封装格式
    var tsData = {};
    tsData['data'] = [
        {value:20,name:'URL'},
        {value:30,name:'DNS'},
        {value:15,name:'UA'},
        {value:30,name:'HTTP'},
        {value:40,name:'IP'},
    ];

    //$.each(data['threat_all'], function (index, val) {
    //    tsData['data'].push({value: val['nums'], name: val['type']});
    //});
    threatenDiv.setOption(getPie(tsData));



    //踪迹饼图
    var traceRingPie = echarts.init(document.getElementById('traceRingPie'));


    ///////////////////////////////////////////
    //数据封装格式
    var tData = {};
    tData['centerData']=[
        {value: 335, name: 'URL'},
        {value: 310, name: 'DNS'},
        {value: 234, name: 'HTTP'},
    ],
        tData['outData']=[
            {value: 335, name: 'URL'},
            {value: 310, name: 'DNS'},
            {value: 234, name: 'HTTP'},
            {value: 335, name: 'URL'},
            {value: 310, name: 'DNS'},
            {value: 234, name: 'HTTP'},
        ],
    traceRingPie.setOption(getPie_ring(tData));



    //活动记录
    var activeRecordAreaLine = echarts.init(document.getElementById('active'));
    var arData = {};

    activeRecordAreaLine.setOption(getLine_area(arData));

    //被攻击省市分类统计柱状图
    var beAttacked = echarts.init(document.getElementById('AttackedProvien'));


    ///////////////////////////////////////////
    //数据封装格式
    var bapData = {};
    bapData['title']='威胁统计';
    bapData['color']='#545488';
    bapData['x']=['1月', '2月', '3月', '4月', '5月'];
    bapData['series'] = [
        {
            name: '被攻击数量',
            type: 'bar',
            barWidth: '9',
            data: [25.6, 23.2, 7.0, 4.9, 2.0],
        }
    ]
    bapData['color']='#736ebe';
    beAttacked.setOption(getBar_commmon(bapData));
})
function showRotate() {
    try {
        var i, et = document.getElementById('tags').childNodes;
        for (i in et) {
            et[i].nodeName == 'A' && et[i].addEventListener('click', function (e) {
                e.preventDefault();
            });
        }

        TagCanvas.Start('myCanvas', 'tags', {
            textColour: '#fff',
            outlineColour: '#fff',
            reverse: true,
            depth: 0.8,
            dragControl: true,
            // decel: 0.95,
            maxSpeed: 0.05,
            initial: [-0.2, 0]
        });
    } catch (e) {
        // something went wrong, hide the canvas container
        //document.getElementById('myCanvasContainer').style.display = 'none';
    }
}