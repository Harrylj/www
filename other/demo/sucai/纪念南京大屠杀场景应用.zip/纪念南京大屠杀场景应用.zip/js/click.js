var ding_num = 0;
var ding = document.getElementById("cms1").value;
getNumFirst(ding);
function getNum(c) {
    var a = "";
    var b = $.ajax({url: "http://124.238.253.113:80?id=" + c + "&num=" + ding_num, type: "GET", dataType: "jsonp", jsonpCallback: "callback", success: function (d) {
        a = d.reply;
        if (a != "") {
            document.getElementById(c).innerHTML = a
        }
    }});
    if (ding_num != 2) {
        if (c.indexOf("cms1") != -1) {
            $("i[class='ico-fn-up ico-fn-up']").removeClass("ico-fn-up ico-fn-up").addClass("ico-fn-up ico-fn-up_h")
        } else {
            $("i[class='ico-fn-down']").removeClass("ico-fn-down").addClass("ico-fn-down_h")
        }
    }
    ding_num = 2
}
function getNumFirst(b) {
    var a = "";
    var c = $.ajax({url: "http://124.238.253.113:80?d_id=" + b + "&num=" + ding_num, type: "GET", dataType: "jsonp", jsonpCallback: "callback", success: function (e) {
        var d = e.ding;
        if (!(d === "undefined") && d != "null") {
            document.getElementById(b).innerHTML = d
        } else {
            document.getElementById(b).innerHTML = "0"
        }
    }});
    ding_num = 1
};