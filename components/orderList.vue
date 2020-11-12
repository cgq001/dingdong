<template>
	<view class="order-list">
		<view class="order-list-time">
			<text class="order-list-time-left">
				2020-05-04 21:18:29
			</text>
			<text class="order-list-time-right">
				待支付
			</text>
		</view>
		<!-- 商品列表 -->
		<view class="order-list-goodsbox">
			<!-- 商品信息 -->
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
			<!-- 商品信息 -->
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
			<!-- 商品信息 -->
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
		</view>
		<!-- 查看更多 -->
		<view class="order-list-more">
			全部展开(9)
		</view>
		<!-- 共计价格 -->
		<view class="order-list-prick">
			<text class="order-list-prick-info">
				共1份商品
			</text>
			<text class="order-list-prick-info" style="margin-left: 20rpx; margin-right: 10rpx;">
				实付
			</text>
			<text class="order-list-prick-money">
				¥ 0.00
			</text>
		</view>
		<!-- 功能区域 -->
		<view class="order-list-cant">
			<view class="order-list-cant-list blue-icon">
				去评价
			</view>
			<view class="order-list-cant-list green-icon">
				去支付
			</view>
			<view class="order-list-cant-list red-icon">
				取消订单
			</view>
			<view class="order-list-cant-list info-icon">
				再次购买
			</view>
			<!-- <view class="order-list-cant-list info-icon">
				删除订单
			</view> -->
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
.order-list{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	margin-bottom: 20rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.order-list-time{
	width: 100%;
	height: 93rpx;
	line-height: 93rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.order-list-time-left{
	width: 380rpx;
	height: 93rpx;
	color: #555555;
	font-size: 22rpx;
}
.order-list-time-right{
	flex: 1;
	height: 93rpx;
	color: #414141;
	font-size: 26rpx;
	text-align: right;
}
/* 商品信息 */
.order-list-goods{
	width: 100%;
	height: 160rpx;
	background: #F8F8F8;
	border-radius: 5rpx;
	padding: 25rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx dashed #EEEEEE;
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
	width: 520rpx;
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
}
.order-list-goods-right-bottom text:nth-child(1){
	margin-right: 10rpx;
}
/* 查看更多 */
.order-list-more{
	width: 100%;
	height: 90rpx;
	/* background: #007AFF; */
	font-size: 24rpx;
	text-align: center;
	line-height: 90rpx;
	/* border-bottom: 1rpx dashed #EEEEEE; */
	box-sizing: border-box;
}
/* 商品价格 */
.order-list-prick{
	width: 100%;
	height: 94rpx;
	background: #FFFFFF;
	line-height: 94rpx;
	display: flex;
	justify-content: flex-end;
	/* border-bottom: 1rpx solid #F4F4F4;
	box-sizing: border-box; */
}
.order-list-prick-info{
	color: #535353;
	font-size: 26rpx;
}
.order-list-prick-money{
	color: #121212;
	font-size: 24rpx;
	font-weight: bold;
}
/* 功能区域 */
.order-list-cant{
	width: 100%;
	height: 90rpx;
	border-top: 1rpx solid #F4F4F4;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.order-list-cant-list{
	width: 150rpx;
	height: 56rpx;
	border-radius: 28rpx;
	text-align: center;
	line-height: 56rpx;
	font-size: 26rpx;
	margin-left: 15rpx;
}
.info-icon{
	border: 1rpx solid #E7E7E7;
}
.red-icon{
	background-image: linear-gradient(to right,#ED0388,#F33C3E);
	color: #FFFFFF;
}
.green-icon{
	background: #39B54A;
	color: #FFFFFF;
}
.blue-icon{
	background: #409EFF;
	color: #FFFFFF;
}
</style>
