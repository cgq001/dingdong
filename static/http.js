import store from './state/index.js'

//封装request方法 无token
const request = (url, method, data) => {
    var promise = new Promise((resolve, reject) => {
        //提示一下
        uni.showLoading({
            title: '加载中...'
        })
        //网络请求
        uni.request({
            url: store.state.user.http+url,
            data: data,
            method: method,
            header: {
				
            },
            success: function (res) {
                uni.hideLoading()
                //服务器返回数据
                if (res.statusCode == 200) {
          
					if(res.data.code === 0 && res.data.msg){
						uni.showToast({
						    title: res.data.msg,
							icon: 'success',
						    duration: 2000
						})
					}else if(res.data.code != 0 && res.data.msg){
						uni.showToast({
						    title: res.data.msg,
							icon: 'none',
						    duration: 2000
						});
					}
					
					 resolve(res);
                } else {
                    //返回错误提示信息
                    reject(res.data);
                }
            },
            fail: function (e) {
                 uni.hideLoading()
				uni.showToast({
				    title: '网络连接错误',
					icon: 'loading',
				    duration: 2000
				});
                reject('网络出错');
            }
        })
    });
    return promise;
}
//封装request 含token
const requests = (url, method, data={}) => {
    var promise = new Promise((resolve, reject) => {
        //提示一下
        // uni.showLoading({
        //     title: '加载中...'
        // })
		//console.log(store.state.user.token)
		if(!store.state.user.token || store.state.user.token === null ){
			uni.navigateTo({
			    url: '/pages/login/login'
			});
			
			return false;
		}
        //网络请求
        uni.request({
            url: store.state.user.http+url,
            data: data,
			header:{
				"Authorization":store.state.user.token  //'Bearer '+
			},
            method: method,
            success: function (res) {
                uni.hideLoading()
                //服务器返回数据
                if (res.statusCode == 200) {
					if(res.data.code === 400){
						uni.navigateTo({
						    url: '/pages/login/login'
						});
						
						return false;
					}
					if(res.data.code === 0 && res.data.msg){
						uni.showToast({
						    title: res.data.msg,
							icon: 'success',
						    duration: 2000
						})
					}else if(res.data.code != 0 && res.data.msg){
						uni.showToast({
						    title: res.data.msg,
							icon: 'none',
						    duration: 2000
						});
					}
					
					 resolve(res);
                } else {
					
					console.log("请求错误")
                    //返回错误提示信息
                    reject(res.data);
                }
				
            },
            fail: function (e) {
				
                 uni.hideLoading()
				uni.showToast({
				    title: '网络连接错误',
					icon: 'loading',
				    duration: 2000
				});
                reject('网络出错');
            }
        })
    });
    return promise;
}
module.exports = {
    request:request,
	requests:requests
}