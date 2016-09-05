
function GetQueryString(name) {//获取url
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function RegPhone(userPhone) {
    var reg = /^[1][3-8]\d{9}$/;
    if (!reg.test(userPhone)) {
        return false;
    } else {
        return true;
    }
}


function ShowDiv(show_div) {
    document.getElementById(show_div).style.display = 'block';
};
function CloseDiv(show_div) {
    document.getElementById(show_div).style.display = 'none';
};