<template>
	<view class="integral">
		<!-- 总积分 -->
		<view class="integral-head">
			<view class="integral-head-top">
				<view class="integral-head-top-left">
					可用积分
				</view>
				<view class="integral-head-top-icon" @click="integralShow = true">
					<text class="lg text-gray cuIcon-questionfill"></text>
				</view>
			</view>
			
			<view class="integral-head-bottom">
				0
			</view>
		</view>
		<!-- 去购物 -->
		<view class="integral-bottom">
			<view class="integral-bottom-left">
				<text class="lg text-gray cuIcon-goodsnewfill"></text>
			</view>
			<view class="integral-head-centent">
				<view class="integral-head-centent-top">
					购物赚积分
				</view>
				<view class="integral-head-centent-bottom">
					100积分=1元现金
				</view>
			</view>
			<view class="integral-bottom-right">
				<text>去购物</text>
				<text class="lg text-gray cuIcon-right"></text>
			</view>
		</view>
		<!-- 弹出层  -->
		<view class="cu-modal" :class="integralShow ? 'show' : '' ">
			<view class="cu-dialog">
				<view class="integral-modal">
					<view class="integral-modal-name">积分获取与使用规则</view>
					<view class="integral-modal-list-title">
						积分获取
					</view>
					<view class="integral-modal-list-text" style="margin-bottom: 50rpx;">
						购买本APP商品,即可参与购物返积分,支付金额按照1元获得1积分(会员为双倍积分)来计算(如遇退货或部分退货清空,则扣除退货部分获取的积分).积分将在订单完成后2小时内到账.
					</view>
					<view class="integral-modal-list-title">
						积分使用
					</view>
					<view class="integral-modal-list-text" style="margin-bottom: 40rpx;">
						获取的积分在本APP内购物时,可按照100积分抵扣1元的比例抵扣购物款(系统默认使用),每年1月1日滚动清零前一年1月1日前的积分.
					</view>
					<view class="integral-modal-know" @click="integralShow = false">知道了</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				integralShow: false
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.integral{
	width: 100%;
	min-height: 100%;
	padding: 20rpx 15rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
/* 积分 */
.integral-head{
	width: 100%;
	height: 210rpx;
	border-radius: 10rpx;
	background-image: linear-gradient(to right bottom, #FDC01A, #FFCA2E, #FFDB60);
	padding: 25rpx 40rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
.integral-head-top{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 30rpx;
}
.integral-head-top-left{
	flex: 1;
	height: 46rpx;
	font-size: 26rpx;
	color: #5C2F03;
}
.integral-head-top-icon{
	width: 46rpx;
	height: 46rpx;
	text-align: right;
	
}
.integral-head-top-icon text{
	font-size: 36rpx;
	color: #8A5531;
}
.integral-head-bottom{
	width: 100%;
	height: 90rpx;
	line-height: 90rpx;
	color: #513321;
	font-weight: bold;
	font-size: 60rpx;
}

/* 去购物 */
.integral-bottom{
	width: 100%;
	height: 120rpx;
	border-radius: 10rpx;
	background: #FEF8DE;
	padding: 26rpx 40rpx 0 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.integral-bottom-left{
	width: 70rpx;
	height: 70rpx;
	border-radius: 35rpx;
	background-image: linear-gradient(to bottom, #E8BE6E, #DCA43E);
	text-align: center;
	line-height: 70rpx;
}
.integral-bottom-left text{
	/* font-weight: bold; */
	font-size: 40rpx;
	color: #FFF5DC;
}
.integral-bottom-right{
	width: 175rpx;
	height: 70rpx;
	border-radius: 35rpx;
	background: #8B562C;
	text-align: center;
	line-height: 70rpx;
	font-size: 24rpx;
	color: #FFFFFE;
}
.integral-bottom-right text:nth-child(2){
	margin-left: 10rpx;
	color: #FFFFFE;
}
.integral-head-centent{
	flex: 1;
	height: auto;
	padding-left: 22rpx;
	box-sizing: border-box;
}
.integral-head-centent-top{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	color: #634D23;
	font-size: 32rpx;
}
.integral-head-centent-bottom{
	width: 100%;
	height: 30rpx;
	line-height: 30rpx;
	color: #634D23;
	font-size: 22rpx;
}
/* 弹出层 */
.integral-modal{
	width: 100%;
	height: auto;
	padding: 20rpx 46rpx 0 46rpx;
	box-sizing: border-box;
	background: #FFFFFEs;
}
.integral-modal-name{
	width: 100%;
	height: 76rpx;
	text-align: center;
	line-height: 76rpx;
	color: #272727;
	font-size: 35rpx;
	margin-bottom: 15rpx;
}
.integral-modal-list-title{
	width: 100%;
	height: 45rpx;
	color: #D63F30;
	font-size: 28rpx;
	line-height: 45rpx;
	text-align: left;
	margin-bottom: 5rpx;
}
.integral-modal-list-text{
	width: 100%;
	line-height: 40rpx;
	font-size: 26rpx;
	color: #000000;
	text-align: left;
}
.integral-modal-know{
	width: 100%;
	height: 86rpx;
	text-align: center;
	line-height: 86rpx;
	color: #CA282E;
	font-size: 32rpx;
	border-top: 1rpx solid #F1F1F1;
}
</style>
