// 公用底部--格式 publicFooter('.classname')
function publicFooter(fatherClass){
  var addEle = $('<div class="title-img"></div><h2> 中共成都市委统战部</h2 ><h2>Copyright 2018 中共成都市委统战部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地址：四川省成都市蜀锦路59号第三办公区</h2>'),
    fatherDiv = $(fatherClass);
  addEle.appendTo(fatherDiv)
}
// 公用二维码--格式 publicEWM('.classname')
function publicEWM(fatherClass) {
  var addEle = $('<div class= "index-gzh-div" ><img src="images/exam-ewm.png" alt=""><p>"统战新语"公众号</p></div>'),
    fatherDiv = $(fatherClass);
  addEle.appendTo(fatherDiv)
}
// 公用顶部导航-- publicHeader('.classname')
function publicHeader(fatherClass){
  var addEle = $('<div class="ih-one"><a class= "ih-tilte" href = "#" > 考试平台首页</a ><div class="clear"></div></div>'),
    fatherDiv = $(fatherClass);
  addEle.appendTo(fatherDiv)
}