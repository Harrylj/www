

index 首页
column_jjwb 聚焦文博
column_wzwb 玩转文博
column_wbjj 文博经济


栏目
column_zhzj  展会直击
column_kms 开幕式
column_xwdt 新闻动态
column_fhlt 峰会论坛
column_fhlt_video 峰会论坛-视频
column_zqsl 展区速览
column_flhd 福利活动
column_tphd 福利活动-投票活动
column_mflq 福利活动-免费领券
column_zhyj 福利活动-展会影集
column_gywm 联系我们-关于我们

文章
article_jbjs 嘉宾介绍
article_xwxq 新闻详情
article_zqxq 展区详情
article_zsxq 展商详情
article_tphd 福利活动-投票活动-作品详情
article_yjxq 福利活动-展会影集-影集详情

单页
single_search_xwdt 聚焦文博-新闻动态-搜索
single_search_wbjj 文博经济-搜索
single_search_zp 展品搜索
single_fhlt_ltfl 峰会论坛-论坛分类
single_sczp 投票活动-上传作品
single_flhd_xxtx 福利活动-信息填写
single_wbjj_zp 文博经济-展品
single_wbjj_zp_detail 文博经济-展品-展品详情
single_wbjj_zs 文博经济-展商
single_lxwm 联系我们
single_video 云南欢迎你视频
single_ygz_video 云逛展-视频
single_wbqy 文博企业
single_wbqy_video 文博企业-视频详情
single_wbqy_qyxq 文博企业-企业详情
single_wbqy_one 文博企业-云南报业传媒集团


axios.get('api/v1/channels/23')
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
				
				// 获取重磅嘉宾列表
axios.post('api/v1/contents', {
					"siteId": 23,
					"channelId": 34,
					// "checked": true,
					"page": 1,
					"perPage": 200
				})
				.then(function (response) {
					_this.userList = response.data.contents;
					console.log('123',_this.userList);
				})
				.catch(function (error) {
					console.log(error);
				});