<template>
	<view class="coupon-box">
		<view class="coupon-box-top">
			<view class="coupon-box-top-left">
				<view class="coupon-box-top-left-number">
					<text>¥</text>
					<text>3.00</text>
				</view>
				<view class="coupon-box-top-left-text">
					无门槛
				</view>
			</view>
			<view class="coupon-box-top-centent">
				<view class="coupon-box-top-centent-name">
					<text class="coupon-box-top-centent-name-class">[无门槛]</text>
					<text class="coupon-box-top-centent-name-name">新人优惠券</text>
				</view>
				<view class="coupon-box-top-centent-description">
					限线上购物使用
				</view>
				<view class="coupon-box-top-centent-time">
					2020.05.01~2021.04.30有效
				</view>
			</view>
			<view class="coupon-box-top-right">
				<radio value="12" :checked="true" />
			</view>
		</view>
		<!-- 使用条件 -->
		<view class="coupon-box-condition">
			<view class="coupon-box-condition-list">
				1.运费使用
			</view>
			<view class="coupon-box-condition-list">
				2.仅限新人使用
			</view>
		</view>
		<!-- 不可用原因 -->
		<view class="coupon-box-reason">
			同类型优惠券,不可叠加使用
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.coupon-box{
	width: 100%;
	height: auto;
	padding: 20rpx;
	box-sizing: border-box;
	border-radius: 20rpx;
	background: #FFFFFF;
	margin-bottom: 20rpx;
}
.coupon-box-top{
	width: 100%;
	height: 156rpx;
	display: flex;
	justify-content: space-between;
}
.coupon-box-top-left{
	width: 170rpx;
	height: 100%;
	border-right: 1rpx solid #F6F6F6;
	padding-top: 14rpx;
	box-sizing: border-box;
}
.coupon-box-top-left-number{
	width: 100%;
	height: 80rpx;
	color: #EF1F15;
	line-height: 80rpx;
}
.coupon-box-top-left-number text:nth-child(1){
	font-size: 24rpx;
	font-weight: bold;
}
.coupon-box-top-left-number text:nth-child(2){
	font-size: 50rpx;
	font-weight: bolder;
}
.coupon-box-top-left-text{
	width: 100%;
	height: 48rpx;
	color: #4A4E51;
	font-size: 22rpx;
	text-align: center;
	line-height: 48rpx;
}
.coupon-box-top-centent{
	flex: 1;
	height: 100%;
	padding-left: 30rpx;
	box-sizing: border-box;
	text-align: left;
}
.coupon-box-top-centent-name{
	width: 100%;
	height: 46rpx;
	font-weight: bold;
	color: #01040D;
	line-height: 46rpx;
	font-size: 30rpx;
	text-align: left;
	
}
.coupon-box-top-centent-name-class{
	margin-right: 10rpx;
}
.coupon-box-top-centent-description{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	color: #FC154D;
	font-size: 22rpx;
}
.coupon-box-top-centent-time{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	color: #474746;
	font-size: 24rpx;
}
.coupon-box-top-right{
	width: 84rpx;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* 使用条件 */
.coupon-box-condition{
	width: 100%;
	height: auto;
	padding: 15rpx 25rpx;
	box-sizing: border-box;
	text-align: left;
	margin-bottom: 15rpx;
}
.coupon-box-condition-list{
	width: 100%;
	height: 35rpx;
	color: #8E8D93;
	font-size: 20rpx;
	line-height: 35rpx;
	text-overflow: ellipsis;
	overflow: hidden;
}
.coupon-box-reason{
	width: 100%;
	height: 40rpx;
	line-height: 40rpx;
	text-overflow: ellipsis;
	overflow: hidden;
	color: #F81538;
	text-align: left;
	font-size: 20rpx;
	padding-left: 25rpx;
	box-sizing: border-box;
}
.coupon-box-reason{
	width: 100%;
	height: auto;
	line-height: 35rpx;
	color: #8E8D93;
	font-size: 20rpx;
	padding-left: 25rpx;
	box-sizing: border-box;
}
</style>
