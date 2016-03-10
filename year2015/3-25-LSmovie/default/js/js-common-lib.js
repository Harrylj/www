(function () {
    window.piaolala = window.piaolala || {};
    piaolala.config = $.extend({basepath: "", loginback: function () {
    }}, piaolala.config);
    piaolala.vilidate = {basepath: piaolala.config ? (piaolala.config.basepath || "") : "", emailcheck: function (a) {
        var b = /^[a-zA-Z0-9_.$*-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (b.test(a)) {
            return true
        } else {
            return false
        }
    }, nickcheck: function (a) {
        return true
    }, mobilecheck: function (a) {
        var b = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/;
        if (b.test(a)) {
            return true
        } else {
            return false
        }
    }, rendnocheck: function (b) {
        var a = /^[a-zA-Z0-9]{6}$/;
        if (a.test(b)) {
            return true
        } else {
            return false
        }
    }, quannocheck: function (b) {
        var a = /^[0-9]{13}$/;
        if (a.test(b)) {
            return true
        } else {
            return false
        }
    }, viliRendcheck: function (b) {
        var a = /^[a-zA-Z0-9]{4}$/;
        if (a.test(b)) {
            return true
        } else {
            return false
        }
    }, passcheck: function (b) {
        var a = /^[A-Za-z0-9]{6,16}$/;
        if (a.test(b)) {
            return true
        } else {
            return false
        }
    }, islogin: function (c, b) {
        var a = this;
        $.ajax({url: a.basepath + "/user/isLogin.do", error: function (d) {
            alert("系统忙，请稍后再试！");
            return false
        }, success: function (d) {
            c(d, b)
        }})
    }};
    piaolala.tab = {show: function (b, a) {
        $("article").each(function () {
            var c = $(this);
            if (c.attr("id") === b) {
                c.show();
                if (a) {
                    window.location.hash = a
                }
            } else {
                c.hide()
            }
        })
    }};
    piaolala.util = piaolala.util ? piaolala.util : {};
    piaolala.util = {basepath: piaolala.config ? (piaolala.config.basepath || "") : "", format_mobile: function (a) {
        return a.replace(/\s/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "$1 $2 $3")
    }, unformat_mobile: function (a) {
        return a.replace(/[ ]/g, "")
    }, toDecimal: function (a) {
        var d = parseFloat(a);
        if (isNaN(d)) {
            return false
        }
        var d = Math.round(a * 100) / 100;
        var c = d.toString();
        var b = c.indexOf(".");
        if (b < 0) {
            b = c.length;
            c += "."
        }
        while (c.length <= b + 2) {
            c += "0"
        }
        return c
    }, timer: function (c, d) {
        var a;
        var e = function () {
            window.clearInterval(a);
            a = setInterval(b, 1000)
        };
        var b = function () {
            c = c - 1;
            if (c >= 0) {
                var f, g;
                if (c / 60 < 10) {
                    f = "0" + parseInt(c / 60)
                } else {
                    f = parseInt(c / 60)
                }
                if (c % 60 < 10) {
                    g = "0" + c % 60
                } else {
                    g = c % 60
                }
                d(f, g);
                e()
            } else {
                a = false
            }
        };
        b()
    }, loadmask: function (a, c) {
        var i = $.extend({href: "", form: ""}, a || {});
        var f = $("article").not("#J_city_changeArea").add($("banner")).add($("footer")).add($("header"));
        f.each(function () {
            $(this).hide()
        });
        var e = $("loader").removeClass("none");
        c = c ? c : 3000;
        var b = c / 1000;
        var g;
        var d = function () {
            window.clearInterval(g);
            g = setInterval(h, 1000)
        };
        var h = function () {
            b--;
            if (b > 0) {
                d()
            } else {
                g = false;
                f.each(function () {
                    $(this).show()
                });
                e.addClass("none")
            }
        };
        h();
        if (i.href) {
            window.loaction.href = i.href
        } else {
            if (i.form) {
                i.form.submit()
            }
        }
    }, alertinit: function (b) {
        var a = $("body");
        return function (h) {
            a.mask(h, {backgroudImg: "", width: 180, height: 40});
            var g = 3000;
            var c = g / 1000;
            var f;
            var d = function () {
                c--;
                window.clearInterval(f);
                f = setInterval(e, 1000)
            };
            var e = function () {
                if (c > 0) {
                    d()
                } else {
                    f = false;
                    a.unmask()
                }
            };
            e()
        }
    }, getRandImg: function (c) {
        var b = $.extend({change: null, width: "76px", height: "26px"}, c || {});
        var d = this.basepath + "/image.do?code=";
        var a = $('<div style="display:inline-block; margin:2px 10px;"/>').css({width: b.width, height: b.height}).css("background-image", "url(" + d + Math.random() + ")");
        a.add(b.change).click(function () {
            a.css("background-image", "url(" + d + Math.random() + ")")
        });
        return a
    }, goback: function () {
        history.go(-1)
    }, getCssTransform: function (c) {
        var a = "t,webkitT,MozT,msT,OT".split(",");
        var d = c.get(0);
        for (var b = 0; b < a.length; b++) {
            if (getComputedStyle(d, null)[a[b] + "ransform"] != null) {
                return getComputedStyle(d, null)[a[b] + "ransform"]
            }
        }
    }, setCssTransform: function (c, d) {
        var e = c.get(0);
        var a = "t,webkitT,MozT,msT,OT".split(",");
        for (var b = 0; b < a.length; b++) {
            e.style[a[b] + "ransform"] = d
        }
    }, logout: function () {
        var a = this;
        $.ajax({url: a.basepath + "/user/logout.do?code=" + Math.random(), error: function (b) {
            alert("系统忙，请稍后再试！");
            return false
        }, success: function (b) {
            window.location.href = a.basepath + "/index.do"
        }})
    }, cityChang: function (b) {
        $("#chaCk a").removeClass("bakfw");
        $("#ch" + b).addClass("bakfw");
        $(".town_more ul").addClass("none");
        if (b === "1") {
            var a = new Array();
            a[0] = "A";
            a[1] = "B";
            a[2] = "C";
            a[3] = "D";
            a[4] = "E";
            a[5] = "F";
            a[6] = "G";
            for (var c in a) {
                $("#" + a[c]).removeClass("none")
            }
        } else {
            if (b === "2") {
                var a = new Array();
                a[0] = "H";
                a[1] = "J";
                a[2] = "K";
                a[3] = "L";
                for (var c in a) {
                    $("#" + a[c]).removeClass("none")
                }
            } else {
                if (b === "3") {
                    var a = new Array();
                    a[0] = "M";
                    a[1] = "N";
                    a[2] = "P";
                    a[3] = "Q";
                    a[4] = "S";
                    a[5] = "T";
                    for (var c in a) {
                        $("#" + a[c]).removeClass("none")
                    }
                } else {
                    if (b === "4") {
                        var a = new Array();
                        a[0] = "W";
                        a[1] = "X";
                        a[2] = "Y";
                        a[3] = "Z";
                        for (var c in a) {
                            $("#" + a[c]).removeClass("none")
                        }
                    } else {
                        $(".town_more ul").removeClass("none")
                    }
                }
            }
        }
    }};
    $(function () {
        $("#J_buy_info").find("a").click(function () {
            var a = $(this).attr("href");
            window.loaction.href = a
        })
    })
}).call(this);
function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function (c) {
        var a = "";
        var k, h, f, j, g, e, d;
        var b = 0;
        c = _utf8_encode(c);
        while (b < c.length) {
            k = c.charCodeAt(b++);
            h = c.charCodeAt(b++);
            f = c.charCodeAt(b++);
            j = k >> 2;
            g = ((k & 3) << 4) | (h >> 4);
            e = ((h & 15) << 2) | (f >> 6);
            d = f & 63;
            if (isNaN(h)) {
                e = d = 64
            } else {
                if (isNaN(f)) {
                    d = 64
                }
            }
            a = a + _keyStr.charAt(j) + _keyStr.charAt(g) + _keyStr.charAt(e) + _keyStr.charAt(d)
        }
        return a
    };
    this.decode = function (c) {
        var a = "";
        var k, h, f;
        var j, g, e, d;
        var b = 0;
        c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (b < c.length) {
            j = _keyStr.indexOf(c.charAt(b++));
            g = _keyStr.indexOf(c.charAt(b++));
            e = _keyStr.indexOf(c.charAt(b++));
            d = _keyStr.indexOf(c.charAt(b++));
            k = (j << 2) | (g >> 4);
            h = ((g & 15) << 4) | (e >> 2);
            f = ((e & 3) << 6) | d;
            a = a + String.fromCharCode(k);
            if (e != 64) {
                a = a + String.fromCharCode(h)
            }
            if (d != 64) {
                a = a + String.fromCharCode(f)
            }
        }
        a = _utf8_decode(a);
        return a
    };
    _utf8_encode = function (b) {
        b = b.replace(/\r\n/g, "\n");
        var a = "";
        for (var e = 0; e < b.length; e++) {
            var d = b.charCodeAt(e);
            if (d < 128) {
                a += String.fromCharCode(d)
            } else {
                if ((d > 127) && (d < 2048)) {
                    a += String.fromCharCode((d >> 6) | 192);
                    a += String.fromCharCode((d & 63) | 128)
                } else {
                    a += String.fromCharCode((d >> 12) | 224);
                    a += String.fromCharCode(((d >> 6) & 63) | 128);
                    a += String.fromCharCode((d & 63) | 128)
                }
            }
        }
        return a
    };
    _utf8_decode = function (a) {
        var b = "";
        var d = 0;
        var e = c1 = c2 = 0;
        while (d < a.length) {
            e = a.charCodeAt(d);
            if (e < 128) {
                b += String.fromCharCode(e);
                d++
            } else {
                if ((e > 191) && (e < 224)) {
                    c2 = a.charCodeAt(d + 1);
                    b += String.fromCharCode(((e & 31) << 6) | (c2 & 63));
                    d += 2
                } else {
                    c2 = a.charCodeAt(d + 1);
                    c3 = a.charCodeAt(d + 2);
                    b += String.fromCharCode(((e & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    d += 3
                }
            }
        }
        return b
    }
}
piaolala.rendno = {basepath: piaolala.config ? (piaolala.config.basepath || "") : "", init: function (a) {
    a = a || document;
    var b = this;
    $(".safecode", a).click(function () {
        b.refresh(this)
    });
    $(".safecode", a).click()
}, refresh: function (a) {
    $(a).css("background-image", "url(" + this.basepath + "/image.do?code=" + Math.random() + ")")
}};
function Hash(g) {
    this.length = 0;
    this.item = {};
    if (typeof(g) == "string") {
        var e = g.split("&"), f, d = e.length, c;
        for (f = 0; f < d; f++) {
            c = e[f].partition("=");
            if (c[0].length != 0) {
                this.item[c[0]] = c[2]
            }
        }
    }
    Hash.prototype.has = function (a) {
        return(a in this.item)
    };
    Hash.prototype.set = function (b, a) {
        if (!this.item[b]) {
            this.length++
        }
        this.item[b] = a
    };
    Hash.prototype.get = function (a) {
        return this.item[a] ? this.item[a] : null
    };
    Hash.prototype.getKeys = function () {
        return this.item
    };
    Hash.prototype.del = function (a) {
        if (this.has(a)) {
            this.length--
        }
        delete this.item[a]
    };
    Hash.prototype.toString = function () {
        var b = "", a;
        for (a in this.item) {
            b += "&" + a + "=" + (this.item[a] ? this.item[a].toString() : "")
        }
        return b.indexOf("&") == 0 ? b.substring(1) : b
    }
}
(function (a) {
    a.fn.mask = function (d, c) {
        var b = a.extend({table: d ? d : "正在提交，请稍等...", content: "", opacity: "0", zindex: 1000, width: 160, height: 40, top: 0, backgroudImg: piaolala.util.basepath + "/commons/images/load/t_loading.gif"}, c || {});
        a(this).each(function () {
            a.maskElement(a(this), b)
        })
    };
    a.fn.unmask = function () {
        a(this).each(function () {
            a.unmaskElement(a(this))
        })
    };
    a.fn.isMasked = function () {
        return this.hasClass("masked")
    };
    a.maskElement = function (e, d) {
        if (e.isMasked()) {
            a.unmaskElement(e)
        }
        if (e.css("position") == "static") {
            e.addClass("masked-relative")
        }
        e.addClass("masked");
        var f = a('<div class="loadmask"></div>');
        if (navigator.userAgent.toLowerCase().indexOf("msie") > -1) {
            f.height(e.height() + parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom")));
            f.width(e.width() + parseInt(e.css("padding-left")) + parseInt(e.css("padding-right")))
        }
        e.append(f);
        if (navigator.userAgent.toLowerCase().indexOf("msie 6") > -1) {
            e.find("select").addClass("masked-hidden")
        }
        var g = 0, c = 0;
        if (d.height > e.height()) {
            d.height = e.height() - 2
        } else {
            if (d.top === 0) {
                g = Math.round(e.height() / 2 - d.height / 2)
            } else {
                g = d.top
            }
        }
        if (d.width > e.width()) {
            d.width = e.width() - 2
        } else {
            c = Math.round(e.width() / 2 - d.width / 2)
        }
        var b = a("<div/>").css({width: d.width + "px", height: d.height + "px", position: "absolute", "z-index": d.zindex + 1, display: "none"}).addClass("loadmask-msg");
        b.css("top", g + "px");
        b.css("left", c + "px");
        a("<div/>").append(a("<img/>").attr("src", d.backgroudImg).css({height: "14px", width: "36px"})).css({height: "14px", width: "36px", margin: "3px auto"}).appendTo(b);
        a("<h2/>").text(d.table ? d.table : "请稍等...").css({height: "22px", width: "100%", "line-height": "22px", color: "#fff", "font-size": "12px", "font-weight": "normal", "text-indent": "8px", display: "block"}).appendTo(b);
        b.show();
        e.append(b)
    };
    a.unmaskElement = function (b) {
        b.find(".loadmask,.loadmask-msg").remove();
        b.removeClass("masked");
        b.removeClass("masked-relative");
        b.find("select").removeClass("masked-hidden")
    }
})(Zepto);
(function (b) {
    if (void 0 == window.define) {
        var c = {}, a = c.exports = {};
        b(null, a, c);
        window.floatNotify = window.notification = c.exports
    } else {
        define(b)
    }
})(function (k, r, g) {
    function u(c) {
        this._options = v.extend({mode: "msg", text: "\u7f51\u9875\u63d0\u793a", useTap: !1}, c || {});
        this._init()
    }

    var v = k ? k("zepto") : window.$, s = v(window), w = v('<div class="c-float-popWrap msgMode hide"><div class="c-float-modePop"><div class="warnMsg"></div><div class="content"></div><div class="doBtn"><button class="ok">\u786e\u5b9a</button><button class="cancel">\u53d6\u6d88</button></div></div></div>'), l = w.find(".warnMsg"), i = w.find(".content"), b = w.find(".doBtn .ok"), a = w.find(".doBtn .cancel"), q = !1, t;
    v.extend(u.prototype, {_init: function () {
        var h = this, c = h._options, n = c.mode, j = c.text, p = c.content, o = c.callback, d = c.background, c = c.useTap ? "tap" : "click", m = w.attr("class"), m = m.replace(/(msg|alert|confirm)Mode/i, n + "Mode");
        w.attr("class", m);
        d && w.css("background", d);
        j && l.html(j);
        p && i.html(p);
        b.off(c).on(c, function (e) {
            o.call(h, e, !0)
        });
        a.off(c).on(c, function (e) {
            o.call(h, e, !1)
        });
        q || (q = !0, v("body").append(w), s.on("resize", function () {
            setTimeout(function () {
                h._pos()
            }, 500)
        }))
    }, _pos: function () {
        var h = document, c = h.documentElement, j = h.body, n, o, m;
        this.isHide() || (h = j.scrollTop, j = j.scrollLeft, n = c.clientWidth, c = c.clientHeight, o = w.width(), m = w.height(), w.css({top: h + (c - m) / 2, left: j + (n - o) / 2}))
    }, isShow: function () {
        return w.hasClass("show")
    }, isHide: function () {
        return w.hasClass("hide")
    }, _cbShow: function () {
        var c = this._options.onShow;
        w.css("opacity", "1").addClass("show");
        c && c.call(this)
    }, show: function () {
        var c = this;
        t && (clearTimeout(t), t = void 0);
        c.isShow() ? c._cbShow() : (w.css("opacity", "0").removeClass("hide"), c._pos(), setTimeout(function () {
            c._cbShow()
        }, 300), setTimeout(function () {
            w.animate({opacity: "1"}, 300, "linear")
        }, 1))
    }, _cbHide: function () {
        var c = this._options.onHide;
        w.css("opacity", "0").addClass("hide");
        c && c.call(this)
    }, hide: function () {
        var c = this;
        c.isHide() ? c._cbHide() : (w.css("opacity", "1").removeClass("show"), setTimeout(function () {
            c._cbHide()
        }, 300), setTimeout(function () {
            w.animate({opacity: "0"}, 300, "linear")
        }, 1))
    }, flash: function (d) {
        var c = this;
        opt = c._options;
        opt.onShow = function () {
            t = setTimeout(function () {
                t && c.hide()
            }, d)
        };
        c.show()
    }});
    g.exports = new function () {
        this.simple = function (f, e, j) {
            2 == arguments.length && "number" == typeof arguments[1] && (j = arguments[1], e = void 0);
            var h = new u({mode: "msg", text: f, background: e});
            h.flash(j || 2000);
            return h
        };
        this.msg = function (d, c) {
            return new u(v.extend({mode: "msg", text: d}, c || {}))
        };
        this.alert = function (e, d, f) {
            return new u(v.extend({mode: "alert", text: e, callback: d}, f || {}))
        };
        this.confirm = function (e, d, j, h) {
            return new u(v.extend({mode: "confirm", text: e, content: d, callback: j}, h || {}))
        };
        this.pop = function (c) {
            return new u(c)
        }
    }
});