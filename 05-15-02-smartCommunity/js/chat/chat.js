(function($, manager) {
	manager.im = {
		connected: false,
		init: function(userId, revMsgCallback) {
			// 创建连接
			hubConnection = $.hubConnection("http://47.110.145.108:8012/signalr");
			// 设置查询字符串
			hubConnection.qs = {userId: userId};
			hubConnection.logging = true;
			hubConnection.error(function (error) {
				console.log('SignalR error: ' + error)
			});
			// 获取代理
			proxy = hubConnection.createHubProxy("ChatsHub");
			// 设置state的值
			proxy.state.ClientType = "HubNonAutoProxy";
			// 注册客户端方法，接收消息
			proxy.on("revMsg", revMsgCallback);
			// 开启连接
			hubConnection.start()
				.done(function() {
					manager.im.connected = true;
					console.log('连接成功');
				})
				.fail(function() {
					alert("连接失败");
				});
		},
		sendMsg: function(revId, msg, isSystem) {
			proxy.invoke("sendMsg", revId, msg, isSystem);
			console.log(revId,msg,isSystem)
		}
	};
}(window.jQuery, window.chatManager = {}));
