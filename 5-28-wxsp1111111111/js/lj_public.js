$(function(){
	//改变联系方式
	function changeInfo(){
		//微信名称
		var wxName = "weixinlapiao666",
		//手机号码
			phoneNum = "15028632514",
		//网址
			webSrc = "qxrih.cn";
		$('.wx-name').html(wxName);
		$('.phone-num').html(phoneNum);
		$('.web-src').html(webSrc);
	}
	//改变联系方式
	changeInfo();
	
	//改变排列顺序
	function changeList(){
		var arrList = new Array();
		$('.more-list').children().each(function(){
			var abc = Math.floor(Math.random()*5);
			var thisIndex = $(this).index();
			//等于0则隐藏
			if(thisIndex%abc){
				$(this).hide()
			}
			console.log(thisIndex,abc,!(thisIndex%abc))
		})

	}
	//改变排列顺序
	//changeList();

	//左侧的联系方式
	function changeLeftContact(){
		var fatherDiv = $('.wrap_left');
		var left_more= $('<p>联系我们：</p><p><span><span style="color: rgb(26, 26, 26); font-family: 微软雅黑; font-size: 14px;">电话：</span><span class="phone-num">uc557799</span><span style="color: rgb(26, 26, 26); font-family: 微软雅黑; font-size: 14px;"></span></span></p><p>扫描微信二维码:</p><p><span class="wx-name">uc557799</span><span style="color: rgb(26, 26, 26); font-family: 微软雅黑; font-size: 14px;"></span></p><img alt="" src="images/ewm_01.jpg" style="width: 151px; height: 151px;"><br>');
		left_more.appendTo(fatherDiv)
		//改变联系方式
		changeInfo();
	}
	changeLeftContact();

	//改变公用头部
	function changeHeader(){
		var fatherDiv = $('.banner-content');
		var header_more = $('<div class="banner-content-center"><img class="index-ewm" src="images/ewm_01.jpg" alt=""><div class="banner-content-div"><h4><<扫码刷票</h4><h4><<扫码刷票</h4><h4><<扫码刷票</h4></div></div>');
		header_more.appendTo(fatherDiv);
	}
	//改变公用头部
	changeHeader()
	
	//改变公用底部
	function changeFooter(){
		var fatherDiv = $('.public-js-footer');
		var e_more= $('<div class="index"><div class="i-main-06"><div class="index-footer-body"><p>蜀ICP备11018552号    许可证：2305101号<br>天蓬团队 版权所有 Copyright 2002--2018</p><p>24H  028-85516789</p><p><a href="other2.html">微信刷票</a><a href="other3.html">人工投票</a><a href="lxwm.html">联系我们</a></p></div></div></div>');
		e_more.appendTo(fatherDiv);
	}
	//改变公用底部
	changeFooter()



	//添加文章内容
	function addTxtMore(){
		var txtListLength = addTxtList.length;	
		var fatherDiv = $('.more-list');
		var addNumMore = 4; //每次加载几篇文章
		var addNum = addNumMore + first_num; //添加文章个数
		var e_title ,	//文章标题
			e_content,	//文章内容
			e_name = '天蓬团队',		//团队名字
			e_href,		//文章链接名
			e_img;		//图片
		for(first_num;first_num<addNum; first_num++){
			e_title = addTxtList[first_num][0];
			e_content = addTxtList[first_num][1];
			e_img = first_num + 1;
			e_href = txtListLength  -first_num;
			//小于10则在前面添加0;
			if(e_href<10){
				e_href =  '0' + e_href;
			}
			var txt_more = $('<a class="click-nav" href="page'+ 
			e_href + '.html" ><li><div><img src="images/'+ 
			e_img + '.jpg" alt="' + 
			e_name + '"></div><p class="list_title">' +
			e_title + '</p><p class="list_little_title">' + 
			e_content +'</p></li></a>')
			txt_more.appendTo(fatherDiv)
			console.log(first_num)
			console.log(e_href)
		}
	}
	
	

	var first_num = 0;
	//数组列表文章
	//从上往下添加，['标题','内容'],
	var addTxtList = [
		// ['',''],
		// ['',''],
		['代理投票是正常的投票过程','在我们和刷票公司(Company)的大部分客户交流的时候，发现许多客户都是十分优秀的，并且对于有些对选秀以及比赛有经验的客户来讲，在过去的比赛中常常因为票数的问题(Emerson)被刷下去的大有人在，梦想就此终结，闪亮的人生似乎从此暗淡，但选秀和各类比赛背后的秘密到底有多少人知道。比赛是否是公平的？参赛人员背后是否有背景我们也不知道？但是当感觉到自己的才华被埋没，大多数人还是十分失落的，那么启用代理投票就不失是一个最好的办法。		'],
		['参加微信投票活动快速涨票有高招','时下讲究的是公平、公正，杜绝暗箱操作控制，我想微信投票就是一个非常好的方式方法，所以不知曾几何时，微信投票大大流行，席卷移动网络，明星、个人、公司(Company)、团体乐此不疲。微信投票是在市场经济环境中产生的一种新事物，在过去投票其实是一种调查观众一件的方式，看某一个节目是否受到群众的欢迎，但是现在的投票已经演变成一种商业活动了，它除了体现人气之外，还成为了一种明码标价的产品。			'],
		['参加网上投票，刷票机构帮助你','现如今，对于网络中的非常多投票活动，怎么样在这样的投票当中成为佼佼者呢？完全就是在于刷票机构，因为拥有最先进的投票软件，然后借助于这样的网络软件的模式(pattern)，然后在这样的前提下，进行刷票的服务(fú wù)，这就是为什么一直以来受到关注的关键所在。			'],
		['参加比赛怎么可以获得更多的票数','现在非常多个人方面都会参加(cān jiā)这些比赛，比赛其实在我们的生活中是非常多的也是非常习惯的，特别是通过(tōng guò)现在一些网络方面的方式方法开始进行投票，对于一些人脉方面的比赛来说的话，如果是实力方面非常厉害的话，那么获得冠军方面的机会也是非常的渺茫的，对于这种情况(Condition)我们一般都处理(chǔ lǐ)方法就是要找到一个很好的刷票公司(Company)来为自己未来的命运做出很好的保障，很好的满足现在非常多行业对于投票方面的需求，特别是一些非常有需要的人群来说都是非常重要的，可以有很大的优惠力度的，其中下面就有非常多的方面可以获得很好的人气的比赛、			'],
		['不要被非专业刷票公司的承诺欺骗','现今呢，网络投票、短信(简称SMS)投票可以说是风靡全球了，许多选秀节目、评选节目都采用这些方式方法来征集民众的意见与建议，有些看穿这些节目内幕的选手们纷纷都想通过(tōng guò)代理投票的方式方法来抚平自己在节目中遭受的不公平待遇，比如遭到评委老师的不好的评价等等。微信投票平台业务齐全，并且发展速度与时俱进，刷票安全技术与投票网站不冲突，并且可以在刷票之后再进行担保交易后的确认付款。			'],
		['不堪其扰微信投票刷票平台或成解决问题根本','微信的火热伴随着移动互联网出现，但不知何时起微信投票活动多了起来，多到在朋友圈几乎每天都有人让帮忙进行微信投票，不同的人对于这种拉票现象存在不同看法，但大多数的人不厌其烦不堪其扰。刷票软件一般情况下，消费者需要微信的投票都需要纯手工刷票，这需要一些麻烦的流程，所以价格会相对贵一些，不过，如果奖品的金额比较诱人的话，还是值得花费一些金钱去进行刷票的。			'],
		['包名次微信刷票的限制范围','我们作为专业的微信刷票公司(Company)，完全可以让您享受到包名次服务(fú wù)，不管您需要多少的票数，我们只管在最后让您拿到想要的名次，您可以尽情的享受在最后的十几分钟里，看着自己的票数分分钟把对手甩在后面的快感，不管需要投多少都由我们来掌握，如果包不到名次，我们承诺(Promise)分文不要，但是这里还有几句丑话要说在前头，以下的几项我们是不会包的。微信投票平台已经成为互联网投票中的重要组成部分，因为几乎每一场的互联网投票中都有刷票的存在，包括微信投票等。但是在这样的情况下，大家要保持冷静的思维，万万不可选择没有安全保障的刷票网站。			'],
		['安全投票才会让客户们放心 ','在进行微信投票的时候，大家都知道，要是不限制IP号的话，对于广大的朋友们来讲，要是操作控制起来，就是非常的简单的事情了。			'],
		['app拉票活动如何才能快速获胜？','如果自己参加(cān jiā)了app拉票活动想要获得更高的票数，这样才可以让自己获得最终的胜利，而且还可以获得更多的奖品，相信任何一个参加(cān jiā)活动的朋友都希望可以得到这样的奖励，但是如果想要让自己轻松获胜，就必须要掌握一些技巧和方法，这样不仅可以给自己带来更好的参赛享受，而且还可以让自己更顺利的稳赢，下面就来为大家介绍一些方法！'],
		
	]
	//点击按钮添加文章
	$('.addTxtBtn').on('click',function(){
		addTxtMore();
	})
	addTxtMore();
})
