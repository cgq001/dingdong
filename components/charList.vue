<template>
	<view class="charList">
		<view class="charList-left">
			<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
		</view>
		<view class="charList-image">
			<image src="../static/image/characteristic/00-07-56.png"></image>
		</view>
		<view class="charList-right">
			<view class="charList-right-name">
				<text class="charList-right-name-lable">秒杀</text>
				<text class="charList-right-name-text">商品名称</text>
			</view>
			<view class="charList-right-title">
				250ml*2箱
			</view>
			<view class="charList-right-prick">
				<view class="charList-right-prick-left">
					<text class="charList-right-prick-left-text1">¥</text>
					<text class="charList-right-prick-left-text2">59.8</text>
					<text class="charList-right-prick-left-text3">/箱</text>
					<text class="charList-right-prick-left-text4">¥ 59.8</text>
				</view>
				<view class="charList-right-prick-right">
					<u-number-box :value="0" @change="valChange" :min="1" :max="5"></u-number-box>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: 'A',
			};
		},
		methods:{
			valChange(e){
				
			}
		}
	}
</script>

<style scoped>
.charList{
	width: 100%;
	height: 212rpx;
	background: #FFFFFF;
	border-radius: 15rpx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20rpx;
}
.charList-left{
	width: 85rpx;
	height: 212rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.charList-image{
	width: 134rpx;
	height: 212rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.charList-image image{
	width: 134rpx;
	height: 134rpx;
}
.charList-right{
	flex: 1;
	height: 212rpx;
	box-sizing: border-box;
	padding: 25rpx 20rpx 0;
}
.charList-right-name{
	width: 100%;
	height: 50rpx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.charList-right-name-lable{
	border-radius: 10rpx;
	border: 1px solid #E1C9D2;
	color: #F8224A;
	font-size: 22rpx;
	padding: 5rpx 10rpx;
	margin-right: 10rpx;
}
.charList-right-name-text{
	color: #1B2127;
	font-weight: bold;
	font-size: 30rpx;
}
.charList-right-title{
	width: 100%;
	height: 43rpx;
	color: #989898;
	font-size: 22rpx;
	line-height: 43rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.charList-right-prick{
	width: 100%;
	height: 84rpx;
	/* display: flex;
	justify-content: space-between;
	align-items: center; */
	position: relative;
}
.charList-right-prick-left{
	width: 100%;
	height: 84rpx;
	line-height: 84rpx;
}
.charList-right-prick-left-text1{
	color: #FC002D;
	font-size: 22rpx;
	margin-right: 5rpx;
}
.charList-right-prick-left-text2{
	color: #FC002D;
	font-size: 36rpx;
	font-weight: bold;
	margin-right: 5rpx;
}
.charList-right-prick-left-text3{
	color: #888C8E;
	font-size: 28rpx;
	margin-right: 10rpx;
}
.charList-right-prick-left-text4{
	color: #888C8E;
	font-size: 24rpx;
	text-decoration: line-through;
}
.charList-right-prick-right{
	position: absolute;
	height: 100%;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
</style>
