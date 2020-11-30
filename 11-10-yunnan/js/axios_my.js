// axios.defaults.baseURL="http://192.168.0.250:8032/";
axios.defaults.baseURL= public_obj().siteUrl;

var fwlList = []; // cms访问量列表
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // if (config.url.indexOf('api/v1') != -1) {
    if (config.url.indexOf('api') != -1) {
    	config.headers = {
	       	'Content-Type': 'application/json',
			    // 'X-SS-API-KEY': 'f003e79e-6820-4235-a781-aae069cee459'
			    'X-SS-API-KEY': public_obj().appkey
      }
      // config.url = 'http://192.168.0.250:8032'+config.url
      // console.log('33333',config.url)
    	/*
        if (config.method == 'get') {
            config.params = setNewData(config.params)
        } else {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
            config.data = qs.stringify(setNewData(config.data))
        }
        */
    }
    // 统计量
    if(config.url.indexOf('api/v1') != -1){
      fwlList.push(config.url)
    }
    console.log('9999',fwlList,config)
    // alert(1)
    // console.log('2211111122233',config.url)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


//网站访问量
axios.get(public_obj().shopUrl+'api/services/app/statistics/state')
.then(function (response) {
  console.log('99991121',response);
})
.catch(function (error) {
  console.log(error);
});