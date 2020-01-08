(function ($, sdtz) {
    $(function () {
        "use strict";
        $('#AreaSelect').sdarealayerselect();
        var focustrainid = null;
        var areapolyline;
        var traindic = new Dictionary();
        var carInterval;
        var map = new BMap.Map("mapcontainer", { enableMapClick: false });
        var trainMonitor = function (trainid) {
            focustrainid = trainid;
            var focustrainmarker = traindic.get(trainid);
            if (focustrainmarker != null) {
                map.centerAndZoom(focustrainmarker.getPosition(), 17);
            }
        }
        var trainDetail = function (trainid) {
            sdtz.layerForm({
                id: 'form',
                title: '查看详情',
                url: top.$.rootUrl + '/SD_Trainipment/TrainipmentManager/Form?keyValue=' + trainid,
                width: 950,
                height: 430,
                btn: ['关闭']
            });
        }
        var loadHistorydata = function (trainid) {
            focustrainid = null;
        }
        var dealAlarm = function (trainid, e, ee, marker) {
            marker.setAnimation(null);
        }
        var intervalTimer = 5000;
        function moveCar(prvePoint, newPoint, marker, trainid, isfocus) {
            if (map.getDistance(prvePoint, newPoint) < 20 && prvePoint != newPoint)
                return;
            if (isfocus) {
                var currentCount = 0;
                var projection = new BMap.MercatorProjection();
                var _prvePoint = projection.lngLatToPoint(prvePoint);
                var _newPoint = projection.lngLatToPoint(newPoint);
                //两点之间要循环定位的次数
                var count = 50;
                //两点之间匀速移动
                var intervalFlag = setInterval(function () {
                    //两点之间当前帧数大于总帧数的时候，则说明已经完成移动
                    if (currentCount >= count) {
                        clearInterval(intervalFlag);
                    } else {
                        //动画移动
                        currentCount++;//计数
                        var x = linear(_prvePoint.x, _newPoint.x, currentCount, count);
                        var y = linear(_prvePoint.y, _newPoint.y, currentCount, count);
                        //根据平面坐标转化为球面坐标
                        var pos = projection.pointToLngLat(new BMap.Pixel(x, y));
                        if (currentCount == 1) {
                            //调整方向
                            setRotation(prvePoint, newPoint, marker);
                        }
                        marker.setPosition(pos);
                        map.centerAndZoom(pos, 17);
                    }
                }, 100);
            }
            else {
                setRotation(prvePoint, newPoint, marker);
                marker.setPosition(newPoint);
            }
        }
        function linear(initPos, targetPos, currentCount, count) {
            var b = initPos, c = targetPos - initPos, t = currentCount, d = count;
            return c * t / d + b;
        }
        function setRotation(curPos, targetPos, marker) {
            var me = this;
            var deg = 0;
            curPos = map.pointToPixel(curPos);
            targetPos = map.pointToPixel(targetPos);
            if (targetPos.x != curPos.x) {
                var tan = (targetPos.y - curPos.y) / (targetPos.x - curPos.x),
                    atan = Math.atan(tan);
                deg = atan * 360 / (2 * Math.PI);
                if (targetPos.x < curPos.x) {
                    deg = -deg + 90 + 90;
                } else {
                    deg = -deg;
                }
                marker.setRotation(-deg);

            } else {
                var disy = targetPos.y - curPos.y;
                var bias = 0;
                if (disy > 0)
                    bias = -1
                else
                    bias = 1
                marker.setRotation(-bias * 90);
            }
            return;
        }
        function SetTrainMarker(trainid, point, speed, isfocus) {
            var oldmarketpoint = point;
            var oldmarker = traindic.get(trainid);
            if (oldmarker != null) {
                oldmarketpoint = oldmarker.getPosition();
                var c = speed.toString().length == 1 ? "00" : speed.toString().length == 2 ? "0" : "";
                var label = new BMap.Label(trainid + " - " + c + speed + " km/h", { offset: new BMap.Size(40, -25) });
                oldmarker.setLabel(label);
                moveCar(oldmarketpoint, point, oldmarker, trainid, isfocus);
            }
            else {
                var myIcon = new BMap.Icon("/Content/images/car.png", new BMap.Size(45, 20));
                var marker = new BMap.Marker(point, { icon: myIcon });
                marker.disableMassClear();
                map.addOverlay(marker);
                var opts = { iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN };
                var markerMenu = new BMap.ContextMenu();
                markerMenu.addItem(new BMap.MenuItem('跟踪目标', trainMonitor.bind(marker, trainid), opts));
                markerMenu.addSeparator();
                markerMenu.addItem(new BMap.MenuItem('取消跟踪', loadHistorydata.bind(marker, trainid), opts));
                marker.addContextMenu(markerMenu);
                markerMenu.addSeparator();
                markerMenu.addItem(new BMap.MenuItem('报警处理', dealAlarm.bind(marker, trainid), opts));
                marker.addContextMenu(markerMenu);
                traindic.set(trainid, marker);
            }
        }
        function SetTrainLocation(Num, data, isfocus) {
            var c = new Convertor();
            if (parseInt(data.flongitude) == 0 || parseInt(data.flatitude) == 0)
                return;
            var bdloc = c.WGS2BD09({ lng: parseFloat(data.flongitude), lat: parseFloat(data.flatitude) });
            var point = new BMap.Point(bdloc.lng, bdloc.lat);
            SetTrainMarker(Num, point, data.speed, isfocus);
        }
        
        function LoadLastTrainData() {
            sdtz.httpAsyncGet('http://211.149.234.57:930/sdtz/equ/gettraindata', function (res) {
                if (res.code == 200) {
                    var traindatas = res.data.lastreportlist;
                    for (var i = 0; i < traindatas.length; i++) {
                        var train = traindatas[i];
                        SetTrainLocation(train.plateNumber, train, focustrainid == train.plateNumber);
                        if (train.file != null && focustrainid != null && focustrainid == train.plateNumber) {
                            $(".drivingPlayer").attr("src", train.file);
                            $(".drivingPlayer").attr("autoplay", "true");
                        }
                    }
                }
            });
        }
        
// no
function LoadAreaPoint(areaid) {
            if (areaid != "") {
                $.ajax({
                    url: top.$.rootUrl + "/SD_Equipment/AreaLinePointManager/GetAreaLinePointByAreaID?AreaId=" + areaid,
                    cache: false,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        if (!!data.data) {
                            focustrainid = null;
                            map.clearOverlays();
                            var area = data.data;
                            var pois = []
                            var centerpos = null;
                            var c = new Convertor();
                            debugger;
                            for (var i = 0; i < area.length; i++) {
                                var bdloc = c.WGS2BD09({ lng: parseFloat(area[i].F_Longitude), lat: parseFloat(area[i].F_Latitude) });
                                var point = new BMap.Point(bdloc.lng, bdloc.lat);
                                if (i == 500)
                                    centerpos = point;
                                pois.push(point);
                            }
                            areapolyline = new BMap.Polyline(pois, {
                                strokeWeight: '5',//折线的宽度，以像素为单位
                                strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
                                strokeColor: "#18a45b" //折线颜色
                            });
                            map.addOverlay(areapolyline);
                            areapolyline.addEventListener("click", function (e) {
                                sdtz.alert.notice("【点击线路:" + e.point.lng + "," + e.point.lat + "】");
                            });
                            map.centerAndZoom(centerpos, 10);
                        }
                    }
                });
            }
        }
        
        
        
        sdtz.im.registerRevSystemMsg(function (msg, dateTime, isSystem) {
            if (isSystem == 1) {
                var msgmodel = JSON.parse(msg);
                switch (msgmodel.CmdType) {
                    case 6: //车辆记录通知
                        //sdtz.alert.notice("【" + dateTime + "】" + msgmodel.TerminalName + "位置信息更新");
                        var trainmodel = JSON.parse(msgmodel.Message);
                        //LoadTrainData(2, msgmodel.TerminalName, trainmodel);
                        break;
                    case 7: //设备告警
                        break;
                    case 8: //设备离线
                        break;
                    default:
                        break;
                }
            }
        });
        $(".sd-desktop-panel").mCustomScrollbar({ // 优化滚动条
            theme: "minimal-dark"
        });
        $('.task-stat a').on('click', function () {
            var $obj = $(this);
            var id = $obj.attr('data-id');
            var _module = sdtz.clientdata.get(['modulesMap', id]);
            switch (_module.F_Target) {
                case 'iframe':// 窗口
                    if (sdtz.validator.isNotNull(_module.F_UrlAddress).code) {
                        sdtz.frameTab.open(_module);
                    }
                    break;
            }
        });
        $('#sd_flag').on('click', function () {
            var areaid = $('#AreaSelect').sdlayerselectGet();
            LoadAreaPoint(areaid);
        });
        // 服务区
        $('#sd_server').on('click', function () {
          
            map.clearOverlays();
            map.addOverlay(new BMap.Marker(new BMap.Point(104.36241760870722, 29.795201659603105)));
            map.addOverlay(new BMap.Marker(new BMap.Point(104.12499957665844, 30.37553124006486)));
            map.addOverlay(new BMap.Marker(new BMap.Point(104.23295403655305, 29.998060443441165)));
            map.addOverlay(new BMap.Marker(new BMap.Point(104.2054944070381, 30.15310045159083)));
        });
        $('#sd_toll').on('click', function () {
   
            map.clearOverlays();
            var c = new Convertor();
            var bdloc = c.WGS2BD09({ lng: parseFloat("104.1233517"), lat: parseFloat("30.29626833") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.108725"), lat: parseFloat("30.56945") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.126575"), lat: parseFloat("30.41889333") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.1135333"), lat: parseFloat("30.48061") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.1849583"), lat: parseFloat("30.16494833") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.2635567"), lat: parseFloat("29.93502333") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.314595"), lat: parseFloat("29.84446167") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.2145667"), lat: parseFloat("30.02485167") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
            bdloc = c.WGS2BD09({ lng: parseFloat("104.3707467"), lat: parseFloat("29.769185") });
            map.addOverlay(new BMap.Marker(new BMap.Point(bdloc.lng, bdloc.lat)));
        });
        var point = new BMap.Point(104.120624, 30.079);
        map.centerAndZoom(point, 10);
        map.setCurrentCity("成都");
        LoadLastTrainData();
        setInterval(LoadLastTrainData, intervalTimer);
    });
    function Dictionary() {//字典类
        var items = {};//存储在一个Object的实例中
        this.has = function (key) {//验证一个key是否是items对象的一个属性
            return key in items;
        };
        this.set = function (key, value) {//设置属性
            items[key] = value;
        };
        this.remove = function (key) {//移除key属性
            if (this.has(key)) {
                delete items[key];
                return true;
            }
            return false;
        };
        this.get = function (key) {//查找特定属性
            return this.has(key) ? items[key] : undefined;
        };
        this.values = function () {//返回所有value实例的值
            var values = new Array();//存到数组中返回
            for (var k in items) {
                if (this.has(k)) {
                    values.push(items[k]);
                }
            }
            return values;
        };
        this.getItems = function () {//获取
            return items;
        };
        this.clear = function () {//清除
            items = {};
        };
        this.size = function () {//获取属性的多少
            return Object.keys(items).length;
        };
    }
    /**
     * 坐标系转换函数
     * WGS->GCJ
     * WGS->BD09
     * GCJ->BD09
    **/
    function Convertor(ak) {
        this.stepCount = 100;
        this.pointCount = [];
        this.Result = [];
        this.NoisIndex = [];
        this.Time = new Date();
        this.AK = ak;
        this.M_PI = 3.14159265358979324;
        this.A = 6378245.0;
        this.EE = 0.00669342162296594323;
        this.X_PI = this.M_PI * 3000.0 / 180.0;
    }
    Convertor.prototype.outofChine = function (p) {
        if (p.lng < 72.004 || p.lng > 137.8347) {
            return true;
        }
        if (p.lat < 0.8293 || p.lat > 55.8271) {
            return true;
        }
        return false;
    };
    Convertor.prototype.WGS2GCJ_lat = function (x, y) {
        var ret1 = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
        ret1 += (20.0 * Math.sin(6.0 * x * this.M_PI) + 20.0 * Math.sin(2.0 * x * this.M_PI)) * 2.0 / 3.0;
        ret1 += (20.0 * Math.sin(y * this.M_PI) + 40.0 * Math.sin(y / 3.0 * this.M_PI)) * 2.0 / 3.0;
        ret1 += (160.0 * Math.sin(y / 12.0 * this.M_PI) + 320 * Math.sin(y * this.M_PI / 30.0)) * 2.0 / 3.0;
        return ret1;
    };
    Convertor.prototype.WGS2GCJ_lng = function (x, y) {
        var ret2 = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
        ret2 += (20.0 * Math.sin(6.0 * x * this.M_PI) + 20.0 * Math.sin(2.0 * x * this.M_PI)) * 2.0 / 3.0;
        ret2 += (20.0 * Math.sin(x * this.M_PI) + 40.0 * Math.sin(x / 3.0 * this.M_PI)) * 2.0 / 3.0;
        ret2 += (150.0 * Math.sin(x / 12.0 * this.M_PI) + 300.0 * Math.sin(x / 30.0 * this.M_PI)) * 2.0 / 3.0;
        return ret2;
    };
    Convertor.prototype.WGS2GCJ = function (poi) {
        if (this.outofChine(poi)) {
            return;
        }
        var poi2 = {};
        var dLat = this.WGS2GCJ_lat(poi.lng - 105.0, poi.lat - 35.0);
        var dLon = this.WGS2GCJ_lng(poi.lng - 105.0, poi.lat - 35.0);
        var radLat = poi.lat / 180.0 * this.M_PI;
        var magic = Math.sin(radLat);
        magic = 1 - this.EE * magic * magic;
        var sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((this.A * (1 - this.EE)) / (magic * sqrtMagic) * this.M_PI);
        dLon = (dLon * 180.0) / (this.A / sqrtMagic * Math.cos(radLat) * this.M_PI);
        poi2.lat = poi.lat + dLat;
        poi2.lng = poi.lng + dLon;
        return poi2;
    };
    Convertor.prototype.GCJ2BD09 = function (poi) {
        var poi2 = {};
        var x = poi.lng
            , y = poi.lat;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.X_PI);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.X_PI);
        poi2.lng = z * Math.cos(theta) + 0.0065;
        poi2.lat = z * Math.sin(theta) + 0.006;
        return poi2;
    };
    Convertor.prototype.WGS2BD09 = function (poi) {
        //WGS->GCJ
        var poi2 = this.WGS2GCJ(poi);
        if (typeof poi2 === "undefined") {
            return;
        }
        //GCJ->百度坐标系
        return this.GCJ2BD09(poi2);
    }
})(window.jQuery, top.sdtz);
