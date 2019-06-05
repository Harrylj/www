// 基于准备好的dom，初始化echarts实例
var width_auto = document.body.clientWidth + 'px';;
document.getElementById('echarts_es_01').style.width = width_auto;
document.getElementById('echarts_es_02').style.width = width_auto;
document.getElementById('echarts_es_03').style.width = width_auto;
document.getElementById('echarts_es_04').style.width = width_auto;
var myChart_es_01 = echarts.init(document.getElementById('echarts_es_01'));
var myChart_es_02 = echarts.init(document.getElementById('echarts_es_02'));
var myChart_es_03 = echarts.init(document.getElementById('echarts_es_03'));
var myChart_es_04 = echarts.init(document.getElementById('echarts_es_04'));
/*
alert(document.body.clientWidth)
        $('#echarts_es_01').css({'width': document.body.clientWidth});
  */      

var my_data_x_01 = ['04:00', '08:00', '12:00', '16:00','20:00', '24:00'];  // 日，x轴数据
var my_data_01 = ['120', '132', '141', '154', '290', '230'];  // 日, 生成数据
var my_unit_01 = 'kw'; // 日，Y轴单位


var my_data_x_02 = ['周一', '周二', '周三', '周四','周五', '周六', '周日'];  // 周，x轴数据
var my_data_02 = ['120', '132', '141', '154', '290', '230', '240'];  // 周, 生成数据
var my_unit_02 = 'kw'; // 周，Y轴单位

var my_data_x_03 = ['1', '2', '3', '4','5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];  // 月，x轴数据
var my_data_03 = ['120', '132', '141', '154', '290', '230', '240','120', '132', '141', '154', '290', '230', '240','120', '132', '141', '154', '290', '230', '240','120', '132', '141', '154', '290', '230', '240', '240', '240'];  // 月, 生成数据
var my_unit_03 = 'kw'; // 月，Y轴单位


var my_data_x_04 = ['1月', '2月', '3月', '4月','5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];  // 年，x轴数据
var my_data_04 = ['120', '132', '141', '154', '290', '230', '240', '120', '132'];  // 年, 生成数据
var my_unit_04 = 'kw'; // 年，Y轴单位


var my_x_color = "#686868"; // X轴颜色
var my_y_color = "#C2C2C2"; // Y轴颜色

// 指定图表的配置项和数据
var option_es_01 = {
  // 添加左侧顶部标题
  title: {
    // text: '单位(KW)'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10px',
    containLabel: true
  },
   visualMap: {
            top: 10,
            right: 10,
            show: false,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#E0E0E0'
            }, {
                gt: 50,
                lte: 100,
                color: '#A1B5F9'
            }, {
                gt: 100,
                lte: 150,
                color: '#FBEBA5'
            }, {
                gt: 150,
                lte: 200,
                color: '#F1A3B7'
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
  // X轴数据
  xAxis: {
    show: true,
    type: 'category',
    // boundaryGap: false,  // 是否有边界线
    data: my_data_x_01,
    axisLine: {
      lineStyle: {
        color:  my_x_color // 更改坐标轴颜色
      }
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: {
      show: false
    }, //去掉网格线
    axisLabel: {
      formatter:  '{value} ' + my_unit_01 // Y轴添加单位
    },
    axisLine: {
      lineStyle: {
        color: my_y_color // 更改坐标轴颜色
      }
    }
  },
  // 生成数据
  series: [{
      type: 'bar',
      stack: '总量',
      barGap: 0,
      //symbol:'star',//拐点样式
      //symbolSize: 8,//拐点大小
      smooth: true, // 是否为曲线
      data: my_data_01,
      itemStyle: { //自定义线条颜色
        normal: {
          color: 'transparent',
          lineStyle: {
            width: 3, //折线宽度
            color: 'rgb(8,220,206)' // 折线颜色
          }
        }
      }
  }

  ]
};
var option_es_02 = {
  // 添加左侧顶部标题
  title: {
    // text: '单位(KW)'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10px',
    containLabel: true
  },
   visualMap: {
            top: 10,
            right: 10,
            show: false,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#E0E0E0'
            }, {
                gt: 50,
                lte: 100,
                color: '#A1B5F9'
            }, {
                gt: 100,
                lte: 150,
                color: '#FBEBA5'
            }, {
                gt: 150,
                lte: 200,
                color: '#F1A3B7'
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
  // X轴数据
  xAxis: {
    show: true,
    type: 'category',
    // boundaryGap: false,  // 是否有边界线
    data: my_data_x_02,
    axisLine: {
      lineStyle: {
        color:  my_x_color // 更改坐标轴颜色
      }
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: {
      show: false
    }, //去掉网格线
    axisLabel: {
      formatter:  '{value} ' + my_unit_02 // Y轴添加单位
    },
    axisLine: {
      lineStyle: {
        color: my_y_color // 更改坐标轴颜色
      }
    }
  },
  // 生成数据
  series: [{
      type: 'bar',
      stack: '总量',
      barGap: 0,
      //symbol:'star',//拐点样式
      //symbolSize: 8,//拐点大小
      smooth: true, // 是否为曲线
      data: my_data_02,
      itemStyle: { //自定义线条颜色
        normal: {
          color: 'transparent',
          lineStyle: {
            width: 3, //折线宽度
            color: 'rgb(8,220,206)' // 折线颜色
          }
        }
      }
  }

  ]
};
var option_es_03 = {
  // 添加左侧顶部标题
  title: {
    // text: '单位(KW)'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10px',
    containLabel: true
  },
   visualMap: {
            top: 10,
            right: 10,
            show: false,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#E0E0E0'
            }, {
                gt: 50,
                lte: 100,
                color: '#A1B5F9'
            }, {
                gt: 100,
                lte: 150,
                color: '#FBEBA5'
            }, {
                gt: 150,
                lte: 200,
                color: '#F1A3B7'
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
  // X轴数据
  xAxis: {
    show: true,
    type: 'category',
    // boundaryGap: false,  // 是否有边界线
    data: my_data_x_03,
    axisLine: {
      lineStyle: {
        color:  my_x_color // 更改坐标轴颜色
      }
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: {
      show: false
    }, //去掉网格线
    axisLabel: {
      formatter:  '{value} ' + my_unit_03 // Y轴添加单位
    },
    axisLine: {
      lineStyle: {
        color: my_y_color // 更改坐标轴颜色
      }
    }
  },
  // 生成数据
  series: [{
      type: 'bar',
      stack: '总量',
      barGap: 0,
      //symbol:'star',//拐点样式
      //symbolSize: 8,//拐点大小
      smooth: true, // 是否为曲线
      data: my_data_03,
      itemStyle: { //自定义线条颜色
        normal: {
          color: 'transparent',
          lineStyle: {
            width: 3, //折线宽度
            color: 'rgb(8,220,206)' // 折线颜色
          }
        }
      }
  }

  ]
};
var option_es_04 = {
  // 添加左侧顶部标题
  title: {
    // text: '单位(KW)'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10px',
    containLabel: true
  },
   visualMap: {
            top: 10,
            right: 10,
            show: false,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#E0E0E0'
            }, {
                gt: 50,
                lte: 100,
                color: '#A1B5F9'
            }, {
                gt: 100,
                lte: 150,
                color: '#FBEBA5'
            }, {
                gt: 150,
                lte: 200,
                color: '#F1A3B7'
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
  // X轴数据
  xAxis: {
    show: true,
    type: 'category',
    // boundaryGap: false,  // 是否有边界线
    data: my_data_x_04,
    axisLine: {
      lineStyle: {
        color:  my_x_color // 更改坐标轴颜色
      }
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: {
      show: false
    }, //去掉网格线
    axisLabel: {
      formatter:  '{value} ' + my_unit_04 // Y轴添加单位
    },
    axisLine: {
      lineStyle: {
        color: my_y_color // 更改坐标轴颜色
      }
    }
  },
  // 生成数据
  series: [{
      type: 'bar',
      stack: '总量',
      barGap: 0,
      //symbol:'star',//拐点样式
      //symbolSize: 8,//拐点大小
      smooth: true, // 是否为曲线
      data: my_data_04,
      itemStyle: { //自定义线条颜色
        normal: {
          color: 'transparent',
          lineStyle: {
            width: 3, //折线宽度
            color: 'rgb(8,220,206)' // 折线颜色
          }
        }
      }
  }

  ]
};

myChart_es_01.setOption(option_es_01);
myChart_es_02.setOption(option_es_02);
myChart_es_03.setOption(option_es_03);
myChart_es_04.setOption(option_es_04);