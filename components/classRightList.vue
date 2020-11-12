<template>
	<view class="classRightListBox">
		<view class="classRightListBox-left" @click="goShopping">
			<image src="../static/image/characteristic/00-07-53.png"></image>
		</view>
		<view class="classRightListBox-right">
			<view class="classRightListBox-right-name">这里是商品标题呀</view>
			<view class="classRightListBox-right-title">这里是商品标题呀</view>
			<view class="classRightListBox-right-lable">
				<text class="classRightListBox-right-lable-list" style="color: #FC1AE8; border-color: #FC1AE8;">新人专享</text>
				<text class="classRightListBox-right-lable-list">24小时送货</text>
			</view>
			<view class="classRightListBox-right-prick">
				<view class="classRightListBox-right-prick-left">
					<view class="classRightListBox-right-prick-left-prick1">
						<text>¥</text>
						<text>19.9</text>
					</view>
					<view class="classRightListBox-right-prick-left-prick2">
						<text>¥</text>
						<text>19.9</text>
					</view>
				</view>
				<view class="classRightListBox-right-prick-right">
					<text class="cuIcon-add"></text>
				</view>
			</view>
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
			goShopping(){
				uni.navigateTo({
				    url: '/pages/shopping/shopping'
				});
				console.log('跳转')
			}
		}
	}
</script>

<style>
.classRightListBox{
	width: 100%;
	height: auto;
	padding: 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.classRightListBox-left{
	width: 157rpx;
	height: 157rpx;
	border-radius: 5rpx;
	margin-right: 25rpx;
	
}
.classRightListBox-left image{
	width: 100%;
	height: 100%;
}
.classRightListBox-right{
	flex: 1;
	height: auto;
}
.classRightListBox-right-name{
	width: 100%;
	line-height: 50rpx;
	height: 50rpx;
	color: #000000;
	font-size: 26rpx;
	font-weight: 600;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.classRightListBox-right-title{
	width: 100%;
	height: 35rpx;
	font-size: 22rpx;
	line-height: 35rpx;
	color: #858585;
}
.classRightListBox-right-lable{
	width: 100%;
	padding: 6rpx;
	height: auto;
}
.classRightListBox-right-lable-list{
	display: inline-block;
	height: 35rpx;
	border: 1px solid;
	border-radius: 8rpx;
	font-size: 20rpx;
	line-height: 32rpx;
	padding: 0 10rpx;
	box-sizing: border-box;
	margin-right: 10rpx;
	margin-bottom: 10rpx;
}
.classRightListBox-right-prick{
	width: 100%;
	height: 46rpx;
	display: flex;
	justify-content: space-between;
	padding-right: 15rpx;
	box-sizing: border-box;
}
.classRightListBox-right-prick-left{
	flex: 1;
	height: 100%;
	display: flex;
}
.classRightListBox-right-prick-left-prick1{
	height: 100%;
	line-height: 46rpx;
	color: #FF3A86;
	margin-right: 10rpx;
}
.classRightListBox-right-prick-left-prick1 text:nth-child(1){
	font-size: 16rpx;
}
.classRightListBox-right-prick-left-prick1 text:nth-child(2){
	font-size: 26rpx;
	font-weight: bold;
}
.classRightListBox-right-prick-left-prick2{
	height: 100%;
	line-height: 46rpx;
	color: #B6B6B6;
	font-size: 18rpx;
	text-decoration: line-through;
}
.classRightListBox-right-prick-right{
	width: 45rpx;
	height: 45rpx;
	background: #60DA62;
	border-radius: 5rpx;
	font-size: 40rpx;
	color: #FFFFFF;
	text-align: center;
	line-height: 45rpx;
	
}
</style>
