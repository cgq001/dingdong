<template>
	<view class="submitorder">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="submitorder-title">
			<text class="lg text-gray cuIcon-back"></text>
			<text>提交订单</text>
		</view>
		<view class="submitorder-box">
			<scroll-view scroll-y="true" class="submitorder-box-scroll">
				<!-- 地址栏 -->
			    <view class="submitorder-box-address">
					<!-- 添加地址 -->
					<view class="submitorder-box-address-add" @click="goSetAddress">
						<text>新建收货地址</text>
						<text class="lg text-gray cuIcon-right"></text>
					</view>
					<!-- 收货地址 -->
					<view class="submitorder-box-address-message">
						<!-- 姓名 -->
						<view class="submitorder-box-address-message-name">
							<view class="submitorder-box-address-message-name-left">
								用户名
							</view>
							<view class="submitorder-box-address-message-name-right" @click="goAdderss">
								<text>切换</text>
								<text class="lg text-gray cuIcon-right"></text>
							</view>
						</view>
						<!-- 地址 -->
						<view class="submitorder-box-address-message-address">
							河南省洛阳市涧西区壹号城邦11栋2115
						</view>
						<!-- 手机号 -->
						<view class="submitorder-box-address-message-phone">
							<text>手机号:</text>
							<text>15639762230</text>
						</view>
					</view>
				</view>
				<!-- 订单栏 -->
				<view class="submitorder-box-order">
					<view class="submitorder-box-order-name">
						订单详情
					</view>
					<view class="submitorder-box-order-goods">
						<!-- <submitGoodsList class='submitorder-box-order-goods-list' />
						<submitGoodsList class='submitorder-box-order-goods-list' />
						<submitGoodsList class='submitorder-box-order-goods-list' />
						<submitGoodsList class='submitorder-box-order-goods-list' />
						<submitGoodsList class='submitorder-box-order-goods-list' />
						<submitGoodsList class='submitorder-box-order-goods-list' /> -->
						<view class="submitorder-box-order-goods-box">
							
							<scroll-view class="submitorder-box-order-goods-box-scroll" scroll-x="true">
								<view class="submitorder-box-order-goods-box-scroll-box">
									<view class="submitorder-box-order-goods-box-scroll-list">
										<image src="../../static/image/characteristic/00-07-53.png"></image>
									</view>
									<view class="submitorder-box-order-goods-box-scroll-list">
										<image src="../../static/image/characteristic/00-07-53.png"></image>
									</view>
									<view class="submitorder-box-order-goods-box-scroll-list">
										<image src="../../static/image/characteristic/00-07-53.png"></image>
									</view>
									<view class="submitorder-box-order-goods-box-scroll-list">
										<image src="../../static/image/characteristic/00-07-53.png"></image>
									</view>
									<view class="submitorder-box-order-goods-box-scroll-list">
										<image src="../../static/image/characteristic/00-07-53.png"></image>
									</view>
									<view class="submitorder-box-order-goods-box-scroll-list">
										<image src="../../static/image/characteristic/00-07-53.png"></image>
									</view>
								</view>
							</scroll-view>
						</view>
						<view class="submitorder-box-order-goods-number">
							<text class="submitorder-box-order-goods-number-text">共2件</text>
							<text class="lg text-gray cuIcon-right"></text>
						</view>
					</view>
				</view>
				<!-- 订单备注 -->
				<view class="submitorder-box-remarks">
					<view class="submitorder-box-remarks-name">订单备注</view>
					<textarea @blur="remarksBlur"  :maxlength='150' :adjust-position='false' class="submitorder-box-remarks-textarea" placeholder='可以告诉我们你的特殊需要呀' />
				</view>
				<!-- 优惠券 -->
				<view class="submitorder-box-coupon" @click="couponShows">
					<view class="submitorder-box-coupon-left">
						<text class="submitorder-box-coupon-left-name">优惠券</text>
						<text class="submitorder-box-coupon-left-lable">已选择最佳优惠</text>
					</view>
					<view class="submitorder-box-coupon-right">
						<text class="submitorder-box-coupon-pick">
							-¥3.00
						</text>
						<text class="lg text-gray cuIcon-right submitorder-box-coupon-icon">
							
						</text>
					</view>
				</view>
				<!-- 最终价格汇总 -->
				<view class="submitorder-box-all">
					<view class="submitorder-box-all-list">
						<view class="submitorder-box-all-list-left">
							商品总额
						</view>
						<view class="submitorder-box-all-list-right">
							¥6.90
						</view>
					</view>
					<view class="submitorder-box-all-list">
						<view class="submitorder-box-all-list-left">
							配送费
						</view>
						<view class="submitorder-box-all-list-right">
							¥0
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 底部支付通道 -->
		<view class="submitorder-foots">
			<view class="submitorder-foots-left">
				共优惠 ¥6.90
			</view>
			<view class="submitorder-foots-right">
				<view class="submitorder-foots-right-gray">待支付:</view>
				<view class="submitorder-foots-right-money">¥61023.90</view>
				<view class="submitorder-foots-right-submit">立即支付</view>
			</view>
		</view>
		<!-- 优惠券 弹出层 -->
		<view class="cu-modal bottom-modal" :class="couponShow ? 'show' : '' ">
			<view class="cu-dialog submitorder-coupon-case">
				<view class="cu-bar bg-white submitorder-coupon-titles">
					优惠券
					<text class="lg text-gray cuIcon-close submitorder-coupon-titles-close" @click="couponOffs"></text>
				</view>
				<view class="padding-xl submitorder-coupon-boxs">
					<view class="submitorder-coupon-boxs-name">
						<text class="submitorder-coupon-boxs-name-left">
							可用优惠券(3)
						</text>
						<text class="submitorder-coupon-boxs-name-right">
							优惠券说明
						</text>
					</view>
					<view class="submitorder-coupon-boxs-centent">
						<scroll-view class="submitorder-coupon-boxs-centent-scroll" scroll-y="true">
							<submitOrder />
							<submitOrder />
							<submitOrder />
							<submitOrder />
							<submitOrder />
						</scroll-view>
					</view>
					<view class="submitorder-coupon-boxs-bottom">
						<view class="submitorder-coupon-boxs-bottom-box">确认</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import submitGoodsList from '../../components/submitGoodsList.vue'
	import submitOrder from '../../components/submitCoupon.vue'
	
	export default {
		data() {
			return {
				textareaAValue:'',
				couponShow: false
			}
		},
		methods: {
			remarksBlur(){
				
			},
			couponShows(){
				this.couponShow = true
			},
			couponOffs(){
				this.couponShow = false
			},
			goSetAddress(){
				uni.navigateTo({
				    url: '/pages/setaddress/setaddress'
				});
			},
			goAdderss(){
				uni.navigateTo({
				    url: '/pages/address/address'
				});
			}
		},
		components:{
			submitGoodsList,
			submitOrder
		}
	}
</script>

<style>
.submitorder{
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to bottom, #15C532 0rpx, #F3F7FA 600rpx, #F3F7FA 100%);
}
.submitorder-title{
	width: 100%;
	height: 90rpx;
	line-height: 90rpx;
	padding: 0 25rpx;
	box-sizing: border-box;
}
.submitorder-title text{
	color: #FFFFFF;
	font-size: 34rpx;
}
.submitorder-title text:nth-child(1){
	margin-right: 15rpx;
}
.submitorder-box{
	width: 100%;
	height: calc(100% - 196rpx - var(--status-bar-height));
}
.submitorder-box-scroll{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 20rpx 25rpx;
	box-sizing: border-box;
}
/* 提交地址 */
.submitorder-box-address{
	width: 100%;
	/* height: 150rpx; */
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 20rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
.submitorder-box-address-add{
	height: 110rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.submitorder-box-address-add text:nth-child(1){
	flex: 1;
	height: 110rpx;
	font-size: 36rpx;
	color: #060810;
	line-height: 110rpx;
	display: inline-block;
	font-weight: bold;
}
.submitorder-box-address-add text:nth-child(2){
	width: 50rpx;
	height: 110rpx;
	line-height: 110rpx;
	text-align: right;
	display: inline-block;
}
/* 提交地址 */
.submitorder-box-address-message{
	width: 100%;
	height: auto;
}
/* 名字 */
.submitorder-box-address-message-name{
	width: 100%;
	height: 56rpx;
	display: flex;
	justify-content: space-between;
}
.submitorder-box-address-message-name-left{
	flex: 1;
	height: 56rpx;
	color: #0F121B;
	font-weight: bold;
	font-size: 36rpx;
}
.submitorder-box-address-message-name-right{
	width: 150rpx;
	height: 100%;
	text-align: right;
	line-height: 56rpx;
	
}
.submitorder-box-address-message-name-right text:nth-child(1){
	color: #198F36;
	font-weight: bold;
	font-size: 30rpx;
	margin-right: 10rpx;
}
/* 地址 */
.submitorder-box-address-message-address{
	width: 100%;
	line-height: 40rpx;
	color: #7D7D7D;
	font-size: 24rpx;
}
/* 手机号 */
.submitorder-box-address-message-phone{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 27rpx;
	color: #000103;
	font-weight: bold;
}
.submitorder-box-address-message-phone text:nth-child(1){
	margin-right: 15rpx;
}
/* 订单栏 */
.submitorder-box-order{
	width: 100%;
	/* height: 150rpx; */
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 20rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
.submitorder-box-order-name{
	width: 100%;
	height: 70rpx;
	border-bottom: 1rpx solid #EEEEEE;
	line-height: 70rpx;
	/* font-weight: bold; */
	font-size: 36rpx;
	color: #060810;
}
.submitorder-box-order-goods{
	padding: 10rpx 0;
	box-sizing: border-box;
	height: 170rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.submitorder-box-order-goods-list{
	border-bottom: 1rpx dashed #EEEEEE;
	margin-bottom: 15rpx;
}

.submitorder-box-order-goods-box{
	flex: 1;
	height: 150rpx;
	
}
.submitorder-box-order-goods-box-scroll{
	width: 450rpx;
	height: 100%;
	overflow: hidden;
	background: #FFFFFF;
}
.submitorder-box-order-goods-box-scroll-box{
	width: auto;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	white-space:nowrap;
}
.submitorder-box-order-goods-box-scroll-list{
	width: 150rpx;
	height: 150rpx;
	display: flex;
	justify-content: flex-start;
	margin-right: 10rpx;
}
.submitorder-box-order-goods-box-scroll-list image{
	width: 150rpx;
	height: 150rpx;
}
.submitorder-box-order-goods-number{
	width: 200rpx;
	height: 150rpx;
	/* background: #007AFF; */
	line-height: 150rpx;
	text-align: right;
}
.submitorder-box-order-goods-number-text{
	font-size: 30rpx;
	color: #272928;
}
/* 优惠券 */
.submitorder-box-coupon{
	width: 100%;
	height: 90rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 0 20rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.submitorder-box-coupon-left{
	flex: 1;
	height: 90rpx;
	/* background: #007AFF; */
	line-height: 90rpx;
	/* display: flex; */
}
.submitorder-box-coupon-left-name{
	font-size: 32rpx;
	color: #18171C;
	margin-right: 15rpx;
}
.submitorder-box-coupon-left-lable{
	font-size: 20rpx;
	color: #FF2929;
	border: 1rpx solid #FF2929;
	padding: 5rpx 10rpx;
	border-radius: 5rpx;
}
.submitorder-box-coupon-right{
	width: 250rpx;
	height: 90rpx;
	/* background: #007AFF; */
	text-align: right;
	line-height: 90rpx;
}
.submitorder-box-coupon-pick{
	color: #FF2927;
	font-size: 26rpx;
	font-weight: bold;
	margin-right: 10rpx;
}
/* 备注 */
.submitorder-box-remarks{
	width: 100%;
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 0 20rpx;
	margin-bottom: 20rpx;
}
.submitorder-box-remarks-name{
	width: 100%;
	height: 90rpx;
	line-height: 90rpx;
	font-size: 32rpx;
	color: #18171C;
	border-bottom: 1rpx solid #EEEEEE;
}
.submitorder-box-remarks-textarea{
	width: 100%;
	height: 250rpx;
	padding: 20rpx 0;
	font-size: 26rpx;
}
/* 价格汇总 */
.submitorder-box-all{
	width: 100%;
	height: auto;
	border-radius: 20rpx;
	padding: 0 20rpx;
	background: #FFFFFF;
}
.submitorder-box-all-list{
	width: 100%;
	height: 90rpx;
	line-height: 90rpx;
	display: flex;
	justify-content: space-between;
}
.submitorder-box-all-list-left{
	color: #181C1F;
	font-size: 32rpx;
}
.submitorder-box-all-list-right{
	color: #181C1F;
	font-size: 28rpx;
	font-weight: bold;
}

/* 底部支付 */
.submitorder-foots{
	width: 100%;
	height: 106rpx;
	background: #FFFFFF;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
}
.submitorder-foots-left{
	width: 220rpx;
	height: 106rpx;
	line-height: 106rpx;
	padding-left: 10rpx;
	box-sizing: border-box;
	font-size: 26rpx;
	color: #1B1B22;
	/* background: #6767F8; */
}
.submitorder-foots-right{
	width: 530rpx;
	height: 106rpx;
	/* background: #F8A567; */
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 15rpx;
	box-sizing: border-box;
}
.submitorder-foots-right-submit{
	width: 210rpx;
	height: 76rpx;
	border-radius: 38rpx;
	background-image: linear-gradient(to right,#F25424,#FF222B);
	font-size: 32rpx;
	color: #FFFFFF;
	text-align: center;
	line-height: 76rpx;
}
.submitorder-foots-right-gray{
	height: 76rpx;
	line-height: 76rpx;
	font-size: 30rpx;
	color: #0E0F11;
	margin-right: 15rpx;
}
.submitorder-foots-right-money{
	height: 76rpx;
	line-height: 76rpx;
	font-size: 34rpx;
	color: #FF1025;
	margin-right: 15rpx;
	font-weight: bold;
}
/* 弹出层 */
.submitorder-coupon-case{
	border-radius: 20rpx 20rpx 0 0 !important;
}
.submitorder-coupon-boxs{
	width: 100%;
	height: calc(100vh - 400rpx);
	padding: 20rpx;
	box-sizing: border-box;
	/* background: #007AFF; */
}
.submitorder-coupon-boxs-name{
	width: 100%;
	height: 62rpx;
	display: flex;
	justify-content: space-between;
	line-height: 62rpx;
}
.submitorder-coupon-boxs-name-left{
	color: #0B0B0D;
	font-size: 32rpx;
}
.submitorder-coupon-boxs-name-right{
	color: #8A8E91;
	font-size: 24rpx;
}
.submitorder-coupon-boxs-centent{
	width: 100%;
	height: calc(100% - 166rpx);
/* 	background: #F329C9; */
}
.submitorder-coupon-boxs-centent-scroll{
	width: 100%;
	height: 100%;
}
.submitorder-coupon-boxs-bottom{
	width: 100%;
	height: 104rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.submitorder-coupon-boxs-bottom-box{
	width: 690rpx;
	height: 80rpx;
	border-radius: 40rpx;
	background-image: linear-gradient(to right,#48D02E,#17C734);
	text-align: center;
	line-height: 80rpx;
	color: #FFFFFF;
	font-size: 34rpx;
}
.submitorder-coupon-titles{
	text-align: center!important;
	font-size: 36rpx;
	font-weight: bold;
	color: #101113;
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
}
.submitorder-coupon-titles-close{
	position: absolute;
	right: 20rpx;
	top: 15px;
	/* background: #007AFF; */
	font-size: 38rpx;
}
</style>
