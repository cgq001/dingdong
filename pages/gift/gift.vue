<template>
	<view class="gift">
		<view class="gift-input-box">
			<input class="gift-input" focus placeholder="请输入礼品卡号" />
		</view>
		<view class="gift-submit">
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
.gift{
	width: 100%;
	min-height: 100%;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.gift-input-box{
	width: 100%;
	height: 100rpx;
	background: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20rpx;
}
.gift-input{
	width: 100%;
	padding: 0 25rpx;
	height: 80rpx;
}
.gift-submit{
	width: 700rpx;
	height: 78rpx;
	background: #0BA6FD;
	text-align: center;
	line-height: 78rpx;
	color: #FFFFFF;
	margin-left: 25rpx;
	border-radius: 10rpx;
}
</style>
