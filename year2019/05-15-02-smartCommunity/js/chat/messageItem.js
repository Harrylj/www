/**
 * 消息列表最新聊天记录
 */
function MessageItem() {
	/**
	 * 头像
	 */
	this.iconRes = "";
	/**
	 * 记录标题，私聊为发送者名称，群聊为群名称
	 */
	this.title = "";
	/**
	 * 最新一条聊天记录内容
	 */
	this.lastWord = "";
	/**
	 * 发送时间
	 */
	this.time;
	/**
	 * 发送者ID
	 */
	this.senderID = "";
	/**
	 * 是否为群聊：true-群聊；false-私聊
	 */
	this.isGroup = false;
	/**
	 * 未读信息条数
	 */
	this.unReadCount = 0;
	/**
	 * 接收者ID
	 */
	this.audienceID = "";
	/**
	 * 消息记录ID
	 */
	this.getMessageID = function() {
		return this.senderID + "&" + this.AudienceID;
	}

	this.getSendTime = function() {
		var date = new Date(this.time);
		var hours = date.getHours();
		if (hours < 10) {
			hours = "0" + hours;
		}
		var minu = date.getMinutes();
		if (minu < 10) {
			minu = "0" + minu;
		}
		return hours + ":" + minu;
	}
}
