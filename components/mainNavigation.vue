<template>
	<view class="mainNavigation">
		<!-- 导购条 -->
	 <scroll-view 
		scroll-x="true"
		class="mainNavigation-scroll"
		>
		<view class="mainNavigation-nav">
			<view class="mainNavigation-nav-list">
				<view class="mainNavigation-nav-list-name">
					特价促销
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					实惠必达
				</view>
			</view>
			<view class="mainNavigation-nav-list mainNavigation-nav-list-active-bottom">
				<view class="mainNavigation-nav-list-name">
					今日上新
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					买点不一样
				</view>
			</view>
			<view class="mainNavigation-nav-list">
				<view class="mainNavigation-nav-list-name mainNavigation-nav-list-active">
					上班带餐
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					轻奢快手菜
				</view>
			</view>
			<view class="mainNavigation-nav-list">
				<view class="mainNavigation-nav-list-name">
					实时新鲜
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					忍不住就吃
				</view>
			</view>
			<view class="mainNavigation-nav-list">
				<view class="mainNavigation-nav-list-name">
					实时新鲜
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					忍不住就吃
				</view>
			</view>
			<view class="mainNavigation-nav-list">
				<view class="mainNavigation-nav-list-name">
					实时新鲜
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					忍不住就吃 
				</view>
			</view>
			<view class="mainNavigation-nav-list">
				<view class="mainNavigation-nav-list-name">
					实时新鲜
				</view>
				<view class="mainNavigation-nav-list-title" :style="mainNavigationOff ? 'height: 0; opacity: 0;' : 'height: 36rpx; opacity: 1;' ">
					忍不住就吃
				</view>
			</view>
		</view>
	</scroll-view>
	
	</view>
</template>

<script>
	export default {
		props:['mainNavigationOff'],
		data() {
			return {
				
			};
		},
	}
</script>

<style scoped>
.mainNavigation{
	width: 100%;
	height: auto;
}
.mainNavigation-scroll{
	width: 100%;
	height: auto;
	padding: 0 23rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.mainNavigation-nav{
	background: #FFFFFF;
	padding: 23rpx 0rpx 0;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	white-space:nowrap;
}
.mainNavigation-nav-list{
	padding: 0 27rpx 23rpx;
	box-sizing: border-box;
	display: inline-block;
}
.mainNavigation-nav-list-name{
	width: 100%;
	height: 52rpx;
	text-align: center;
	line-height: 52rpx;
	color: #272727;
	font-weight: 600;
	font-size: 28rpx;
}
.mainNavigation-nav-list-title-active{
	height: 36rpx!important;
	opacity: 1!important;
}
.mainNavigation-nav-list-title{
	width: 100%;
	height: 36rpx;
	opacity: 1;
	text-align: center;
	line-height: 40rpx;
	color: #A7A7A7;
	font-weight: 600;
	font-size: 20rpx;
	/* background: #18B566; */
	border-radius: 25rpx;
	padding: 0 10rpx;
	transition: all 0.2s;
}
.mainNavigation-nav-list-active{
	color: #37CD83!important;
}
.mainNavigation-nav-list-title-active-two{
	background: #37CD83;
	color: #FFFFFF;
}
.mainNavigation-nav-list-active-bottom{
	border-bottom: 5rpx solid #37CD83;
	box-sizing: border-box;
}

</style>
