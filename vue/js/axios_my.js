// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.url.indexOf('api/v1') != -1) {
    	config.headers = {
	       	'Content-Type': 'application/json',
			'X-SS-API-KEY': 'f003e79e-6820-4235-a781-aae069cee459'
	    }
    	/*
        if (config.method == 'get') {
            config.params = setNewData(config.params)
        } else {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
            config.data = qs.stringify(setNewData(config.data))
        }
        */
    }
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