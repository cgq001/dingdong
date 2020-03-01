<template>
	<view class="details">
		<!-- 订单状态 -->
		<view class="details-state">
			<view class="details-state-title">{{stateMsg.type}}</view>
			<view class="details-state-msg">{{stateMsg.msg}}</view>
		</view>
		<!-- 地址信息 -->
		<view class="details-address">
			<view class="details-address-time">
				<view class="details-address-time-left">
					预约时间
				</view>
				<view class="details-address-time-right">
					{{orderList.order_time}}
				</view>
			</view>
			<view class="details-address-box">
				<view class="details-address-box-left">
					收货信息
				</view>
				<view class="details-address-box-right">
					<view>{{orderList.order_address.name}}  {{orderList.order_address.tel}}</view>
					<view>{{orderList.order_address.address}}</view>
				</view>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="details-order">
			<view class="details-order-list" v-for="(item,index) in orderList.order_order" :key='index'>
				<view class="details-order-list-left">
					<image :src="item.url"></image>
				</view>
				<view class="details-order-list-centent">
					<text>{{item.name}}</text>
					<text>单价: ¥{{item.price}} 数量: {{item.number}}</text>
				</view>
				<view class="details-order-list-right">
					¥ {{(item.price * item.number).toFixed(2)}}
				</view>
			</view>
		</view>
		<!-- 订单金额 -->
		<view class="details-price">
			<view class="details-price-list">
				<text>商品金额</text>
				<view>¥ {{orderList.order_price}}</view>
			</view>
			<view class="details-price-list">
				<text>配送费</text>
				<view>¥ {{orderList.order_delivery}}</view>
			</view>
			<view class="details-price-list">
				<text>实付金额</text>
				<view>¥ {{(parseFloat(orderList.order_price) + parseFloat(orderList.order_delivery)).toFixed(2)}}</view>
			</view>
		</view>
		<!-- 其他信息 -->
		<view class="details-info">
			<view class="details-info-list">
				<text>订单编号</text>
				<text>{{orderList.order_code}}</text>
			</view>
			<view class="details-info-list">
				<text>下单时间</text>
				<text>{{orderList.order_createtime}}</text>
			</view>
			<view class="details-info-list">
				<text>备注</text>
				<text>{{orderList.order_message}}</text>
			</view>
			<view class="details-info-list">
				<text>支付方式</text>
				<text>{{orderList.order_payment}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:{},
				state:[
					{
						type: "已取消",
						msg: "您已取消了订单"
					},
					{
						type: "待支付",
						msg: "现在去支付订单后,快递小哥将马上发货"
					},
					{
						type: "待发货",
						msg: "您的订单正在配货中"
					},
					{
						type: "待收货",
						msg: "快递小哥正在快马加鞭的给您派送"
					},
					{
						type: "待评价",
						msg: "您的订单以确认收货,为快递小哥点个赞吧"
					}
				],
				stateMsg:{}
			}
		},
		methods: {
			
		},
		onLoad(options) {
			if(options.id){
				this.http('nottoken/getOrderDetails','get',{
					id: options.id
				})
					.then(res=>{
						console.log(1)
						let orderList= res.data.data
						console.log(2)
						orderList.order_address = JSON.parse(orderList.order_address)
						console.log(3)
						orderList.order_order = JSON.parse(orderList.order_order)
			
						let indexs = orderList.order_states
						console.log(5)
						this.stateMsg = this.state[indexs]
						console.log(this.stateMsg)
						this.orderList = orderList
					})
					.catch(err=>{
						
					})
			}
		}
	}
</script>

<style>
.details-state{
	width: 100%;
	height: auto;
	padding: 40rpx 25rpx 20rpx;
	box-sizing: border-box;
	background: #FFFFFF;
	margin-bottom: 20rpx;
}
.details-state-title{
	width: 100%;
	height: 56rpx;
	text-align: center;
	line-height: 56rpx;
	color: #30B25F;
	font-size: 30rpx;
}
.details-state-msg{
	width: 100%;
	height: 54rpx;
	text-align: center;
	line-height: 54rpx;
	font-size: 26rpx;
	color: #373737;
	
}
/* 地址信息 */
.details-address{
	width: 100%;
	height: auto;
	padding: 33rpx 25rpx 24rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
	background: #FFFFFF;
	margin-bottom: 20rpx;
}
.details-address-time{
	width: 100%;
	height: 44rpx;
	line-height: 44rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10rpx;
}
.details-address-time-left{
	width: 120rpx;
	font-size: 26rpx;
	color: #606060;
}
.details-address-time-right{
	width: 550rpx;
	font-size: 26rpx;
	color: #282828;
	font-weight: bold;
}
.details-address-box{
	width: 100%;
	line-height: 36rpx;
	display: flex;
	justify-content: space-between;
}
.details-address-box-left{
	width: 120rpx;
	font-size: 26rpx;
	color: #606060;
}
.details-address-box-right{
	width: 550rpx;
	font-size: 26rpx;
	color: #282828;
	font-weight: bold;
}
/* 订单信息 */
.details-order{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	margin-bottom: 20rpx;
}
.details-order-list{
	width: 100%;
	height: 130rpx;
	border-bottom: 1px solid #F1F1F1;
	padding: 25rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
}
.details-order .details-order-list:nth-last-child{
	border-bottom-color: #FFFFFF;
}
.details-order-list-left{
	width: 88rpx;
	height: 80rpx;
}
.details-order-list-left image{
	width: 100%;
	height: 100%;
}
.details-order-list-centent{
	flex: 1;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.details-order-list-centent text{
	width: 100%;
	height: auto;
	display: block;
	color: #A6A6A6;
}
.details-order-list-centent text:nth-child(1){
	color: #2E2E2E;
	font-weight: bold;
}
.details-order-list-right{
	width: 100rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 28rpx;
	color: #A6A6A6;
}
/* 订单金额 */
.details-price{
	width: 100%;
	padding: 25rpx;
	box-sizing: border-box;
	background: #FFFFFF;
	margin-bottom: 20rpx;
}
.details-price-list{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	color: #404040;
	font-size: 24rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10rpx;
}
.details-price-list text:nth-child(2){
	color: #000000;
}
.details-price-list text:nth-child(1){
	color:  #404040;
}
/* 其他信息 */
.details-info{
	width: 100%;
	padding: 25rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.details-info-list{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	display: flex;
	justify-content: flex-start;
}
.details-info-list text{
	display: inline-block;
}
.details-info-list text:nth-child(1){
	width: 120rpx;
	color: #666666;
}
.details-info-list text:nth-child(2){
	flex: 1;
	color: #313131;
	padding-left: 20rpx;
	box-sizing: border-box;
}
</style>
