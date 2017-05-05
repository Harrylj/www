var server = serverDomain + "/AppUpdate";
/**
 * 检测程序升级
 * 从服务器获取升级数据
 */
function checkUpdate(url, callback) {
	var xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function() {
		switch(xhr.readyState) {
			case 4:
				plus.nativeUI.closeWaiting();
				if(xhr.status == 200) {
					var vData = JSON.parse(xhr.responseText);
				} else {
					mui.toast("网络连接异常");
					callback();
				}
				break;
			default:
				break;
		}
	}
	plus.nativeUI.showWaiting("检测更新数据包...");
	xhr.open("GET", server);
	xhr.send();
}

var httpUtils = function() {

}

//四个参数分别是数据库名 版本 数据库描述 大小
//当该数据库不存在的时候创建并打开数据库，否则直接打开数据库.
var db = openDatabase('myTel', '1.0', 'test db', 1024 * 100);
db.transaction(function(tx) {
	tx.executeSql('create table if not exists deleteNotice(nid INTEGER PRIMARY KEY,title varchar,content varchar,publishTime varchar)', [], function(tx, res) {

	}, function(tx, err) {
		console.log(err.message)
	});
	var params = [item.nid, item.title, item.content, item.publishTime];
	tx.executeSql('insert into deleteNotice values(?,?,?,?)', params, function(tx, rs) {
			console.log('yes');
		},
		function(tx, err) {
			console.log(err.source + '====' + err.message);
		});

});
db.transaction(function(tx) {
	tx.executeSql('select * from deleteNotice where nid=?', [2], function(tx, result) {
		for(var i = 0; i < result.rows.length; i++) {
			console.log(JSON.stringify(result.rows.item(i)));
		}
	})
})