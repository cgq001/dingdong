<template>
	<!-- 首页 主导航组件 -->
	<view class="mainNavBox">
		<view class="mainNavBox-list" v-for="(item,index) in navList" :key='index'>
			<view class="mainNavBox-list-img">
				<image :src="item.url"></image>
			</view>
			<view class="mainNavBox-list-text">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList:[
					{
						name: '安心蔬菜',
						url: '../../static/image/nav/00-00-49.png'
					},
					{
						name: '肉禽蛋',
						url: '../../static/image/nav/00-00-43.png'
					},
					{
						name: '生鲜海鲜',
						url: '../../static/image/nav/00-00-40.png'
					},
					{
						name: '时令水果',
						url: '../../static/image/nav/00-00-37.png'
					},
					{
						name: '粮油调味',
						url: '../../static/image/nav/00-00-31.png'
					},
					{
						name: '乳品早点',
						url: '../../static/image/nav/00-00-34.png'
					},
					{
						name: '酒水饮料',
						url: '../../static/image/nav/00-00-08.png'
					},
					{
						name: '速冻食品',
						url: '../../static/image/nav/00-00-25.png'
					},
					{
						name: '生鲜饮食',
						url: '../../static/image/nav/00-00-28.png'
					},
					{
						name: '家具个护',
						url: '../../static/image/nav/00-00-22.png'
					}
				]
			};
		}
	}
</script>

<style>
.mainNavBox{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.mainNavBox-list{
	width: 140rpx;
	height: 168rpx;
	padding-top: 10rpx;
	box-sizing: border-box;
}
.mainNavBox-list-img{
	width: 100%;
	height: 108rpx;
	display: flex;
	justify-content: center;
}
.mainNavBox-list-img image{
	width: 108rpx;
	height: 108rpx;
}
.mainNavBox-list-text{
	width: 100%;
	height: 50rpx;
	padding-top: 12rpx;
	box-sizing: border-box;
	font-size: 22rpx;
	text-align: center;
	color: #030302;
	font-weight: 700;
}
</style>
