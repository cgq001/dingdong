<template>
	<view class="homeRecommend">
		<view class="homeRecommend-name">常用功能</view>
		<view class="homeRecommend-box">
			<view class="homeRecommend-box-list" @click="goVip">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-ly_huiyuanka icon-one"></text> -->
					<image src="../static/image/home/vip.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					会员卡
				</view>
			</view>
			<view class="homeRecommend-box-list">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-fenxiang icon-one"></text> -->
					<image src="../static/image/home/fenxiang.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					分享有礼
				</view>
			</view>
			<view class="homeRecommend-box-list">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-lihe icon-one"></text> -->
					<image src="../static/image/home/lihe.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					邀请有礼
				</view>
			</view>
			<view class="homeRecommend-box-list">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-shoucang icon-one"></text> -->
					<image src="../static/image/home/shoucang.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					收藏
				</view>
			</view>
			<view class="homeRecommend-box-list" @click="goGift">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-kabao icon-two"></text> -->
					<image src="../static/image/home/zhifu.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					礼品卡
				</view>
			</view>
			<view class="homeRecommend-box-list" @click="goCustomer">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-unie737 icon-two"></text> -->
					<image src="../static/image/home/kefu.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					联系客服
				</view>
			</view>
			
			<view class="homeRecommend-box-list" @click="goOpinion">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-yijianfankui icon-two"></text> -->
					<image src="../static/image/home/yijian.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					意见反馈
				</view>
			</view>
			<view class="homeRecommend-box-list">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-shezhi icon-two"></text> -->
					<image src="../static/image/home/address.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					收货地址
				</view>
			</view>
			<!-- #ifdef APP-PLUS   -->
			<view class="homeRecommend-box-list" @click="scanCode">
				<view class="homeRecommend-box-list-icon homeRecommend-box-list-icon-image">
					<!-- <text class="iconfont icon-saoyisao icon-three"></text> -->
					<image src="../static/image/home/saoyisao.png"></image>
				</view>
				<view class="homeRecommend-box-list-name">
					扫一扫
				</view>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goOpinion(){
				uni.navigateTo({
				    url: '/pages/opinion/opinion'
				});
			},
			scanCode(){
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			goCustomer(){
				uni.navigateTo({
				    url: '/pages/customer/customer'
				});
			},
			goVip(){
				uni.navigateTo({
				    url: '/pages/vip/vip'
				});
			},
			goGift(){
				uni.navigateTo({
				    url: '/pages/gift/gift'
				});
			}
		}
	}
</script>

<style>
.homeRecommend{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	border-radius: 15rpx;
}
.homeRecommend-name{
	width: 100%;
	height: 85rpx;
	padding-left: 32rpx;
	box-sizing: border-box;
	line-height: 85rpx;
	font-weight: bold;
	color: #1B1B1B;
	font-size: 30rpx;
	
}
.homeRecommend-box{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.homeRecommend-box-list{
	width: 25%;
	height: auto;
	margin-bottom: 65rpx;
}
.homeRecommend-box-list-icon{
	width: 100%;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.homeRecommend-box-list-icon-image{
	width: 100%;
	height: 86rpx;
	/* display: flex;
	justify-content: center; */
	/* align-items: center; */
}
.homeRecommend-box-list-icon-image image{
	width: 45rpx;
	height: 45rpx;
}
.homeRecommend-box-list-icon text{
	font-size: 46rpx;
	text-align: center;
}
.icon-one{
	color: #FC6226;
}
.icon-two{
	color: #22CD29;
}
.icon-three{
	color: #3D9FFC;
}
.homeRecommend-box-list-name{
	font-size: 22rpx;
	color: #1E1F23;
	text-align: center;
}
</style>
