<template>
	<view class="shoplist">
		<view class="shoplist-box">
			<view class="shoplist-box-title">
				<text>商品</text>
				<text>共{{order.length}}件</text>
			</view>
			<view class="shoplist-box-list-box">
				<view class="shoplist-box-list-box-list" v-for="(item,index) in order" :key='index'>
					<view class="shoplist-box-list-box-list-left">
						<image :src="item.url"></image>
					</view>
					<view class="shoplist-box-list-box-list-right">
						<view class="shoplist-box-list-box-list-right-top">
							<view class="shoplist-box-list-box-list-right-top-left">{{item.name}}</view>
							<view class="shoplist-box-list-box-list-right-top-right">￥{{(item.price * item.number).toFixed(2)}}</view>
						</view>
						<view class="shoplist-box-list-box-list-right-bottom">
							单价：￥{{item.price}} 数量：{{item.number}}
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
				
			}
		},
		methods: {
			
		},
		computed:{
			order:function(){
				console.log(this.$store.state.car.order)
				return this.$store.state.car.order
			}
		}
	}
</script>

<style>
.shoplist{
	width: 100%;
	min-height: 100vh;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.shoplist-box{
	background: #FFFFFF;
}
.shoplist-box-title{
	width: 100%;
	height: 70rpx;
	padding: 0 30rpx;
	line-height: 70rpx;
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx solid #EEEEEE;
	box-sizing: border-box;
}
.shoplist-box-title text{
	font-size: 24rpx;
	color: #101010;
}
.shoplist-box-list-box{
	width: 100%;
	padding-left: 26rpx;
	box-sizing: border-box;
}
.shoplist-box-list-box .shoplist-box-list-box-list:nth-last-child{
	border-bottom-color: transparent;
}
.shoplist-box-list-box-list{
	width: 100%;
	height: 150rpx;
	border-bottom: 1px solid #EEEEEE;
	padding-right: 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.shoplist-box-list-box-list-left{
	width: 100rpx;
	height: 150rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.shoplist-box-list-box-list-left image{
	width: 72rpx;
	height: 72rpx;
}
.shoplist-box-list-box-list-right{
	flex: 1;
	height: 150rpx;
	display: flex;
	justify-content: flex-start;
	flex-flow: wrap;
	align-items:center;
	padding: 10rpx 0;
}
.shoplist-box-list-box-list-right-top{
	width: 100%;
	height: 40rpx;
	display: flex;
	justify-content: space-between;
	font-size: 26rpx;
	line-height: 40rpx;
}
.shoplist-box-list-box-list-right-top-left{
	flex: 7;
	height: 40rpx;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
}
.shoplist-box-list-box-list-right-top-right{
	flex: 3;
	height: 40rpx;
	text-align: right;
}
.shoplist-box-list-box-list-right-bottom{
	width: 100%;
	height: 40rpx;
	color: #989898;
	font-size: 22rpx;
}
</style>
