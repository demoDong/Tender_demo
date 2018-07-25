//医药中间地图(上)
function yyMiddleMapChartOne(){
    var myChart = echarts.init(document.getElementById('yyMiddleMap'));
    option = {
        color:['#FF084D','#66A6FF','#F09819','#495AFF','#0BA360','#FDA085'],
        title:null,
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return value[2] + "</br>" + value[3];
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
        series: yyMiddleMapDataOne[0]
    };
    myChart.setOption(option);
    var i=1;
    yyMiddleMapIOne = setInterval(function(){
        myChart.setOption({
            series: yyMiddleMapDataOne[i]
        });
        if(i<6){
            i++;
        }else{
            i=0;
        }
    },5000);
}


[{
		name: '化学药品原料药',
		type: 'effectScatter',
		coordinateSystem: 'geo',
		symbolSize: 10,
		showEffectOn: 'render',
		rippleEffect: {
			brushType: 'stroke'
		},
		hoverAnimation: true,
		itemStyle: {
			normal: {
				color:'#fe00fe',
				shadowBlur: 10,
				shadowColor: '#333'
			}
		},
		data: [
			[116.121036,39.859693,"化学药品原料药工业企业","北京凌云建材化工有限公司"],
			[116.726685,39.864262,"化学药品原料药工业企业","北京市科益丰生物技术发展有限公司"],
			

		]
	}],