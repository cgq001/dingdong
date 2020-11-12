<template>
	<view class="searchs">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<!-- 搜索 -->
		<view class="searchs-titles">
			<view class="searchs-titles-left" @click="goBack">
				<text class="lg text-gray cuIcon-back_android"></text>
			</view>
			<view class="searchs-titles-centent">
				<input type="text" class="searchs-titles-centent-input" placeholder="香蕉" :focus='true' />
				<text class="lg text-gray cuIcon-searchlist searchs-titles-centent-icon"></text>
			</view>
			<view class="searchs-titles-right">
				搜索
			</view>
		</view>
		<!-- 历史搜索 -->
		<view class="searchs-history">
			<view class="searchs-history-name">
				<view class="searchs-history-name-left">
					历史搜索
				</view>
				<view class="searchs-history-name-right">
					<text class="lg text-gray cuIcon-delete"></text>
				</view>
			</view>
			<view class="searchs-history-box">
				<view class="searchs-history-list">
					泡面
				</view>
				<view class="searchs-history-list">
					方便面
				</view>
				<view class="searchs-history-list">
					雪碧
				</view>
				<view class="searchs-history-list">
					9.9包邮
				</view>
				<view class="searchs-history-list">
					泡面
				</view>
				<view class="searchs-history-list">
					方便面
				</view>
				<view class="searchs-history-list">
					雪碧
				</view>
				<view class="searchs-history-list">
					9.9包邮
				</view><view class="searchs-history-list">
					泡面
				</view>
				<view class="searchs-history-list">
					方便面
				</view>
				<view class="searchs-history-list">
					雪碧
				</view>
				<view class="searchs-history-list">
					9.9包邮
				</view>
				
			</view>
		</view>
		<!-- 历史搜索 -->
		<view class="searchs-history">
			<view class="searchs-history-name">
				<view class="searchs-history-name-left">
					搜索发现
				</view>
				<view class="searchs-history-name-right">
					<text class="lg text-gray cuIcon-unfold"></text>
				</view>
			</view>
			<view class="searchs-history-box">
				<view class="searchs-history-list">
					泡面
				</view>
				<view class="searchs-history-list">
					方便面
				</view>
				<view class="searchs-history-list">
					雪碧
				</view>
				<view class="searchs-history-list">
					9.9包邮
				</view>
				<view class="searchs-history-list">
					泡面
				</view>
				<view class="searchs-history-list">
					方便面
				</view>
				<view class="searchs-history-list">
					雪碧
				</view>
				<view class="searchs-history-list">
					9.9包邮
				</view><view class="searchs-history-list">
					泡面
				</view>
				<view class="searchs-history-list">
					方便面
				</view>
				<view class="searchs-history-list">
					雪碧
				</view>
				<view class="searchs-history-list">
					9.9包邮
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
			goBack(){
				
			}
		}
	}
</script>

<style scoped>
.searchs{
	width: 100%;
	height: 100%;
	background: #FFFFFF;
}
/* 搜索 */
.searchs-titles{
	width: 100%;
	height: 76rpx;
	display: flex;
	justify-content: space-between;
	padding: 5rpx 0;
	box-sizing: border-box;
	margin-bottom: 30rpx;
}
.searchs-titles-left{
	width: 90rpx;
	height: 66rpx;
	font-size: 44rpx;
	color: #727272;
	text-align: center;
	line-height: 66rpx;
}
.searchs-titles-left text{
	color: #727272;
}
.searchs-titles-centent{
	flex: 1;
	height: 66rpx;
	position: relative;
}
.searchs-titles-centent-input{
	width: 100%;
	height: 100%;
	background: #F2F2F2;
	border-radius: 33rpx;
	padding-left: 60rpx;
	box-sizing: border-box;
	font-size: 28rpx;
}
.searchs-titles-centent-icon{
	position: absolute;
	width: 60rpx;
	height: 66rpx;
	text-align: right;
	left: 0;
	top: 0;
	display: inline-block;
	line-height: 66rpx;
	font-size: 36rpx;
}
.searchs-titles-right{
	width: 100rpx;
	height: 66rpx;
	font-size: 30rpx;
	text-align: center;
	line-height: 66rpx;
	color: #38393D;
}
/* 历史搜索 */
.searchs-history{
	width: 100%;
	height: auto;
	margin-bottom: 50rpx;
}
.searchs-history-name{
	width: 100%;
	height: 58rpx;
	line-height: 58rpx;
	display: flex;
	justify-content: space-between;
}
.searchs-history-name-left{
	flex: 1;
	height: 58rpx;
	font-size: #0A0A0A;
	font-size: 28rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	font-weight: bold;
}
.searchs-history-name-right{
	width: 88rpx;
	height: 58rpx;
	text-align: center;
	line-height: 58rpx;
	font-size: 38rpx;
}
.searchs-history-box{
	width: 100%;
	height: auto;
	padding: 10rpx 30rpx;
	box-sizing: border-box;
}
.searchs-history-list{
	height: 60rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	display: inline-block;
	background: #F5F5F5;
	font-size: 24rpx;
	color: #525252;
	line-height: 60rpx;
	border-radius: 5rpx;
	margin-left: 15rpx;
	margin-bottom: 20rpx;
}
</style>
