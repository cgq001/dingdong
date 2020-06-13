<template>
	<view class="login">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="login-box">
			<!-- 关闭按钮 -->
			<view class="login-box-close">
				<text class="lg text-gray cuIcon-back"></text>
			</view>
			<!-- APP名称 -->
			<view class="login-box-name">请输入验证码</view>
			<!-- 提示文字 -->
			<view class="login-box-prompt">
				验证码已发送至: 156 3976 2230
			</view>
			<!-- 验证码 -->
			<view class="code-input">
				<u-message-input 
					mode="bottomLine" 
					:focus="true" 
					:breathe="false"  
					@finish="finish" 
					:bold='false'
					width='90'></u-message-input>
				<!-- <view class="code-input-list">
					<input type="number" class="code-input-list-input" :maxlength='1' :focus='!code1' v-model="code1" @input='input(1)' />
				</view>
				<view class="code-input-list">
					<input type="number" class="code-input-list-input" :maxlength='1' :focus='code1' v-model="code2" @input='input(2)' />
				</view>
				<view class="code-input-list">
					<input type="number" class="code-input-list-input" :maxlength='1' :focus='code2' v-model="code3" @input='input(3)' />
				</view>
				<view class="code-input-list">
					<input type="number" class="code-input-list-input" :maxlength='1' :focus='code3' v-model="code4" @input='input(4)' />
				</view> -->
			</view>
			<!-- 提示文字 -->
			<view class="login-box-prompt reset-code">
				57秒后重新获取验证码
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bottomLine:null
			}
		},
		methods: {
			finish(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
.login{
	width: 100%;
	height: 100%;
}
.login-box{
	width: 100%;
	height: calc(100% - var(--status-bar-height));
	background: #FFFFFF;
}
.login-box-close{
	width: 100%;
	height: 92rpx;
	padding: 0 32rpx;
	line-height: 92rpx;
	box-sizing: border-box;
	margin-bottom: 26rpx;
}
.login-box-close text{
	font-size: 50rpx;
	color: #30A500;
}
.login-box-name{
	width: 100%;
	height: 172rpx;
	/* line-height: 172rpx; */
	padding: 61rpx 82rpx 25rpx 82rpx;
	font-size: 50rpx;
	color: #000000;
	box-sizing: border-box;
}

.login-box-prompt{
	width: 100%;
	height: 52rpx;
	line-height: 52rpx;
	color: #141414;
	font-size: 24rpx;
	padding-left: 82rpx;
	box-sizing: border-box;
	margin-bottom: 45rpx;
}
/* 验证码输入框 */
.code-input{
	width: 100%;
	height: 120rpx;
	/* display: flex;
	justify-content: space-around;
	 */
	margin-bottom: 72rpx;
}
.code-input-list{
	width: 90rpx;
	height: 100%;
	border-bottom: 2rpx solid #575757;
}
.code-input-list-input{
	width: 100%;
	height: 100%;
	font-size: 40rpx;
	line-height: 82rpx;
	text-align: center;
}
.code-input-list-input-placeholder{
	color: #25B000;
}
.input-placeholder{
	color: #25B000;
}
.reset-code{
	color: #363636;
}
</style>
