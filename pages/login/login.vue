<template>
	<view class="login">
		<input class="login-phone" v-model="phone" type="text" placeholder="输入手机号(新手机号自动注册)" />
		<view class="login-pass">
			<input class="login-phone" v-model='code'  type="text" placeholder="输入手机验证码" />
			<text class="login-pass-text" :style="phoneOff ? 'background: #007AFF;' : ''" @click="sendCode">{{codeInp >=60 ? '获取验证码' : '剩余'+codeInp+'秒' }}</text>
		</view>
		<!-- 登陆 -->
		<view class="login-btns" :style="codeOff ? 'background: #007AFF;' : ''" @click="loginBtns">
			登陆
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: undefined,
				code: undefined,
				phoneOff: false,  //手机号是否验证通过
				codeNums: null,  //验证码
				codeInp: 60,  //倒计时
				codeTime: null , //定时器
				codeStart: false,
				codeOff: false // 验证码是否验证通过
			}
		},
		methods: {
			sendCode(){  //点击获取验证码
				if(this.phoneOff){
					let This = this
					let codeNums = parseInt(Math.random()*10000)
					This.codeStart = false	
					uni.showModal({
					    title: '提示',
					    content: '你的验证码是'+codeNums,
					    success: function (res) {
					        if (res.confirm) {
								This.codeNums = codeNums
								This.codeStart = true
					            This.codeInpSet()
					        } else if (res.cancel) {
					            
					        }
					    }
					})
				}else{
					uni.showToast({
					    title: '请输入正确的手机号',
						icon: 'none',
					    duration: 2000
					});
				}
			},
			codeInpSet(){ // 倒计时定时器
				let This = this
			
				clearInterval(This.codeTime)
				
				This.codeInp = 60
				This.codeTime = setInterval(function(){
					if(This.codeInp>=1){
						This.codeInp --
					}else{
						This.codeInp = 60
						This.codeNums = null
						This.codeStart = false
						clearInterval(This.codeTime)
					}
				},1000)
			},
			loginBtns(){  //登陆按钮
				let This = this
				if(this.codeOff){
					this.http('nottoken/login','post',{
						phone: this.phone
					}).then(res=>{
						console.log(res)
						if(res.data.code === 0){
							This.$store.commit('user/addToken',res.data.data.token)
							// This.$store.commit('addToken',res.data.data.token)
							uni.setStorageSync('token', res.data.data.token);
							uni.switchTab({
							    url: '/pages/home/home'
							});
						}
					})
						
				}else{
					uni.showToast({
					    title: '请输入正确的验证码',
						icon: 'none',
					    duration: 2000
					});
				}
			}
		},
		watch:{
			phone(news,olds){ //监听手机号是否正确
				let rg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
				this.phoneOff = rg.test(news)
				
			},
			code(news,olds){ //监听 验证码是否验证通过
				if(news ==  this.codeNums && news != null ){
						this.codeOff  = true
					}else{
						this.codeOff  = false
					}
			}
		}
	}
</script>

<style>
.login{
	width: 100%;
	height: 100%;
	background:  #FFFFFF;
}
.login-phone{
	/* background: #FFFFFF; */
	width: 100%;
	height: 100rpx;
	border-bottom: 1rpx solid #CCCCCC;
	padding-left: 25rpx;
	padding-right: 25px;
	box-sizing: border-box;
	font-size: 30rpx;
	margin-bottom: 20rpx;
}
.login-phone:placeholder-shown{
	color: #CCCCCC;
}
.login-phone:-ms-input-placeholder{
	color: #CCCCCC;
}
.login-pass{
	width: 100%;
	height: 100rpx;
	position: relative;
	margin-bottom: 50rpx;
}
.login-pass-text{
	display: inline-block;
	background: #CCCCCC;
	width: 200rpx;
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
	color: #FFFFFF;
	border-radius: 40rpx;
	position: absolute;
	right: 25rpx;
	top: 10rpx;
}
.login-btns{
	width: 700rpx;
	height: 100rpx;
	margin-left: 25rpx;
	background: #CCCCCC;
	text-align: center;
	line-height: 100rpx;
	color: #FFFFFF;
	border-radius: 50rpx;
	font-size: 36rpx;
}
</style>
