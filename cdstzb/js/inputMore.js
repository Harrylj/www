var search = {
        searchKeyword: function () {
            var nWord = $("#search-input").val();
            //var temarray = nWord.split(""); //分割
            var array=this.unique(nWord.split(""));
            var dsa = $("#search").find("ul li a");//获取全部列表
            var linumber = 0;

            $("#search ul li").show();
            for (var t = 0; t < dsa.length; t++) {
                $(dsa[t]).html($(dsa[t]).text());
                var temstr = ($(dsa[t]).text()).split("");
                var yes = false;
                for (var i = 0; i < array.length; i++) {
                    var posarr = this.findAll(temstr, array[i]);
                    if (posarr.length > 0) {
                        yes = true;
                        for (var j = 0; j < posarr.length; j++) {
                            temstr[posarr[j]] = "<em style='color:red;'>" + temstr[posarr[j]] + "</em>";
                        }
                    }
                }
                if (!yes) {
                    $(dsa[t]).closest("li").hide();
                }
                else {
                    linumber++;
                    var htmlstr = "";
                    for (var m = 0; m < temstr.length; m++) {
                        htmlstr += temstr[m];
                    }
                    $(dsa[t]).html(htmlstr);
                }

            }
            if (linumber == 0) {
                $("#search ul li").show();
                $("#search ul").slideDown(200);
            }
        },
        findAll: function (arr, str) {
            var results = [],
                len = arr.length,
                pos = 0;
            while (pos < len) {
                pos = arr.indexOf(str, pos);
                if (pos === -1) {
                    break;
                }
                results.push(pos);
                pos++;
            }
            return results;
        },
        unique: function (arr) {
            var new_arr = [];
            for (var i = 0; i < arr.length; i++) {
                var items = arr[i];
                //判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
                if ($.inArray(items, new_arr) == -1) {
                    new_arr.push(items);
                }
            }
            return new_arr;
        },
        changeValue: function (obj) {
            $('.dropdown ul').slideUp(200);
            var input = $(obj).find('.dropdown-selected');
            var ul = $(obj).find('ul');
            if (!ul.is(':visible')) {
                ul.slideDown('fast');
            } else {
                ul.slideUp('fast');
            }

            $(obj).find('ul a').click(function () {
                input.val($(this).text());
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active')
                $(this).closest('ul').slideUp(200);
                return false;
            })
            var e = this.getEvent();
            window.event ? e.cancelBubble = true : e.stopPropagation();
        },
        _init: function () {
            $("#search").on("click", "ul li a", function () {
                $("#search-input").val($(this).text());
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active')
                $(this).closest('ul').slideUp(200);
                return false;
            })
        },
        getEvent: function(){
        if(window.event){
            return window.event;
        }
        var f = arguments.callee.caller;
        do{
            var e = f.arguments[0];
            if(e && (e.constructor === Event || e.constructor===MouseEvent || e.constructor===KeyboardEvent)){
                return e;
            }
        }while(f=f.caller);
    }

    }

    search._init();