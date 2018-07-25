jQuery(document).ready(function($) {
	bjMainChart();
	hbMainChart();
	chMainChart();
	qyRightTreemapOneChart();
	qyRightTreemapTwoChart();
	qyRightGraphChart();

	$(".turnNavigation").empty();
    $.each(turnNavigationData,function(index){
        if(index%3 == 0){
            $(".turnNavigation").append("<div></div>");
        }
        $(".turnNavigation div:last").append('<span onclick="turnNavigationChart(this)">'+this+'</span>');
    });
    $(".turnNavigation").find("span").eq("0").addClass("turnNavigationActive");

	$.each(qyRightListOneData,function(){
		$(".qyRightListOne").append("<div></div>");
		$.each(this,function(){
			$(".qyRightListOne div:last").append('<span>'+this+'</span>');
		});
	});
	$.each(qyRightListTwoData,function(){
		$(".qyRightListTwo").append("<div></div>");
		$.each(this,function(){
			$(".qyRightListTwo div:last").append('<span>'+this+'</span>');
		});
	});
});
//中间北京地图
function bjMainChart(){
    var myChart = echarts.init(document.getElementById('bjMain'));
    option =
     {
        color:['#DB4E5F','#F28A55','#A6E265','#B473ED','#85F1FA'],
        title:null,
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return value[2];
            }
        },
        geo: {
            map: '北京',
            label: {
                normal: {
                    show: false
                },
                emphasis:{
                    show:false
                }
            },
            zoom: 1.2,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: 'transparent'
                },
                emphasis:{
                    areaColor: 'transparent',
                    borderColor: 'transparent'
                }
            }
        },
        series: bjMainData
    };
    myChart.setOption(option);
}

//中间河北地图
function hbMainChart(){
    var myChart = echarts.init(document.getElementById('hbMain'));
    option = {
        color:['#DB4E5F','#F28A55','#A6E265','#B473ED','#85F1FA'],
        title:null,
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return value[2];
            }
        },
        geo: {
            map: '河北',
            label: {
                normal: {
                    show: false
                },
                emphasis:{
                    show:false
                }
            },
            zoom: 1.1,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: 'transparent'
                },
                emphasis:{
                    areaColor: 'transparent',
                    borderColor: 'transparent'
                }
            }
        },
        series: hbMainData
    };
    myChart.setOption(option);
}

//中间全国地图
function chMainChart(){
    var myChart = echarts.init(document.getElementById('chMain'));
    option = {
        color:['#DB4E5F','#F28A55','#A6E265','#B473ED','#85F1FA'],
        title:null,
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return value[2];
            }
        },
        geo: {
            map: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis:{
                    show:false
                }
            },
            zoom: 1.2,
            left:'13%',
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: 'transparent'
                },
                emphasis:{
                    areaColor: 'transparent',
                    borderColor: 'transparent'
                }
            }
        },
        series: chMainData
    };
    myChart.setOption(option);
};

//左侧雷达图（1）
function qyLeftRadarOneChart(){
    var myChart = echarts.init(document.getElementById('qyLeftRadarOne'));
    option = {
        color:['#F9FF00','#F28A55','#A6E265','#B473ED','#85F1FA'],
		tooltip: {},
		radar: {
	        // shape: 'circle',
			radius: '60%',
	        indicator: [
				{ name :'区位竞争力', max: 100},
				 { name :'城市竞争力', max: 100},
				 { name :'基础竞争力', max: 100},
				 { name :'产出竞争力', max: 100},
				 { name :'规模竞争力', max: 100},
				 { name :'龙头竞争力', max: 100},
				 { name :'人才竞争力', max: 100},
				 { name :'成本竞争力', max: 100},
				 { name :'园区环境竞争力', max: 100},
				 { name :'绝对值竞争力', max: 100}
	        ]
	    },
	    series: [{
	        name: '硬实力',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        data : [
				{value : [91, 90, 90, 87, 84, 82,92,89,97,94],name : '硬实力'}
	        ]
	    }]
    };
    myChart.setOption(option);
};

//左侧雷达图（2）
function qyLeftRadarTwoChart(){
    var myChart = echarts.init(document.getElementById('qyLeftRadarTwo'));
    option = {
        color:['#F9FF00','#F28A55','#A6E265','#B473ED','#85F1FA'],
		tooltip: {},
		radar: {
	        // shape: 'circle',
			radius: '60%',
	        indicator: [
				{ name :'企业管理竞争力', max: 100},
				{ name :'公共制度竞争力', max: 100},
				{ name :'影响竞争力', max: 100},
				{ name :'研发竞争力', max: 100},
				{ name :'服务竞争力', max: 100},
				{ name :'孵化竞争力', max: 100},
				{ name :'规划竞争力', max: 100},
				{ name :'品牌竞争力', max: 100},
				{ name :'招商竞争力', max: 100}
	        ]
	    },
	    series: [{
	        name: '软实力',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        data : [
				{value : [85, 88, 100, 85, 100, 80,97,90,100],name : '软实力'}
	        ]
	    }]
    };
    myChart.setOption(option);
};

//右侧面积图（1）
function qyRightTreemapOneChart(){
    var myChart = echarts.init(document.getElementById('qyRightTreemapOne'));
	function colorMappingChange(value) {
        var levelOption = getLevelOption(value);
        chart.setOption({
            series: [{
                levels: levelOption
            }]
        });
    }

    var formatUtil = echarts.format;

    function getLevelOption() {
        return [
            {
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        gapWidth: 5
                    }
                }
            },
            {
                itemStyle: {
                    normal: {
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            }
        ];
    }

    myChart.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                    '收入: ' + formatUtil.addCommas(value) + ' 元',
                ].join('');
            }
        },

        series: [
            {
                name:'收入',
                type:'treemap',
                breadcrumb: {
                    show:false
                },
                nodeClick: false,
                visibleMin: 300,
                roam: false,
                width: "90%",
                height: "90%",
                top:'0',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                levels: getLevelOption(),
                data: diskDataOne
            }
        ]
    });
    myChart.setOption(option);
};

//右侧面积图（1）
function qyRightTreemapTwoChart(){
    var myChart = echarts.init(document.getElementById('qyRightTreemapTwo'));
	function colorMappingChange(value) {
        var levelOption = getLevelOption(value);
        chart.setOption({
            series: [{
                levels: levelOption
            }]
        });
    }

    var formatUtil = echarts.format;

    function getLevelOption() {
        return [
            {
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        gapWidth: 5
                    }
                }
            },
            {
                itemStyle: {
                    normal: {
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            }
        ];
    }

    myChart.setOption(option = {
        tooltip: {
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                    '利润: ' + formatUtil.addCommas(value) + ' 元',
                ].join('');
            }
        },

        series: [
            {
                name:'利润',
                type:'treemap',
                breadcrumb: {
                    show:false
                },
                nodeClick: false,
                visibleMin: 300,
                roam: false,
                width: "90%",
                height: "90%",
                top:'0',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                levels: getLevelOption(),
                data: diskDataTwo
            }
        ]
    });
    myChart.setOption(option);
};

//医药右侧关系图
function qyRightGraphChart(){
    var myChart = echarts.init(document.getElementById('qyRightGraph'));
    option = {
        color:["#3BAEDA","#45f196","#2d88f0","#00baff","#00e4ff","#5ceeff","#00af94","#00ffd8","#45f196","#ffffff"],
        legend: {
            data:['公司','药品'],
            textStyle: {
                color:"#b3b3b3"
            },
            bottom:'0'
        },
        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                normal: {
                    show:true,
                    position: 'right',
                    formatter: '{b} ({c})'
                }
            },
            draggable: true,
            symbolSize: 10,
            data: webkitDep.nodes,
            categories: webkitDep.categories,
            force: {
                // initLayout: 'circular'
                // repulsion: 20,
                edgeLength: 60,
                repulsion: 90,
                gravity: 0.1
            },
            edges: webkitDep.links
        }]
    };
    myChart.setOption(option);
}

function qyLeftTurn(obj){
	$(obj).addClass('active').siblings().removeClass('active');
	$('.leftBottomContent ul li').hide().eq($(obj).data('id')).show();
	$('.titleList ul li').hide().eq($(obj).data('id')).show();
	if($(obj).data('id') == 1){
		qyLeftRadarOneChart();
		qyLeftRadarTwoChart();
	}else if($(obj).data('id') == 2){
		$("#bestBiological").empty().append("<div><span>编码</span><span>中国最佳生物医药园区TOP10</span></div>");
		$.each(bestBiologicalData,function(){
			$("#bestBiological").append("<div></div>");
			$.each(this,function(){
				$("#bestBiological div:last").append('<span>'+this+'</span>');
			});
		});
	}
}
function turnNavigationChart(obj) {
	$(obj).addClass('turnNavigationActive').siblings().removeClass('turnNavigationActive');
	qyRightGraphChart();
}
function turnNavigationLR(obj) {
	if($(obj).data("id") == "left"){
        if($(".turnNavigation").css("left") == "0px"){
            $(".turnNavigation").animate({left:"-1000px"});
        }else{
            $(".turnNavigation").animate({left:parseInt($(".turnNavigation").css("left").split("px")[0])+500});
        }
    }else{
        if($(".turnNavigation").css("left") == "-1000px"){
            $(".turnNavigation").animate({left:"0px"});
        }else{
            $(".turnNavigation").animate({left:parseInt($(".turnNavigation").css("left").split("px")[0])-500});
        }
    }
}
function zcBtnTurn(obj){
	$(obj).addClass('zcBtnActive').siblings().removeClass('zcBtnActive');
	$("#zcBtnBody").text(zcBtnBodyData[$(obj).data('id')]);
}
