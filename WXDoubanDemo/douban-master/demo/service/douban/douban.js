var handle,
  URL,
  LISTTYPE,
  _fn;


URL = {
  // 电影列表
  movieList : 'https://www.wxapp-gateway.com/movie/',
  //movieList : 'http://api.douban.com/v2/movie/in_theaters',
  // 电影详情
  movieDetail : 'https://www.wxapp-gateway.com/movie/subject'
}

// 电影类型
LISTTYPE = {
  // 正在热映
  1 : 'in_theaters',
  // 即将上映
  2 : 'coming_soon'
}

// 暴露出去的服务接口
handle = {
  // 获取列表
  getMovieList : function( type, callback ) {
    var url = URL.movieList + LISTTYPE[type];
    _fn.getData( {
      url : url
    }, callback );
  },
  // 获取详情
  getMovieDetail : function( id, callback ){
    var url = URL.movieDetail + '/' + id;
    _fn.getData( {
      url : url
    }, callback );
  }
}

_fn = {
  // 将网络请求统一放置在一个方法中
  getData : function( param, callback ) {
    wx.request( {
      url : param.url,
      method : 'get',
      data : {
        apikey : '00fa6c0654689a0202ef4412fd39ce06'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success : function( e ) {
        callback( e.data );
      },
      fail : function( e ) {
        callback();
      }
    } );    
  }
}

module.exports = handle;
