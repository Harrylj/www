/**
 * Created by Administrator on 2015/7/9.
 */
$(function(){
	//选择时间段
    $('.vo-time').on('click',function(){
        $(this).children('.vo-time-box')
            .addClass('vo-time-check');
        $(this).siblings()
            .children('.vo-time-box')
            .removeClass('vo-time-check');
    });
    
    //选择日期
    var newjavascript={
		plugdatetime:function ($dateTxt,type) {
				//var curr = new Date().getFullYear();
				var voDate = new Date(),
					voDay = voDate.getDate(),
				 	voMonth = voDate.getMonth(),
					voYear = voDate.getYear() + 1900;
				var opt = {}
				opt.time = {preset : type};
				opt.date = {
                    preset : type,
                    minDate: new Date(voYear,voMonth,voDay),
                    maxDate: new Date(voYear+1,12,31),
                    stepMinute: 1
                };
				opt.datetime = {
					preset : type,
					minDate: new Date(2010,1,01,01,01),
					maxDate: new Date(2020,12,3,01,01),
					stepMinute: 1
				};

				$dateTxt.val(voYear+'年'+(voMonth+1)+'月'+voDay +'日').scroller('destroy').scroller($.extend(opt[type], { 
					theme: "sense-ui", 
					mode: "scroller", 
					display: "modal", 
					lang: "english",
					monthText: "月",
					dayText: "日",
					yearText: "年",
					hourText: "时",
					minuteText: "分",
					ampmText:"上午/下午",
					setText: '确定',
					cancelText: '取消',
					//dateFormat: 'yy-mm-dd'
                    dateFormat: 'yy'+'年'+'mm'+'月'+'dd'+'日'
				})
			);
		}
	}
	newjavascript.plugdatetime($(".vo-date"), "date")
	$('.vo-p-date').on('click',function(){
		$(".vo-date").focus();
	})
	$('.vo-date').change(function(){
		$('.vo-p-date').html($(this).val());
	})
});