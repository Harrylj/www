var niulock = 1;
var niunum = 1;


//GET请求执行结果，带load
$(function () {
	$('body').on('click','#www-hatudou-com-url-btn',function (){
		showLoader();
        var $url = this.href;
        $.get($url, function (data){
            if (data.code==1) {
				hideLoader();
                layer.msg(data.msg, function(){
					location.href = data.url;
				});
            }else{
				hideLoader();
                layer.msg(data.msg);
				setTimeout(function (){
					lock = 0;
				},3000);
            }
        }, "json");
        return false;
    });
});

//哈土豆添加弹窗编辑,傻逼来抄袭
function showWindow(width,hight,url,title){
	layer.open({
	  type: 2,
	  title:title,
	  area:[width,hight],
	  fixed: false, 
	  maxmin: true,
	  content: url
	});
}

//图片弹窗
function popUpPic(id){
	layer.photos({
		photos: '#layer-photos-demo-'+id,
		shift: 5 //0-6鐨勯€夋嫨锛屾寚瀹氬脊鍑哄浘鐗囧姩鐢荤被鍨嬶紝榛樿闅忔満
	}); 
}





function getLocation(){
	navigator.geolocation.getCurrentPosition(Local);
}


function dingwei(page, lat, lng) {
    page = page.replace('llaatt', lat);
    page = page.replace('llnngg', lng);
    $.get(page, function (data) {
    }, 'html');
}


function Local(position) {
	var lng = position.coords.longitude;
	var lat = position.coords.latitude;
	var page =  "/wap/near/dingwei/lat/"+lat+"/lng/"+lng+".html";
	$.get(page, function (data) {
		if(data == '1'){
			$("#local").html("附近");
		}
	}, 'html');
};


function showLoader(msg) {
	layer.load();
}

function hideLoader(){
    $("#loader").hide();
	layer.closeAll('loading');
}


function ajaxLogin(){
	window.location.href = "/wap/passport/login.html"; 
}

function loaddata(page, obj, sc) {
    var link = page.replace('0000', niunum);
    showLoader('正在加载中....');

    $.get(link, function (data) {
        if (data != 0) {
            obj.append(data);
        }
        niulock = 0;
        hideLoader();
    }, 'html');
    if (sc === true) {
        $(window).scroll(function () {
			var wh = $(window).scrollTop();
			var xh = $(document).height() - $(window).height() - 70;
            if (!niulock && wh >= xh ) {
                niulock = 1;
                niunum++;
                var link = page.replace('0000', niunum);
                showLoader('正在加载中....');
				var timeout = setTimeout(function(){
					niulock = 0;
					hideLoader();
				},5000);
                $.get(link, function (data) {
                    if (data != 0) {
						if(timeout){ //清除定时器
							clearTimeout(timeout);
							timeout = null;
						}
                        obj.append(data);
                    }
                    niulock = 0;
                    hideLoader();
                }, 'html');
            }
        });
    }
}

var input_array = Array();
$(document).ready(function (){
    $("input").each(function () {
        if (!$(this).val()) {
            $(this).val($(this).attr('placeholder'));
        }
        if ($(this).attr('type') == 'password') {
            input_array.push($(this).attr('name'));
            $(this).attr('type', 'text');
        }
    });
    $("input").focus(function () {
        if ($(this).val() == $(this).attr('placeholder')) {
            $(this).val('');
        }
        if (input_array.indexOf($(this).attr('name')) >= 0) {
            $(this).attr('type', 'password');
        }

    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val($(this).attr('placeholder'));
        }
        if ($(this).attr('type') == 'password' && $(this).val() == $(this).attr('placeholder')) {
            input_array.push($(this).attr('name'));
            $(this).attr('type', 'text');
        }
    });
	
	hideLoader();
});

function check_user_mobile(url1,url2){
	layer.open({
		type: 1,
		title:'<h4>请绑定手机后操作</h4>',
		skin: 'layui-layer-molv', //加上边框
		area: ['90%', '300px'], //宽高
		shift:6,
		content: '<div class="form-auto form-x"><div class="form-group"><div class="label"><label>手机号</label></div><div class="field form-inline"><input class="input input-auto" name="mobile" id="mobile" value="" placeholder="填写手机号码" size="20" type="text"> <button class="button margin-top bg-yellow" id="jq_send">获取验证码</button></div></div><div class="form-group"><div class="label" ><label>验证码</label></div><div class="field"><input class="input input-auto" name="yzm" id="yzm" value="" size="10" placeholder="填写验证码" type="text"></div></div><div class="form-button"><button id="go_mobile" class="button bg-yellow edit_post" type="submit">立刻认证</button></div></div>'
	});
	//获取验证码
	var mobile_timeout;
	var mobile_count = 100;
	var mobile_lock = 0;
	$(function () {
		$("#jq_send").click(function () {

			if (mobile_lock == 0) {
				mobile_lock = 1;
				$.ajax({
					url: url1,
					data: 'mobile=' + $("#mobile").val(),
					type: 'post',
					success: function (data) {
						if (data.status == 'success') {
							mobile_count = 60;
							layer.msg(data.msg,{icon:1});
							BtnCount();
						} else {
							mobile_lock = 0;
							layer.msg(data.msg,{icon:2});
						}
					}
				});
			}

		});
	});
	BtnCount = function () {
		if (mobile_count == 0) {
			$('#jq_send').html("重新发送");
			mobile_lock = 0;
			clearTimeout(mobile_timeout);
		}
		else {
			mobile_count--;
			$('#jq_send').html("重新发送(" + mobile_count.toString() + ")秒");
			mobile_timeout = setTimeout(BtnCount, 1000);
		}
	};
	//提交
	$('#go_mobile').click(function(){
		var ml = $('#mobile').val();
		var y = $('#yzm').val();
		$.post(url2,{mobile:ml,yzm:y},function(result){										
			if(result.status == 'success'){
				layer.msg(result.msg);
				setTimeout(function(){
					location.reload(true);
				},3000);
			}else{
				layer.msg(result.msg,{icon:2});
			}														
		},'json');
	})
	
	$('.layui-layer-content').css('padding','15px');
	
}


function change_user_mobile(url1,url2){
	layer.open({
		type: 1,
		title:'请绑定手机后操作',
		skin: 'layer-ext-demo', //加上边框
		area: ['90%', '300px'], //宽高
		content: '<div class="padding-big">手机号<br /><input name="mobile" id="mobile" type="text" size="13" class="input input-auto" /> <button class="button margin-top bg-yellow" type="button" id="jq_send">获取验证码</button><br /><div class="blank-10"></div>验证码<br /><input  class="input input-auto" size="10"  name="yzm" id="yzm" type="text" /> 输入验证码<br><div class="blank-20"></div><input type="submit" value="立刻认证" class="button bg-yellow"  id="go_mobile" /></div>'
	});
	//获取验证码
	var mobile_timeout;
	var mobile_count = 100;
	var mobile_lock = 0;
	$(function () {
		$("#jq_send").click(function () {
			if (mobile_lock == 0) {
				mobile_lock = 1;
				$.ajax({
					url: url1,
					data: 'mobile=' + $("#mobile").val(),
					type: 'post',
					success: function (data) {
						if (data.status == 'success') {
							mobile_count = 60;
							layer.msg(data.msg,{icon:1});
							BtnCount();
						} else {
							mobile_lock = 0;
							layer.msg(data.msg,{icon:2});
						}
					}
				});
			}

		});
	});
	BtnCount = function () {
		if (mobile_count == 0) {
			$('#jq_send').html("重新发送");
			mobile_lock = 0;
			clearTimeout(mobile_timeout);
		}else {
			mobile_count--;
			$('#jq_send').html("重新发送(" + mobile_count.toString() + ")秒");
			mobile_timeout = setTimeout(BtnCount, 1000);
		}
	};
	//提交
	$('#go_mobile').click(function(){
		var ml = $('#mobile').val();
		var y = $('#yzm').val();
		$.post(url2,{mobile:ml,yzm:y},function(result){										
			if(result.status == 'success'){
				layer.msg(result.msg,{icon:1});
				setTimeout(function(){
					location.reload(true);
				},3000);
			}else{
				layer.msg(result.msg,{icon:2});
			}														
		},'json');
	})	
	
	
	$('.layui-layer-title').css('color','#ffffff').css('background','#2fbdaa');
	
}

//获取城市、地区、商圈的下拉菜单
function get_option(){

		var city_id = 0;
		var area_id = 0;
		var business_id = 0;
	
		var city_str = '<option value="0">请选择...</option>';
		for (a in cityareas.city) {
			if (city_id == cityareas.city[a].city_id) {
				city_str += '<option selected="selected" value="' + cityareas.city[a].city_id + '">' + cityareas.city[a].name + '</option>';
			} else {
				city_str += '<option value="' + cityareas.city[a].city_id + '">' + cityareas.city[a].name + '</option>';
			}
		}

		$("#city_id").html(city_str);

		$("#city_id").change(function () {
			if ($("#city_id").val() > 0) {
				city_id = $("#city_id").val();
				var area_str = ' <option value="0">请选择...</option>';
				for (a in cityareas.area) {
					if (cityareas.area[a].city_id == city_id) {
						if (area_id == cityareas.area[a].area_id) {
							area_str += '<option selected="selected" value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
						} else {
							area_str += '<option value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
						}
					}
				}
				$("#area_id").html(area_str);
				$("#business_id").html('<option value="0">请选择...</option>');
			} else {
				$("#area_id").html('<option value="0">请选择...</option>');
				$("#business_id").html('<option value="0">请选择...</option>');
			}

		});

		if (city_id > 0) {
			var area_str = ' <option value="0">请选择...</option>';
			for (a in cityareas.area) {
				if (cityareas.area[a].city_id == city_id) {
					if (area_id == cityareas.area[a].area_id) {
						area_str += '<option selected="selected" value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
					} else {
						area_str += '<option value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
					}
				}
			}
			$("#area_id").html(area_str);
		}


		$("#area_id").change(function () {
			if ($("#area_id").val() > 0) {
				area_id = $("#area_id").val();
				var business_str = ' <option value="0">请选择...</option>';
				for (a in cityareas.business) {
					if (cityareas.business[a].area_id == area_id) {
						if (business_id == cityareas.business[a].business_id) {
							business_str += '<option selected="selected" value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
						} else {
							business_str += '<option value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
						}
					}
				}
				$("#business_id").html(business_str);
			} else {
				$("#business_id").html('<option value="0">请选择...</option>');
			}

		});

		if (area_id > 0) {
			var business_str = ' <option value="0">请选择...</option>';
			for (a in cityareas.business) {
				if (cityareas.business[a].area_id == area_id) {
					if (business_id == cityareas.business[a].business_id) {
						business_str += '<option selected="selected" value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
					} else {
						business_str += '<option value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
					}
				}
			}
			$("#business_id").html(business_str);
		}
		$("#business_id").change(function () {
			business_id = $(this).val();
		});

}

function get_option2(){

		var city_id = 0;
		var area_id = 0;
		var business_id = 0;

        var city_str = ' <option value="0">请选择...</option>';
        for (a in cityareas.city) {
            city_str += '<option value="' + cityareas.city[a].city_id + '">' + cityareas.city[a].name + '</option>';
        }
// console.log(city_str);

        $("#city_id").html(city_str).chosen({search_contains: true}).change(function(){
            var area_str = ' <option value="0">请选择...</option>';
            if ($("#city_id").val() > 0) {
                city_id = $("#city_id").val();
                
                for (a in cityareas.area) {
                    if (cityareas.area[a].city_id == city_id) {
                        area_str += '<option value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
                    }
                }
            }
            $("#area_id").html(area_str).chosen({search_contains: true}).change(function(){
                var business_str = ' <option value="0">请选择...</option>';
                if ($("#area_id").val() > 0) {
                    area_id = $("#area_id").val();
                    for (a in cityareas.business) {
                        if (cityareas.business[a].area_id == area_id) {
                            business_str += '<option value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
                        }
                    }
                }
                $("#business_id").html(business_str).chosen({search_contains: true}).change();
                $(".seleFl").trigger("chosen:updated");

            });
            $("#area_id").change();
            $(".seleFl").trigger("chosen:updated");

        });
        $("#city_id").change();

}




function changeCAB(c,a,b){
	$("#city_ids").unbind('change');
	$("#area_ids").unbind('change');
	var city_ids = c;
	var area_ids = a;
	var business_ids = b;
	var city_str = ' <option value="0">请选择...</option>';
	for (b in cityareas.city) {
		if (city_ids == cityareas.city[b].city_id) {
			city_str += '<option selected="selected" value="' + cityareas.city[b].city_id + '">' + cityareas.city[b].name + '</option>';
		} else {
			city_str += '<option value="' + cityareas.city[b].city_id + '">' + cityareas.city[b].name + '</option>';
		}
	}
	$("#city_ids").html(city_str);

	$("#city_ids").change(function () {
		if ($("#city_ids").val() > 0) {
			city_ids = $("#city_ids").val();
			var area_str = ' <option value="0">请选择...</option>';
			for (b in cityareas.area) {
				if (cityareas.area[b].city_id == city_ids) {
					if (area_ids == cityareas.area[b].area_id) {
						area_str += '<option selected="selected" value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
					} else {
						area_str += '<option value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
					}
				}
			}
	   
			$("#area_ids").html(area_str);
			$("#business_ids").html('<option value="0">请选择...</option>');
		  
			
		} else {
			$("#area_ids").html('<option value="0">请选择...</option>');
			$("#business_ids").html('<option value="0">请选择...</option>');
		}

	});

	if (city_ids > 0) {
		var area_str = ' <option value="0">请选择...</option>';
		for (b in cityareas.area) {
			if (cityareas.area[b].city_id == city_ids) {
				if (area_ids == cityareas.area[b].area_id) {
					area_str += '<option selected="selected" value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
				} else {
					area_str += '<option value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
				}
			}
		}
		$("#area_ids").html(area_str);
	}


	$("#area_ids").change(function () {
		if ($("#area_ids").val() > 0) {
			area_ids = $("#area_ids").val();
			var business_str = ' <option value="0">请选择...</option>';
			for (b in cityareas.business) {
				if (cityareas.business[b].area_id == area_ids) {
					if (business_ids == cityareas.business[b].business_id) {
						business_str += '<option selected="selected" value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
					} else {
						business_str += '<option value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
					}
				}
			}
			$("#business_ids").html(business_str);
		} else {
			$("#business_ids").html('<option value="0">请选择...</option>');
		}

	});

	if (area_ids > 0) {
		var business_str = ' <option value="0">请选择...</option>';
		for (b in cityareas.business) {
			if (cityareas.business[b].area_id == area_ids) {
				if (business_ids == cityareas.business[b].business_id) {
					business_str += '<option selected="selected" value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
				} else {
					business_str += '<option value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
				}
			}
		}
		$("#business_ids").html(business_str);
	}
	$("#business_ids").change(function () {
		business_ids = $(this).val();
	});
}



function boxmsg(msg, url, timeout, callback) { //信息,跳转地址,时间
    layer.msg(msg);
    if (url) {
        setTimeout(function () {
            window.location.href = url;
        }, timeout ? timeout : 3000);
    } else if (url === 0) {
        setTimeout(function () {
            location.reload(true);
        }, timeout ? timeout : 3000);
    } else {
        eval(callback);
    }

}

function boxopen(msg, close, style) {
    layer.open({
        type: 1,
        skin: style, //样式类名
        closeBtn: close, //不显示关闭按钮
        shift: 2,
        shadeClose: true, //开启遮罩关闭
        content: msg
    });
}
//新增
function get_night(stime,ltime){

            var  aDate,  oDate1,  oDate2,  iDays  
            aDate  =  stime.split("-")  


			s1 = new Date(stime.replace(/-/g, "/"));

			s2 = new Date(ltime.replace(/-/g, "/"));

var days = s2.getTime() - s1.getTime();
var iDays = parseInt(days / (1000 * 60 * 60 * 24));

/*
    var  aDate,  oDate1,  oDate2,  iDays  
    aDate  =  stime.split("-")  
    oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    
    aDate  =  ltime.split("-")  
    oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
    iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    */
    return  iDays  
}