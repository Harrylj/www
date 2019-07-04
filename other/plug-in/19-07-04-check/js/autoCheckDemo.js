var checkConfig = {
  finalBtnText: '确定',
  checkList: [{
    'unchecked': '检测身体状况',
    'checking': '正在检测身体状况...',
    'checked': '身体检测状况完成'
  }, {
    'unchecked': '检测精神状况',
    'checking': '正在检测精神状况...',
    'checked': '检测精神状况完成'
  }, {
    'unchecked': '检测智商等级',
    'checking': '正在检测智商等级...',
    'checked': '检测智商等级完成'
  }, {
    'unchecked': '检测技术能力',
    'checking': '正在检测技术能力...',
    'checked': '检测技术能力完成'
  }],
  isShowFinalBtn: true,
  callback: function() {
    alert('检测完成');
  },
  isAutoRunCallback: false,
  // 检测每一项的时间
  timeGap: 5000
};
// AutoCheck.run(checkConfig);