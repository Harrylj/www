var dom = document.getElementById("three-table-sfz");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
  title: {
    text: '车辆历史数据'
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      align: 'left'
    }
  },
  legend: {
    data: ['汇总', '小客车', '大客车', '货车']
  },
  xAxis: {
    type: 'category',
    boundaryGap: false, //取消左侧的间距
    data: []
  },
  yAxis: {

  },
  series: [{
      name: '汇总',
      type: 'line',
      data: []
    },
    {
      name: '小客车',
      type: 'line',
      data: []
    },
    {
      name: '大客车',
      type: 'line',
      data: []
    },
    {
      name: '货车',
      type: 'line',
      data: []
    }
  ]
};
if(option && typeof option === "object") {
  myChart.setOption(option, true);
}
myChart.showLoading();
$(function() {
  DownLoadCarCount();
});
var times = []; //类别数组（实际用来盛放X轴坐标值）
var seriestotal = [];
var seriescar = [];
var seriesbus = [];
var seriestruck = [];

function DownLoadCarCount() {
  $.ajax({
    url: "http://52.83.113.179:8088/ivs_hour_count.php",
    success: function(res) {
      console.log(res.cam_id_1, res.cam_id_2);
      var count = 12;
      for(var i = 1; i <= count; i++) {
        times.push(res.cam_id_1[count - i].create_time); //摄像头1 数据
        seriestotal.push(res.cam_id_1[count - i].car + res.cam_id_1[count - i].bus + res.cam_id_1[count - i].truck);
        seriescar.push(res.cam_id_1[count - i].car);
        seriesbus.push(res.cam_id_1[count - i].bus);
        seriestruck.push(res.cam_id_1[count - i].truck);
      }
      myChart.hideLoading(); //隐藏加载动画
      myChart.setOption({ //加载数据图表
        xAxis: {
          data: times
        },
        series: [{
            data: seriestotal
          },
          {
            data: seriescar
          },
          {
            data: seriesbus
          },
          {
            data: seriestruck
          }
        ]
      });
    },
    error: function(errorMsg) {
      alert("图表请求数据失败!");
      myChart.hideLoading();
    }
  });
}