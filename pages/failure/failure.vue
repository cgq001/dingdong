<template>
	<view class="failure">
		<scroll-view class="coupon-box-scroll" scroll-y>
			<view class="coupon-box-list">
				<!-- 优惠券价格 -->
				<view class="coupon-box-list-top">
					<view class="coupon-box-list-top-left">
						<view class="coupon-box-list-top-left-number">
							¥18
						</view>
						<view class="coupon-box-list-top-left-name">
							满99可用
						</view>
					</view>
					<view class="coupon-box-list-top-centent">
						<view class="coupon-box-list-top-centent-name">
							<text>[通用券]</text>
							<text>新人专享券</text>
						</view>
						<view class="coupon-box-list-top-centent-time">
							有限期至2020.10.10
						</view>
					</view>
					<view class="coupon-box-list-top-right">
						
					</view>
				</view>
				<!-- 优惠券使用说明 -->
				<view class="coupon-box-list-bottom">
					<view class="coupon-box-list-bottom-left">
						<text>1.全品类通用(不能叠加使用)</text>
						<text>2.有效期内使用(不能叠加使用)</text>
					</view>
					<view class="coupon-box-list-bottom-right">
						<text class="lg text-gray cuIcon-unfold"></text>
					</view>
				</view>
			</view>
			<view class="coupon-box-list">
				<!-- 优惠券价格 -->
				<view class="coupon-box-list-top">
					<view class="coupon-box-list-top-left">
						<view class="coupon-box-list-top-left-number">
							¥18
						</view>
						<view class="coupon-box-list-top-left-name">
							满99可用
						</view>
					</view>
					<view class="coupon-box-list-top-centent">
						<view class="coupon-box-list-top-centent-name">
							<text>[通用券]</text>
							<text>新人专享券</text>
						</view>
						<view class="coupon-box-list-top-centent-time">
							有限期至2020.10.10
						</view>
					</view>
					<view class="coupon-box-list-top-right">
						
					</view>
				</view>
				<!-- 优惠券使用说明 -->
				<view class="coupon-box-list-bottom">
					<view class="coupon-box-list-bottom-left coupon-box-list-bottom-left-active">
						<text>1.全品类通用(不能叠加使用)</text>
						<text>2.有效期内使用(不能叠加使用)</text>
					</view>
					<view class="coupon-box-list-bottom-right">
						<text class="lg text-gray cuIcon-unfold"></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.failure{
	width: 100%;
	height: 100%;
}
.coupon-box-scroll{
	width: 100%;
	height: 100%;
	padding: 20rpx 22rpx;
	box-sizing: border-box;
}
.coupon-box-list{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	border-radius: 10rpx;
	margin-bottom: 20rpx;
}
.coupon-box-list-top{
	width: 100%;
	height: 181rpx;
	border-bottom: 1rpx dashed #F1F1F1;
	display: flex;
	justify-content: space-between;
}
.coupon-box-list-top-left{
	width: 188rpx;
	height: 180rpx;
	padding-top: 35rpx;
	box-sizing: border-box;
}
.coupon-box-list-top-left-number{
	width: 100%;
	height: 80rpx;
	font-size: 50rpx;
	color: #95989F;
	font-weight: bold;
	text-align: center;
	border-right: 1rpx solid #F1F1F1;
	line-height: 80rpx;
}
.coupon-box-list-top-left-name{
	width: 100%;
	height: 48rpx;
	text-align: center;
	line-height: 48rpx;
	font-size: 22rpx;
	color: #32373B;
	border-right: 1rpx solid #F1F1F1;
}
.coupon-box-list-top-centent{
	flex: 1;
	height: 180rpx;
	padding-left: 30rpx;
	box-sizing: border-box;
}
.coupon-box-list-top-centent-name{
	width: 100%;
	height: 88rpx;
	line-height: 88rpx;
	font-weight: bold;
	color: #95989F;
	margin-bottom: 28rpx;
}
.coupon-box-list-top-centent-time{
	width: 100%;
	height: 48rpx;
	font-size: 22rpx;
	line-height: 48rpx;
	color: #42474A;
}
.coupon-box-list-top-centent-name text:nth-child(1){
	margin-right: 15rpx;
}
.coupon-box-list-top-right{
	width: 160rpx;
	height: 180rpx;
	padding-top: 110rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
}

.coupon-box-list-bottom{
	width: 100%;
	height: auto;
	padding: 22rpx 0;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.coupon-box-list-bottom-left{
	flex: 1;
	height: auto;
	line-height: 30rpx;
	font-size: 22rpx;
	color: #868686;
	padding-left: 25rpx;
	box-sizing: border-box;
}
.coupon-box-list-bottom-right{
	width: 66rpx;
	height: 30rpx;
	text-align: center;
	line-height: 30rpx;
}
.coupon-box-list-bottom-right text{
	font-size: 30rpx;
}

.coupon-box-list-bottom-left-active text{
	display: inline-block;
	width: 100%;
}
</style>
