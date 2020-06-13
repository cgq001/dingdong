<template>
	<view class="gender">
		<view class="gender-box">
			<view class="gender-box-list">
				<view class="gender-box-list-left">
					男
				</view>
				<view class="gender-box-list-right">
					<text class="lg text-gray cuIcon-check"></text>
				</view>
			</view>
			<view class="gender-box-list">
				<view class="gender-box-list-left">
					女
				</view>
				<view class="gender-box-list-right">
					
				</view>
			</view>
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
.gender{
	width: 100%;
	height: 100%;
}
.gender-box{
	width: 100%;
	padding-left: 24rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.gender-box-list{
	width: 100%;
	border-bottom: 1rpx solid #F3F3F3;
	display: flex;
	justify-content: space-between;
	height: 95rpx;
	line-height: 95rpx;
}
.gender-box-list:nth-last-child(1){
	border-bottom-color: #FFFFFF;
}
.gender-box-list-left{
	width: 280rpx;
	height: 100%;
	font-size: 30rpx;
	color: #000000;
}
.gender-box-list-right{
	flex: 1;
	height: 100%;
	padding-right: 30rpx;
	height: 95rpx;
	display: flex;
	justify-content: flex-end;
	
	color: #39D134;
}
.gender-box-list-right text{
	color: #39D134;
	font-size: 30rpx;
	font-weight: bolder;
}
</style>
