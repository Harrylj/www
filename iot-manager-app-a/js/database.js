function DatabaseHelper() {
	var dbName = "sdtz_iot_manager.db";
	var version = "1.0.0";
	var description = "IoT manager app database";
	var size = 2 * 1024 * 1024;
	var db = openDatabase(dbName,version,description,size);
	
	var ChatMessageRecordTable = "CREATE TABLE if not exists [ChatMessageRecord](" +
            "[AutoID] [integer] primary key autoincrement," +
            "[SpeakerID] [varchar] (20) NOT NULL ," +
            "[AudienceID] [varchar] (20) NOT NULL ," +
            "[IsGroupChat] [integer] NOT NULL ," +
            "[IsRead] [integer] NOT NULL ," +
            "[Content] [BLOB] NOT NULL ," +
            "[OccureTime] [BIGINT] NOT NULL);" +
            "CREATE INDEX idx_ChatMessageRecord ON ChatMessageRecord (" +
            "SpeakerID," +
            "AudienceID," +
            "OccureTime DESC);" +
            "CREATE INDEX idx2_ChatMessageRecord ON ChatMessageRecord (" +
            "AudienceID," +
            "IsGroupChat," +
            "OccureTime);";
			
	var LastChatRecordTable = "CREATE TABLE if not exists [LastChatRecord](" +
		"[MessageID] [varchar](20) primary key NOT NULL," +
		"[SenderID] [varchar](20) NOT NULL," +
		"[AudienceID] [varchar](20) NOT NULL," +
		"[IconRes] [integer] NOT NULL," +
		"[Title] [nvarchar] (50) NOT NULL," +
		"[LastWord] [nvarchar] (100) NOT NULL," +
		"[IsGroup] [integer] NOT NULL ," +
		"[UnReadCount] [integer] NOT NULL," +
		"[Time] [BIGINT] NOT NULL); " +
		"CREATE INDEX idx_LastChatRecord ON LastChatRecord (Time DESC);";
		
	db.transaction(function (tx) {
		tx.executeSql(LastChatRecordTable);
		tx.executeSql(ChatMessageRecordTable);
	});
}