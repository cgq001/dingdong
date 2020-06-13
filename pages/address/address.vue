<template>
	<view class="address">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="address-title">
			<view class="address-title-left">
				<text class="lg text-gray cuIcon-back address-title-left-icon"></text>
				<text class="address-title-left-name">选择收货地址</text>
			</view>
			<view class="address-title-right" @click="goSetAddress">
				新增地址
			</view>
		</view>
		<!-- 地址列表 -->
		<view class="address-box">
			<scroll-view
				scroll-y
				class="address-box-scroll"
			>
				<view class="address-box-scroll-list">
					<view class="address-box-scroll-list-left">
						<label class="radio"><radio value="r1" checked="true" /></label>
					</view>
					<view class="address-box-scroll-list-centent">
						<view class="address-box-scroll-list-centent-name">
							详细地址呀
						</view>
						<view class="address-box-scroll-list-centent-default">
							<text class="address-box-scroll-list-centent-default-text">
								哈哈
							</text>
							<text class="address-box-scroll-list-centent-default-text">
								先生
							</text>
							<text class="address-box-scroll-list-centent-default-text">
								15639762230
							</text>
						</view>
					</view>
					<view class="address-box-scroll-list-right">
						<text class="lg text-gray cuIcon-post address-box-scroll-list-right-icon"></text>
					</view>
				</view>
				<view class="address-box-scroll-list">
					<view class="address-box-scroll-list-left">
						<label class="radio"><radio value="r1" checked="true" /></label>
					</view>
					<view class="address-box-scroll-list-centent">
						<view class="address-box-scroll-list-centent-name">
							详细地址呀
						</view>
						<view class="address-box-scroll-list-centent-default">
							<text class="address-box-scroll-list-centent-default-text">
								哈哈
							</text>
							<text class="address-box-scroll-list-centent-default-text">
								先生
							</text>
							<text class="address-box-scroll-list-centent-default-text">
								15639762230
							</text>
						</view>
					</view>
					<view class="address-box-scroll-list-right">
						<text class="lg text-gray cuIcon-post address-box-scroll-list-right-icon"></text>
					</view>
				</view>
			</scroll-view>
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
			goSetAddress(){
				uni.navigateTo({
				    url: '/pages/setaddress/setaddress'
				});
			}
		}
	}
</script>

<style>
.address{
	width: 100%;
	height: 100%;
}
/* 标题 */
.address-title{
	width: 100%;
	height: 90rpx;
	/* background: #007AFF; */
	display: flex;
	justify-content: space-between;
}
.address-title-left{
	flex: 1;
	height: 90rpx;
	color: #494E51;
	line-height: 90rpx;
}
.address-title-left-icon{
	width: 96rpx;
	height: 100%;
	line-height: 90rpx;
	text-align: center;
	color: #000000;
	display: inline-block;
	font-size: 40rpx;
}
.address-title-left-name{
	line-height: 90rpx;
	color: #494E51;
	font-size: 34rpx;
}
.address-title-right{
	width: 180rpx;
	height: 90rpx;
	text-align: center;
	line-height: 90rpx;
	color: #575757;
	font-size: 30rpx;
}
/* 地址列表 */
.address-box{
	width: 100%;
	height: calc(100% - 90rpx - var(--status-bar-height));
	/* background: #007AFF; */
}
.address-box-scroll{
	width: 100%;
	height: 100%;
}
.address-box-scroll-list{
	width: 100%;
	height: 140rpx;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15rpx;
}
.address-box-scroll-list-left{
	width: 88rpx;
	height: 140rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background: #0086B3; */
}
.address-box-scroll-list-centent{
	flex: 1;
	height: 140rpx;
	padding-top: 22rpx;
	box-sizing: border-box;
}
.address-box-scroll-list-centent-name{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	color: #000000;
	font-size: 26rpx;
	font-weight: bold;
	overflow: hidden;
}
.address-box-scroll-list-centent-default{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	color: #3F4346;
	font-size: 24rpx;
	overflow: hidden;
}
.address-box-scroll-list-centent-default-text{
	margin-right: 20rpx;
}
.address-box-scroll-list-right{
	width: 86rpx;
	height: 140rpx;
	/* background: #17C734; */
	text-align: center;
	line-height: 140rpx;
}
.address-box-scroll-list-right-icon{
	color: #919095;
	font-size: 38rpx;
}
</style>
