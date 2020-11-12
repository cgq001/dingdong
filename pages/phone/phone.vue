<template>
	<view class="nickname">
		<view class="nickname-message">
			 <input class="nickname-message-input" maxlength="15" placeholder="请输入新的手机号" />
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-gradual-green margin-tb-sm lg">下一步</button>
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
.nickname{
	width: 100%;
	height: 100%;
}
.nickname-message{
	width: 100%;
	height: 90rpx;
	background: #FFFFFF;
	padding: 0 24rpx;
	box-sizing: border-box;
}
.nickname-message-input{
	width: 100%;
	height: 90rpx;
	font-size: 26rpx;
	line-height: 90rpx;
}
.nickname-message-input:-ms-input-placeholder{
	font-size: 26rpx;
}
</style>
