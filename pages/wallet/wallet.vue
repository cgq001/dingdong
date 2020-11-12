<template>
	<view class="wallet">
		<!-- 明细 -->
		<view class="wallet-head">
			<view class="wallet-head-title">明细</view>
			<view class="wallet-head-number">
				¥ 1000.00
			</view>
		</view>
		<!-- 充值金额 -->
		<view class="wallet-money">
			<view class="wallet-money-name">
				账户充值
			</view>
			<view class="wallet-money-box">
				<view class="wallet-money-box-list list-bg">
					100元
				</view>
				<view class="wallet-money-box-list list-bg">
					200元
				</view>
				<view class="wallet-money-box-list list-bg">
					500元
				</view>
				<view class="wallet-money-box-list list-bg">
					1000元
				</view>
				<view class="wallet-money-box-list list-bg">
					2000元
				</view>
				<view class="wallet-money-box-list list-bg">
					5000元
				</view>
			</view>
		</view>
		<!-- 充值按钮 -->
		<view class="wallet-up">
			立即充值
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
			
		}
	}
</script>

<style scoped>
.wallet{
	width: 100%;
	height: 100%;
}
/* 明细 */
.wallet-head{
	width: 100%;
	height: 310rpx;
	background: #52B862;
	padding-top: 40rpx;
	box-sizing: border-box;
}
.wallet-head-title{
	width: 100%;
	height: 40rpx;
	padding-right: 50rpx;
	font-size: 24rpx;
	line-height: 40rpx;
	color: #FFFFFE;
	text-align: right;
}
.wallet-head-number{
	width: 100%;
	height: 106rpx;
	text-align: center;
	line-height: 106rpx;
	font-size: 60rpx;
	font-weight: bold;
	text-align: center;
	color: #FFFFFE;
}
/* 充值金额 */
.wallet-money{
	width: 700rpx;
	margin-left: 25rpx;
	margin-top: -70rpx;
	background: #FFFFFF;
	border: 1rpx solid #FFFFFE;
	box-shadow: 0 0 2rpx 2rpx #F4F6F5;
	border-radius: 10rpx;
	padding: 20rpx;
	box-sizing: border-box;
	margin-bottom: 50rpx;
}
.wallet-money-name{
	width: 100%;
	height: 116rpx;
	line-height: 116rpx;
	font-size: 28rpx;
	color: #313131;
	margin-bottom: 20rpx;
}
.wallet-money-box{
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.wallet-money-box-list{
	width: 280rpx;
	height: 130rpx;
	color: #8A8A8A;
	line-height: 130rpx;
	text-align: center;
	font-size: 32rpx;
	border-radius: 10rpx;
	margin-bottom: 20rpx;
}
.list-bg{
	box-shadow: 0 0 2rpx 2rpx #EAEAEA;
}
.wallet-up{
	width: 700rpx;
	margin-left: 25rpx;
	border-radius: 40rpx;
	height: 80rpx;
	background: #3FB35E;
	line-height: 80rpx;
	color: #FFFFFF;
	font-size: 22rpx;
	text-align: center;
}
</style>
