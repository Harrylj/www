// 基于准备好的dom，初始化echarts实例
var myChart_car_01 = echarts.init(document.getElementById('ibl-four-car-01'));
var myChart_car_02 = echarts.init(document.getElementById('ibl-four-car-02'));
var myChart_car_03 = echarts.init(document.getElementById('ibl-four-car-03'));

// 指定图表的配置项和数据
var option_car_01 = {
	// 添加左侧顶部标题
	title: {
		text: '单位(KW)'
	},
	tooltip: {
		trigger: 'axis'
	},
  // 移动图标位置
	grid: {
		left: '0',
		//right: '-20%',
		//top: '100%',
		containLabel: true
	},
  visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },

	xAxis: {
		show: true,
		type: 'category',
		boundaryGap: false,
		data: ['1', '2', '3', '4', '5', '6', '7']
	},
	yAxis: {
		show: true,
		//type: 'value',
		type: 'value',
		splitLine: {
			show: false
		}, //去掉网格线
		axisLabel: {
      formatter: '{value} kw'   // 右侧添加单位ml
    }
	},

	series: [{
			// name: '1',
			type: 'line',
			stack: '总量',
			//symbol:'star',//拐点样式
      //symbolSize: 8,//拐点大小
      smooth: true, // 是否为曲线
			data: [120, 132, 141, 154, 290, 230, 240],
			itemStyle: { //自定义线条颜色
				normal: {
					color: 'transparent',
					lineStyle: {
					  width:3,//折线宽度
						color: 'rgb(8,220,206)' // 折线颜色
					}
				}
			}
			
		}
	
	]
};

// 
var option_car_02 = {
	title: {
		text: ' '
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		// data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
	},
	grid: {
		left: '-20%',
		//right: '-20%',
		top: '100%',
		containLabel: true
	},
	/*
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	*/
	xAxis: {
		show: false,
		type: 'category',
		boundaryGap: false,
		data: ['1', '2', '3', '4', '5', '6', '7']
	},
	yAxis: {
		show: false,
		type: 'value',
		splitLine: {
			show: false
		}, //去掉网格线
	},
	series: [{
			// name: '1',
			type: 'line',
			stack: '总量',
			data: [120, 132, 101, 134, 90, 230, 210],
			itemStyle: { //自定义线条颜色
				normal: {
					color: 'transparent',
					lineStyle: {
						color: '#373c41'
					}
				}
			},

		},
		{
			// name: '2',
			type: 'line',
			stack: '总量',
			data: [-100, -62, 191, 234, 290, 330, 410],
			itemStyle: { //自定义线条颜色
				normal: {
					color: '#c8839d',
					lineStyle: {
						color: '#c8839d'
					}
				}
			},
		}
	]
};
var option_car_03 = {
	title: {
		text: ' '
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		// data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
	},
	grid: {
		left: '-20%',
		//right: '-20%',
		top: '100%',
		containLabel: true
	},
	/*
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	*/
	xAxis: {
		show: false,
		type: 'category',
		boundaryGap: false,
		data: ['1', '2', '3', '4', '5', '6', '7']
	},
	yAxis: {
		show: false,
		type: 'value',
		splitLine: {
			show: false
		}, //去掉网格线
	},
	series: [{
			// name: '1',
			type: 'line',
			stack: '总量',
			data: [120, 132, 101, 134, 190, 230, 210],
			itemStyle: { //自定义线条颜色
				normal: {
					color: 'transparent',
					lineStyle: {
						color: '#373c41'
					}
				}
			},

		},
		{
			// name: '2',
			type: 'line',
			stack: '总量',
			data: [-100, -62, 191, 334, 490, 530, 610],
			itemStyle: { //自定义线条颜色
				normal: {
					color: '#6b76cb',
					lineStyle: {
						color: '#6b76cb'
					}
				}
			},
		}
	]
};

// 使用刚指定的配置项和数据显示图表。
myChart_car_01.setOption(option_car_01);
myChart_car_02.setOption(option_car_02);
myChart_car_03.setOption(option_car_03);