<template>
	<view class="order-list-goods">
		<view class="order-list-goods-left">
			<image src="../static/image/characteristic/00-07-56.png"></image>
		</view>
		<view class="order-list-goods-right">
			<view class="order-list-goods-right-top">
				 自动播放导致swiper变化, 自动播放导致swiper变化, 自动播放导致swiper变化, 自动播放导致swiper变化, 
			</view>
			<view class="order-list-goods-right-bottom">
				<text>单价: 2.99</text>
				<text>数量: 1</text>
			</view>
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

<style scoped>
.order-list-goods{
	width: 100%;
	height: auto;
	padding: 15rpx 0 25rpx;
	
/* 	background: #F8F8F8; */
	border-radius: 5rpx;
	/* padding: 25rpx; */
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	/* border-bottom: 1rpx dashed #666666; */
}
.order-list-goodsbox .order-list-goods:nth-last-of-type(1){
	border-bottom: none;
}
.order-list-goods-left{
	width: 110rpx;
	height: 110rpx;
	border-radius: 5rpx;
	background: #FFFFFF;
	overflow: hidden;
	margin-right: 25rpx;
}
.order-list-goods-left image{
	width: 100%;
	height: 100%;
}
.order-list-goods-right{
	width: 525rpx;
	height: 110rpx;
}
.order-list-goods-right-top{
	width: 100%;
	height: 35rpx;
	line-height: 35rpx;
	font-size: 26rpx;
	color: #1B1B1B;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-weight: bold;
}
.order-list-goods-right-bottom{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	color: #8D8D8D;
	font-size: 22rpx;
	display: flex;
	justify-content: space-between;
}
.order-list-goods-right-bottom text:nth-child(2){
	/* margin-right: 10rpx; */
	/* font-weight: bold; */
	color: #060810;
}
</style>
