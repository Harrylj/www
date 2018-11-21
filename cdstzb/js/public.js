// 公用二维码--格式 publicEWM('.classname')
function publicEWM(fatherClass) {
  var addEle = $('<div class= "index-gzh-div" ><img src="images/exam-ewm.png" alt=""><p>"统战新语"公众号</p></div>'),
    fatherDiv = $(fatherClass);
  addEle.appendTo(fatherDiv)
}
// 更新时间
function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  var day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  // add a zero in front of numbers<10
  m = checkTime(m)
  s = checkTime(s)
  // document.getElementById('txt').innerHTML = h + ":" + m + ":" + s
  document.getElementsByClassName('tziht-one')[0].innerHTML = today.getFullYear() + '年' + today.getMonth() + '月' + today.getDate() + '日 ' + h + ":" + m + ":" + s + ' ' + day[today.getDay()];
  t = setTimeout('startTime()', 500)
}
// 时间添加0
function checkTime(i) {
  if(i < 10) {
    i = "0" + i
  }
  return i
}

$(function() {
  // 调用公用二维码
  publicEWM('.index-gzh')
})