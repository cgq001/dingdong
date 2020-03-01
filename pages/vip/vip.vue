<template>
	<view class="vip">
		<!-- 标题 -->
		<view class="vip-head">
			<view class="vip-head-box">
				开通绿卡会员平均可省<text>806</text>元/年
			</view>
		</view>
		<!-- 特权 -->
		<view class="vip-privilege">
			<view class="vip-privilege-name">绿卡特权</view>
			<view class="vip-privilege-box">
				<view class="vip-privilege-box-list">
					<view class="vip-privilege-box-list-img">
						<image src="../../static/imgs/vip/youhuiquan.png"></image>
					</view>
					<view class="vip-privilege-box-list-name">专享券</view>
					<view class="vip-privilege-box-list-title">天天可领</view>
				</view>
				<view class="vip-privilege-box-list">
					<view class="vip-privilege-box-list-img">
						<image src="../../static/imgs/vip/biaoqian.png"></image>
					</view>
					<view class="vip-privilege-box-list-name">专享特价</view>
					<view class="vip-privilege-box-list-title">每周一更新</view>
				</view>
				<view class="vip-privilege-box-list">
					<view class="vip-privilege-box-list-img">
						<image src="../../static/imgs/vip/ico.png"></image>
					</view>
					<view class="vip-privilege-box-list-name">两倍积分</view>
					<view class="vip-privilege-box-list-title">积分可提现</view>
				</view>
				<view class="vip-privilege-box-list">
					<view class="vip-privilege-box-list-img">
						<image src="../../static/imgs/vip/gengduomore13.png"></image>
					</view>
					<view class="vip-privilege-box-list-name">更多特权</view>
					<view class="vip-privilege-box-list-title">敬请期待</view>
				</view>
			</view>
			<view class="vip-privilege-btn">
				<view class="vip-privilege-btn-centent">
					5折开通绿卡
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

<style>
.vip-head{
	width: 100%;
	height: 220rpx;
	background: #1D2434;
	padding: 46rpx 30rpx 0 30rpx;
}
.vip-head-box{
	width: 100%;
	height: 100%;
	border-top: 4rpx solid #D3DC8E;
	border-left: 4rpx solid #D3DC8E;
	border-right: 4rpx solid #D3DC8E;
	border-radius: 20rpx 20rpx 0rpx 0;
	background: #33E97B;
	text-align: center;
	line-height: 176rpx;
	font-size: 30rpx;
}
.vip-head-box text{
	font-size: 36rpx;
}
/* 特权 */
.vip-privilege{
	width: 100%;
	height: auto;
	padding: 32rpx 30rpx 38rpx 30rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.vip-privilege-name{
	width: 100%;
	height: 52rpx;
	line-height: 52rpx;
	font-size: 34rpx;
	color: #383940;
	font-weight: bold;
	margin-bottom: 27rpx;
}
.vip-privilege-box{
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 72rpx;
}
.vip-privilege-box-list{
	width: 120rpx;
	height: auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.vip-privilege-box-list-img{
	width: 78rpx;
	height: 78rpx;
	border-radius: 50%;
	border: 1px solid #1E1E1E;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10rpx;
}
.vip-privilege-box-list-img image{
	width: 40rpx;
	height: 40rpx;
}
.vip-privilege-box-list-name{
	width: 100%;
	height: 36rpx;
	line-height: 36rpx;
	font-size: 24rpx;
	color: #2C2C2C;
	text-align: center;
}
.vip-privilege-box-list-title{
	width: 100%;
	height: 30rpx;
	line-height: 30rpx;
	font-size: 20rpx;
	color: #8B8B8B;
	text-align: center;
}
.vip-privilege-btn{
	width: 100%;
	height: 92rpx;
	display: flex;
	justify-content: center;
}
.vip-privilege-btn-centent{
	width: 500rpx;
	height: 92rpx;
	background: #364153;
	color: #34B364;
	text-align: center;
	line-height: 92rpx;
	font-size: 30rpx;
	border-radius: 49rpx;
}
</style>
