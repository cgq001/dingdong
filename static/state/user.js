let token = uni.getStorageSync('token') || null;
const user = {
	namespaced: true,
    state: {
        token: token,
		http: 'http://dingdong-api.nodebook.top/h5/',  //'http://192.168.188.200:5005/'
        userList:{    //用户信息
           tel:null,
		   username: ''
        },
    },
    mutations :{
	   addUserlist(state,str){
		    state.userList= str
	   },
	   addToken(state,str){
		   state.token=str
	   }
    },
    actions:{

    }
}

export default user;
