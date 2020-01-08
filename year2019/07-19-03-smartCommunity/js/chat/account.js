(function($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.account == "") {
			return callback('请输入帐号');
		}
		if (loginInfo.password.length < 6) {
			return callback('密码最短为 6 个字符');
		}
		$.ajax('http://open.sdtzcd.com/oauth/authorize', {
			data: {
				grant_type: "authorization_code",
				response_type: "code",
				client_id: loginInfo.account,
				client_secret: hex_md5(loginInfo.password)
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			success: function(data) {
				if (data.code == 200) {
					owner.setUser(data.data);
					callback();
				} else {
					callback(data.info || "登录失败");
				}
			},
			error: function(xhr, type, errorThrown) {
				callback("连接服务器失败，请检查网络");
			}
		});
	}
	/**
	 * 设置(保存)登录用户信息
	 */
	owner.setUser = function(user) {
		user = user || {};
		localStorage.setItem("$user", JSON.stringify(user));
	}

	/**
	 * 获取当前登录用户信息
	 */
	owner.getUser = function(user) {
		var userStr = localStorage.getItem("$user") || "{}";
		return JSON.parse(userStr);
	}

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}
}(mui, window.accountManager = {}));
