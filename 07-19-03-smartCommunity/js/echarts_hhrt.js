// 基于准备好的dom，初始化echarts实例
var width_auto = (document.body.clientWidth - 50) + 'px' ;
document.getElementById('echarts_hhrt_01').style.width = width_auto;
document.getElementById('echarts_hhrt_02').style.width = width_auto;
document.getElementById('echarts_hhrt_03').style.width = width_auto;
document.getElementById('echarts_hhrt_04').style.width = width_auto;
var myChart_es_01 = echarts.init(document.getElementById('echarts_hhrt_01'));
var myChart_es_02 = echarts.init(document.getElementById('echarts_hhrt_02'));
var myChart_es_03 = echarts.init(document.getElementById('echarts_hhrt_03'));
var myChart_es_04 = echarts.init(document.getElementById('echarts_hhrt_04'));
/*
alert(document.body.clientWidth)
        $('#echarts_hhrt_01').css({'width': document.body.clientWidth});
  */      

var my_data_x_01 = ['周一', '周二', '周三', '周四','周五', '周六', '周日'];  // 周，x轴数据
var my_data_01 = ['12', '13', '14', '15', '29', '23', '24'];  // 周, 生成数据
var my_unit_01 = '%'; // 周，Y轴单位

var my_data_x_02 = ['周一', '周二', '周三', '周四','周五', '周六', '周日'];  // 周，x轴数据
var my_data_02 = ['12', '13', '14', '15', '29'];  // 周, 生成数据
var my_unit_02 = '%'; // 周，Y轴单位

var my_data_x_03 = ['周一', '周二', '周三', '周四','周五', '周六', '周日'];  // 周，x轴数据
var my_data_03 = ['12', '13', '14', '15', '29', '24'];  // 周, 生成数据
var my_unit_03 = '%'; // 周，Y轴单位

var my_data_x_04 = ['周一', '周二', '周三', '周四','周五', '周六', '周日'];  // 周，x轴数据
var my_data_04 = ['12', '13', '15', '29', '23', '24'];  // 周, 生成数据
var my_unit_04 = '%'; // 周，Y轴单位



var my_x_color = "#666666"; // X轴颜色
var my_y_color = "#666666"; // Y轴颜色

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
                lte: 5,
                color: '#E0E0E0'
            }, {
                gt: 5,
                lte: 10,
                color: '#A1B5F9'
            }, {
                gt: 10,
                lte: 15,
                color: '#FBEBA5'
            }, {
                gt: 15,
                lte: 20,
                color: '#F1A3B7'
            }, {
                gt: 20,
                lte: 30,
                color: '#660099'
            }, {
                gt: 30,
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
    boundaryGap: false,
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
      type: 'line',
      stack: '总量',
      barGap: 0,
      smooth: true, // 是否为曲线
      data: my_data_01,
      areaStyle: {}
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
                lte: 5,
                color: '#E0E0E0'
            }, {
                gt: 5,
                lte: 10,
                color: '#A1B5F9'
            }, {
                gt: 10,
                lte: 15,
                color: '#FBEBA5'
            }, {
                gt: 15,
                lte: 20,
                color: '#F1A3B7'
            }, {
                gt: 20,
                lte: 30,
                color: '#660099'
            }, {
                gt: 30,
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
    boundaryGap: false,
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
      type: 'line',
      stack: '总量',
      barGap: 0,
      smooth: true, // 是否为曲线
      data: my_data_02,
      areaStyle: {}
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
                lte: 5,
                color: '#E0E0E0'
            }, {
                gt: 5,
                lte: 10,
                color: '#A1B5F9'
            }, {
                gt: 10,
                lte: 15,
                color: '#FBEBA5'
            }, {
                gt: 15,
                lte: 20,
                color: '#F1A3B7'
            }, {
                gt: 20,
                lte: 30,
                color: '#660099'
            }, {
                gt: 30,
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
    boundaryGap: false,
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
      type: 'line',
      stack: '总量',
      barGap: 0,
      smooth: true, // 是否为曲线
      data: my_data_03,
      areaStyle: {}
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
                lte: 5,
                color: '#E0E0E0'
            }, {
                gt: 5,
                lte: 10,
                color: '#A1B5F9'
            }, {
                gt: 10,
                lte: 15,
                color: '#FBEBA5'
            }, {
                gt: 15,
                lte: 20,
                color: '#F1A3B7'
            }, {
                gt: 20,
                lte: 30,
                color: '#660099'
            }, {
                gt: 30,
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
    boundaryGap: false,
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
      type: 'line',
      stack: '总量',
      barGap: 0,
      smooth: true, // 是否为曲线
      data: my_data_04,
      areaStyle: {}
  }

  ]
};



myChart_es_01.setOption(option_es_01);
myChart_es_02.setOption(option_es_02);
myChart_es_03.setOption(option_es_03);
myChart_es_04.setOption(option_es_04);