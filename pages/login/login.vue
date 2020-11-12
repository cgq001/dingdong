<template>
	<view class="login">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="login-box">
			<!-- 关闭按钮 -->
			<view class="login-box-close">
				<text class="lg text-gray cuIcon-close"></text>
			</view>
			<!-- APP名称 -->
			<view class="login-box-name">登陆叮咚到家</view>
			<!-- 输入手机号 -->
			<view class="login-box-phone">
				<view class="login-box-phone-box">
					<input class="login-box-phone-box-input" type="number" placeholder="请输入手机号"  maxlength="11"  mixlength="11" />
				</view>
			</view>
			<!-- 提示文字 -->
			<view class="login-box-prompt">
				未注册的手机号,验证后自动创建账户
			</view>
			<!-- 获取验证码 -->
			<view class="login-box-captcha">
				<view class="login-box-captcha-box" @click="goCode">
					获取验证码
				</view>
			</view>
			<!-- 遇到问题 -->
			<view class="login-box-problem">
				密码登陆
			</view>
			<!-- 顶到到底部 -->
			<view class="login-box-fixed">
				<!-- 第三方登陆 -->
				<view class="login-box-party">
					<view class="login-box-party-list">
						<view class="login-box-party-list-icon">
							<view class="login-box-party-list-icon-box">
								<u-icon name="weibo" color="#EF221D" size="56"></u-icon>
							</view>
						</view>
						<view class="login-box-party-list-name">微博</view>
					</view>
					<view class="login-box-party-list">
						<view class="login-box-party-list-icon">
							<view class="login-box-party-list-icon-box">
								<u-icon name="qq-fill" color="#0FB7E8" size="56"></u-icon>
							</view>
						</view>
						<view class="login-box-party-list-name">QQ</view>
					</view>
				</view>
				<!-- 协议 -->
				<view class="login-box-fixed-foot">
					<text>登陆代表你同意并遵守</text>
					<navigator url="/pages/index/index" style="color: #29BF00;" open-type='switchTab' hover-class="none">
						《 叮咚到家免责协议 》
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goCode(){
				uni.navigateTo({
				    url: '/pages/code/code'
				});
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
	line-height: 172rpx;
	font-size: 50rpx;
	color: #000000;
	padding: 0 82rpx;
	box-sizing: border-box;
}
.login-box-phone{
	width: 100%;
	height: 104rpx;
	padding: 0rpx 82rpx;
	box-sizing: border-box;
}
.login-box-phone-box{
	width: 100%;
	height: 100%;
	border-bottom: 1rpx solid #DFDFDF;
}
.login-box-phone-box-input{
	font-size: 34rpx;
}
.login-box-prompt{
	width: 100%;
	height: 72rpx;
	line-height: 72rpx;
	color: #919191;
	font-size: 24rpx;
	padding-left: 82rpx;
	box-sizing: border-box;
}
.login-box-captcha{
	width: 100%;
	height: 144rpx;
	padding: 28rpx 76rpx;
	box-sizing: border-box;
}
.login-box-captcha-box{
	width: 100%;
	height: 100%;
	border-radius: 544rpx;
	background: #D6D6D6;
	color: #FFFFFF;
	font-size: 30rpx;
	font-weight: bold;
	text-align: center;
	line-height: 88rpx;
}
.login-box-problem{
	width: 100%;
	height: 62rpx;
	padding: 0 82rpx;
	line-height: 62rpx;
	box-sizing: border-box;
	color: #4A8F16;
	font-size: 22rpx;
}
/* .login-box-problem text{
	color: #4A8F16;
	font-size: 22rpx;
} */
/* 定位到底部 */
.login-box-fixed{
	width: 100%;
	height: auto;
	position: absolute;
	left: 0;
	bottom: 0rpx;
}
.login-box-fixed-foot{
	width: 100%;
	height: 104rpx;
	padding: 0 80rpx;
	box-sizing: border-box;
	font-size: 20rpx;
	line-height: 104rpx;
	color: #8B8B8B;
	display: flex;
	justify-content: center;
}
.login-box-fixed-foot-check{
	width: 22rpx !important;
	height: 22rpx !important;
}
.login-box-party{
	width: 100%;
	height: 152rpx;
	display: flex;
	justify-content: space-between;
	
}
.login-box-party-list{
	width: 50%;
	height: 152rpx;
}
.login-box-party-list-icon{
	width: 100%;
	height: 104rpx;
	display: flex;
	justify-content: center;
}
.login-box-party-list-icon-box{
	width: 104rpx;
	height: 104rpx;
	border-radius: 52rpx;
	border: 1rpx solid #ECECEC;
	text-align: center;
	line-height: 104rpx;
}
.login-box-party-list-name{
	width: 100%;
	height: 48rpx;
	text-align: center;
	line-height: 48rpx;
	font-size: 22rpx;
	color: #909090;
}
</style>
