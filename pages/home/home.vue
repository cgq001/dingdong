<template>
	<view class="home">
		<!-- 顶部 -->
		<view class="home-head">
			<view class="status_bar">
			          <!-- 这里是状态栏 -->
			</view>
			<view class="home-head-info">
				<view class="home-head-info-box">
					<view class="home-head-info-box-left" @click="goPerson">
						<view class="home-head-info-box-left-image">
							<image src="../../static/image/characteristic/00-07-53.png"></image>
						</view>
						<view class="home-head-info-box-left-info">
							登陆 / 注册
						</view>
					</view>
					<view class="home-head-info-box-right" @click="goSetup">
						<text class="lg text-gray cuIcon-settingsfill"></text>
					</view>
				</view>
				<!-- 悬浮 -->
				<view class="home-head-pick">
					<view class="home-head-pick-lits" @click="goCoupon">
						<view class="home-head-pick-lits-number">
							10
						</view>
						<view class="home-head-pick-lits-name">
							优惠券
						</view>
					</view>
					<view class="home-head-pick-lits" @click="goIntegral">
						<view class="home-head-pick-lits-number">
							10
						</view>
						<view class="home-head-pick-lits-name">
							积分
						</view>
					</view>
					<view class="home-head-pick-lits" @tap="goWallet">
						<view class="home-head-pick-lits-number">
							10
						</view>
						<view class="home-head-pick-lits-name">
							我的钱包
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="home-order">
			<view class="home-order-box">
				<view class="home-order-box-list" @click="goOrder(0)">
					<view class="home-order-box-list-icon home-order-box-list-icon-image">
						<!-- <text class="iconfont icon-daizhifu"></text> -->
						<image src="../../static/image/home/zf.png"></image>
						<text class="home-order-box-list-icon-number">7</text>
					</view>
					<view class="home-order-box-list-name">
						待支付
					</view>
				</view>
				<view class="home-order-box-list" @click="goOrder(1)">
					<view class="home-order-box-list-icon home-order-box-list-icon-image">
						<!-- <text class="iconfont icon-daishouhuo"></text> -->
						<image src="../../static/image/home/shouhuo.png"></image>
						<text class="home-order-box-list-icon-number">7</text>
					</view>
					<view class="home-order-box-list-name">
						进行中
					</view>
				</view>
				<view class="home-order-box-list" @click="goOrder(2)">
					<view class="home-order-box-list-icon home-order-box-list-icon-image">
						<!-- <text class="iconfont icon-ai-message"></text> -->
						<image src="../../static/image/home/news.png"></image>
						<text class="home-order-box-list-icon-number">7</text>
					</view>
					<view class="home-order-box-list-name">
						待评价
					</view>
				</view>
				<view class="home-order-box-list">
					<view class="home-order-box-list-icon home-order-box-list-icon-image">
						<!-- <text class="iconfont icon-qiandai"></text> -->
						<image src="../../static/image/home/tuikuan.png"></image>
						<text class="home-order-box-list-icon-number">10</text>
					</view>
					<view class="home-order-box-list-name">
						退款/售后
					</view>
				</view>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="home-swipe">
			<view class="home-swipe-box">
				
			</view>
		</view>
		<!-- 推荐功能 -->
		<view class="home-recommend">
			<homeRecommend />
		</view>
		<!-- 版本 -->
		<view class="home-version">当前版本1.0.0</view>
	</view>
</template>

<script>
	import homeRecommend from '../../components/homeRecommend.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goPerson(){
				uni.navigateTo({
				    url: '/pages/person/person'
				});
			},
			goSetup(){
				uni.navigateTo({
				    url: '/pages/setup/setup'
				});
			},
			goOrder(num){
				uni.navigateTo({
				    url: '/pages/order/order?id='+num
				});
			},
			goCoupon(){
				uni.navigateTo({
				    url: '/pages/coupon/coupon'
				});
			},
			goIntegral(){
				uni.navigateTo({
				    url: '/pages/integral/integral'
				});
			},
			goWallet(){
				uni.navigateTo({
				    url: '/pages/wallet/wallet'
				});
			}
		},
		components:{
			homeRecommend
		}
	}
</script>

<style scoped>
.home{
	width: 100%;
	min-height: 100%;
	padding-bottom: 120rpx;
	background: #F6F7FB;
}
/* 顶部 */
.home-head{
	width: 100%;
	height: auto;
	background-image: linear-gradient(to right, #72E437, #1FC933);
	position: relative;
	margin-bottom: 100rpx;
}
.home-head-info{
	width: 100%;
	height: auto;
	padding: 16rpx 22rpx 74rpx;
	box-sizing: border-box;
}
.home-head-info-box{
	width: 100%;
	height: 110rpx;
	display: flex;
	justify-content: space-between;
}
.home-head-info-box-left{
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: flex-start;
}
.home-head-info-box-left-image{
	width: 110rpx;
	height: 110rpx;
	border-radius: 55rpx;
	overflow: hidden;
	margin-right: 20rpx;
}
.home-head-info-box-left-image image{
	width: 110rpx;
	height: 110rpx;
}
.home-head-info-box-left-info{
	flex: 1;
	height: 110rpx;
	line-height: 110rpx;
	font-size: 38rpx;
	color: #FFFFFF;
	font-weight: 600;
}
.home-head-info-box-right{
	width: 50rpx;
	height: 100%;
	text-align: center;
	line-height: 110rpx;
	font-size: 50rpx;
	color: #FFFFFF;
}
.home-head-info-box-right text{
	color: #FFFFFF;
}
.home-head-pick{
	width: 704rpx;
	height: 130rpx;
	border-radius: 16rpx;
	background: #FFFFFF;
	position: absolute;
	left: 23rpx;
	bottom: -80rpx;
	padding: 26rpx 0 28rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	box-shadow: 0 0 2rpx #EEEEEE;
}
.home-head-pick .home-head-pick-lits:nth-last-child(1){
	border-right-color: transparent; 
}
.home-head-pick-lits{
	flex: 1;
	height: 76rpx;
	text-align: center;
	border-right: 1px solid #EEEEEE;
}
.home-head-pick-lits-number{
	width: 100%;
	height: 40rpx;
	line-height: 40rpx;
	font-size: 22rpx;
	font-weight: bold;
	color: #1A1B1E;
}
.home-head-pick-lits-name{
	width: 100%;
	height: 36rpx;
	font-size: 22rpx;
	font-weight: bold;
	color: #1A1B1E;
}
/* 订单 */
.home-order{
	width: 100%;
	height: auto;
	padding: 0 24rpx;
	box-sizing: border-box;
	margin-bottom: 22rpx;
}
.home-order-box{
	width: 100%;
	background: #FFFFFF;
	border-radius: 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
}
.home-order-box-list{
	flex: 1;
	padding-top: 43rpx;
	box-sizing: border-box;
	text-align: center;
	padding-bottom: 10rpx;
}
.home-order-box-list-icon{
	width: 100%;
	height: 45rpx;
	position: relative;
}
.home-order-box-list-icon-number{
	width: 35rpx;
	height: 35rpx;
	background: #FE0C40;
	display: inline-block;
	position: absolute;
	right: 40rpx;
	top: -15rpx;
	font-size: 18rpx;
	border-radius: 18rpx;
	text-align: center;
	line-height: 35rpx;
	color: #FFFFFF;
}
.home-order-box-list-icon-image{
	display: flex;
	justify-content: center;
}
.home-order-box-list-icon-image image{
	width: 45rpx;
	height: 45rpx;
}
/* .home-order-box-list-icon text{
	font-size: 45rpx; */
	/* font-weight: bold; */
	/* background-image: liner-gradient(to right, red, blue); 
	-webkit-background-clip: text; */
/* 	color: #57E535;
} */
.home-order-box-list-name{
	width: 100%;
	height: 72rpx;
	color: #07080C;
	font-weight: bold;
	font-size: 22rpx;
	line-height: 72rpx;
}
/* 轮播图 */
.home-swipe{
	width: 100%;
	height: 154rpx;
	padding: 0 24rpx;
	box-sizing: border-box;
	margin-bottom: 22rpx;
}
.home-swipe-box{
	width: 100%;
	height: 154rpx;
	border-radius: 10rpx;
	background: #FFFFFF;
}
/* 功能推荐 */
.home-recommend{
	width: 100%;
	/* height: 630rpx; */
	padding: 0 24rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
/* 版本 */
.home-version{
	width: 100%;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	font-size: 20rpx;
	color: #666666;
}
</style>
