$(function () {
    function a() {
        var d = $("#J-form-login input[name=username]").val();
        $("#error").empty();
        if (d === null || d === "" || d === "邮箱/手机号") {
            $("#error").html("邮箱/手机号不能为空");
            return false
        } else {
            $("#error").html("")
        }
        var b = $("#J-form-login input[name=password]").val();
        if (b === null || b === "") {
            $("#error").html("请输入密码");
            return false
        } else {
            $("#error").html("")
        }
        if (failNum > 2) {
            var c = $("#J-form-login input[name=rendno]").val();
            if (c === null || c === "") {
                $("#error").html("验证码为空");
                return false
            } else {
                $("#error").html("")
            }
        }
        return true
    }

    $("#btn-enter", "#J-form-login").click(function () {
        if (a()) {
            $("#J-form-login").submit()
        }
    });
    piaolala.rendno.init("#J-form-login");
    $("#J-form-login input").keydown(function (b) {
        if (b.keyCode === 13) {
            if (a()) {
                $("#J-form-login").submit()
            }
        }
    })
});