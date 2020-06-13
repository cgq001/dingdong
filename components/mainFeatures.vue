<template>
	<!-- 主页 特色专区 -->
	<view class="mainFeatures-box">
		<view class="mainFeatures-box-title">特色专区</view>
		<view class="mainFeatures-box-main">
			<view class="mainFeatures-box-main-list one-list">
				<view class="mainFeatures-box-main-list-title one-list-title">新品尝鲜</view>
				<view class="mainFeatures-box-main-list-name">又是一年槐花香~</view>
				<view class="mainFeatures-box-main-list-image">
					<view class="mainFeatures-box-main-list-image-li">
						<image src="../static/image/characteristic/00-07-44.png"></image>
					</view>
					<view class="mainFeatures-box-main-list-image-li">
						<image src="../static/image/characteristic/00-07-56.png"></image>
					</view>
				</view>
			</view>
			<view class="mainFeatures-box-main-list two-list">
				<view class="mainFeatures-box-main-list-title two-list-title">4月爆款</view>
				<view class="mainFeatures-box-main-list-name">鲤鱼9.99元 鲜活到家</view>
				<view class="mainFeatures-box-main-list-image">
					<view class="mainFeatures-box-main-list-image-li">
						<image src="../static/image/characteristic/00-07-48.png"></image>
					</view>
					<view class="mainFeatures-box-main-list-image-li">
						<image src="../static/image/characteristic/00-07-53.png"></image>
					</view>
				</view>
			</view>
			<view class="mainFeatures-box-main-list three-list">
				<view class="mainFeatures-box-main-list-title three-list-title">平价市场</view>
				<view class="mainFeatures-box-main-list-name">普罗旺斯番茄 第二份半价</view>
				<view class="mainFeatures-box-main-list-image">
					<view class="mainFeatures-box-main-list-image-li">
						<image src="../static/image/characteristic/00-07-57.jpg"></image>
					</view>
					<view class="mainFeatures-box-main-list-image-li">
						<image src="../static/image/characteristic/00-07-58.jpg"></image>
					</view>
				</view>
			</view>
			<view class="mainFeatures-box-main-list four-list-box">
				<view class="mainFeatures-box-main-list-li four-list">
					<view class="mainFeatures-box-main-list-li-list four-list-left">
						<view class="mainFeatures-box-main-list-title">火锅来了</view>
						<view class="mainFeatures-box-main-list-name">放肆火锅</view>
						<view class="mainFeatures-box-main-list-li-list-img">
							<image src="../static/image/characteristic/00-07-59.jpg"></image>
						</view>
					</view>
					<view class="mainFeatures-box-main-list-li-list">
						<view class="mainFeatures-box-main-list-title">绿卡专项</view>
						<view class="mainFeatures-box-main-list-name">一省再生</view>
						<view class="mainFeatures-box-main-list-li-list-img">
							<image src="../static/image/characteristic/00-07-60.jpg"></image>
						</view>
					</view>
				</view>
			</view>
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

<style>
.mainFeatures-box{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	padding: 15rpx 20rpx 15rpx;
	box-sizing: border-box;
}
.mainFeatures-box-title{
	width: 100%;
	height: 76rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	font-weight: bold;
	font-size: 30rpx;
	color: #343434;
	line-height: 76rpx;
}
.mainFeatures-box-main{
	width: 100%;
	border: 1px solid #F2F2F2;
	border-radius: 12rpx;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.mainFeatures-box-main-list{
	height: 260rpx;
	width: 354rpx;
	box-sizing: border-box;
	padding-top: 18rpx;
	box-sizing: border-box;
}
.one-list{
	border-right: 1px solid #F2F2F2;
	border-bottom: 1px solid #F2F2F2;
}
.two-list{
	border-bottom: 1px solid #F2F2F2;
}
.three-list{
	border-right: 1px solid #F2F2F2;
}
.four-list{
	display: flex;
	
}
.four-list-box{
	padding: 0;
}
.mainFeatures-box-main-list-title{
	width: 100%;
	height: 42rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	font-size: 26rpx;
	font-weight: 600;
	line-height: 42rpx;
}
.one-list-title{
	background: linear-gradient(to right, #FD2508, #FDD508);
	-webkit-background-clip: text;
	color: transparent;
}
.two-list-title{
	background: linear-gradient(to right, #E00931, #FD2B76);
	-webkit-background-clip: text;
	color: transparent;
}
.three-list-title{
	background: linear-gradient(to right, #1F684A, #4D973B);
	-webkit-background-clip: text;
	color: transparent;
}
.mainFeatures-box-main-list-name{
	width: 100%;
	height: 36rpx;
	line-height: 36rpx;
	color: #9B9B9B;
	font-size: 20rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	margin-bottom: 14rpx;
}
.mainFeatures-box-main-list-image{
	width: 100%;
	height: 122rpx;
	display: flex;
	justify-content: space-around;
}
.mainFeatures-box-main-list-image-li{
	width: 122rpx;
	height: 122rpx;
}
.mainFeatures-box-main-list-image-li image{
	width: 122rpx;
	height: 122rpx;
}
.mainFeatures-box-main-list-li-list{
	width: 176rpx;
	height: 258rpx;
	box-sizing: border-box;
	padding-top: 14rpx;
}
.mainFeatures-box-main-list-li-list-img{
	width: 176rpx;
	height: 122rpx;
	display: flex;
	justify-content: center;
}
.mainFeatures-box-main-list-li-list-img image{
	width: 122rpx;
	height: 122rpx;
}
.four-list-left{
	border-right: 1px solid #F2F2F2;
}
</style>
