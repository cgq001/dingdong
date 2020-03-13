<template>
	<view class="homes">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<!-- 头像区域 -->
		<view class="homes-title" @click="goUser">
			<view class="homes-title-left">
				<image :src="userList.image"></image>
			</view>
			<view class="homes-title-center">
				<view class="homes-title-center-list">会员号：123456</view>
				<view class="homes-title-center-list">手机号：{{userList.phone}}</view>
			</view>
			<view class="homes-title-right">
				<text class="lg text-gray cuIcon-right"></text>
			</view>
		</view>
		<!-- 余额明细 -->
		<view class="homes-money">
			<view class="homes-money-list">
				<view class="homes-money-list-top">0</view>
				<view class="homes-money-list-bottom">优惠券</view>
			</view>
			<view class="homes-money-list">
				<view class="homes-money-list-top">{{userList.integral}}</view>
				<view class="homes-money-list-bottom">积分</view>
			</view>
			<view class="homes-money-list">
				<view class="homes-money-list-top">{{userList.money}}</view>
				<view class="homes-money-list-bottom">余额(元)</view>
			</view>
		</view>
		<!-- 订单区域 -->
		<view class="homes-order">
			<!-- 名称 -->
			<view class="homes-order-title">
				<view class="homes-order-title-box" @click="clickAllOrder(0)">
					<view class="homes-order-title-box-left">
						<text class="lg text-gray cuIcon-edit"></text>
						<text>我的订单</text>
					</view>
					<view class="homes-order-title-box-right">
						<text>查看全部订单</text>
						<text class="lg text-gray cuIcon-right">
						</text>
					</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="homes-order-box">
				<view class="homes-order-box-list"  @click="clickAllOrder(1)">
					<view class="cu-avatar xl radius homes-order-box-list-top">
						<text class="lg text-gray cuIcon-pay"></text>
						<view class='cu-tag badge' v-show="orderState1.length > 0">{{orderState1.length}}</view>
					</view>
					<view class="homes-order-box-list-bottom">
						待支付
					</view>
				</view>
				<view class="homes-order-box-list" @click="clickAllOrder(2)">
					<view class="cu-avatar xl radius homes-order-box-list-top">
						<text class="lg text-gray cuIcon-send"></text>
						<view class='cu-tag badge' v-show="orderState2.length > 0">{{orderState2.length}}</view>
					</view>
					<view class="homes-order-box-list-bottom">
						待发货
					</view>
				</view>
				<view class="homes-order-box-list" @click="clickAllOrder(3)">
					<view class="cu-avatar xl radius homes-order-box-list-top">
						<text class="lg text-gray cuIcon-deliver"></text>
						<view class='cu-tag badge' v-show="orderState3.length > 0">{{orderState3.length}}</view>
					</view>
					<view class="homes-order-box-list-bottom">
						待收货
					</view>
				</view>
				<view class="homes-order-box-list" @click="clickAllOrder(4)">
					<view class="cu-avatar xl radius homes-order-box-list-top">
						<text class="lg text-gray cuIcon-comment"></text>
						<view class='cu-tag badge' v-show="orderState4.length > 0">{{orderState4.length}}</view>
					</view>
					<view class="homes-order-box-list-bottom">
						待评价
					</view>
				</view>
				<view class="homes-order-box-list">
					<view class="cu-avatar xl radius homes-order-box-list-top">
						<text class="lg text-gray cuIcon-sponsor"></text>
						<view class='cu-tag badge' v-show="orderState5.length > 0">{{orderState5.length}}</view>
					</view>
					<view class="homes-order-box-list-bottom">
						退款
					</view>
				</view>
			</view>
			<!-- 个人信息 -->
			<view class="homes-info cu-list menu sm-border">
				<view class="cu-item arrow">
					<view class="content" hover-class="none" @click="getUsers">
						<text class="cuIcon-friendaddfill text-orange" style="color: #FEC535; font-size: 36rpx;"></text>
						<text class="text-grey">邀请好友</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="/pages/address/address?shows=1">
						<text class="cuIcon-addressbook text-orange" style="color: #76D348; font-size: 36rpx;"></text>
						<text class="text-grey">收货地址</text>
					</navigator>
				</view>
			</view>
			<!-- 绿卡会员信息 -->
			<view class="homes-info cu-list menu sm-border">
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="/pages/vip/vip">
						<text class="cuIcon-card text-orange" style="color: #76D348; font-size: 36rpx;"></text>
						<text class="text-grey">我的绿卡</text>
					</navigator>
				</view>
			</view>
			<!-- 客服信息 -->
			<view class="homes-info cu-list menu sm-border">
				<view class="cu-item arrow">
					<view class="content" hover-class="none" @click="telCreate">
						<text class="cuIcon-dianhua text-orange" style="color: #76D348; font-size: 36rpx;"></text>
						<text class="text-grey">联系电话</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="/pages/options/options">
						<text class="cuIcon-commentfill text-orange" style="color: #FEC535; font-size: 36rpx;"></text>
						<text class="text-grey">意见反馈</text>
					</navigator>
				</view>
			</view>
			<!-- 绿卡会员信息 -->
			<view class="homes-info cu-list menu sm-border">
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="/pages/about/about">
						<text class="cuIcon-infofill text-orange" style="color: #00943C; font-size: 36rpx;"></text>
						<text class="text-grey">关于</text>
					</navigator>
				</view>
			</view>
			<!-- 当前版本 -->
			<view class="home-version">
				当前版本1.0.0
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userList: {},
				orderState1:0,
				orderState2:0,
				orderState3:0,
				orderState4:0,
				orderState5:0
			}
		},
		onLoad() {
			let Token = this.$store.state.user.token
			console.log(Token)
			if(!Token){
				// uni.redirectTo({
				//     url: '/pages/login/login'
				// });
				// uni.showModal({
				//     title: '温馨提示',
				//     content: '你还没有登陆,现在去登陆?',
				//     success: function (res) {
				//         if (res.confirm) {
				//            uni.redirectTo({
				//                url: '/pages/login/login'
				//            });
				//         } else if (res.cancel) {
				//             uni.redirectTo({
				//                 url: '/pages/index/index'
				//             });
				//         }
				//     }
				// });
			}
		},
		methods: {
			clickAllOrder(id){
				uni.navigateTo({
				    url: '/pages/allorder/allorder?id='+id
				});
			},
			telCreate(){  // 联系电话
				this.$dialog.confirm({
				  title: '叮咚提示',
				  message: '本站提供源码以接口支持,如有疑问,请联系邮箱:nodebook@qq.com',
				  confirmButtonText: '去GitGub'
				}).then(() => {
				  // on confirm
				  window.location.href = 'https://github.com/cgq001/dingdong'
				}).catch(() => {
				  // on cancel
				});
			},
			getUsers(){ //邀请好友
				this.$dialog.confirm({
				  title: '叮咚提示',
				  message: '本功能暂时未实现',
				  confirmButtonText: '去微信'
				}).then(() => {
				  // on confirm
				 window.location.href="'weixin://'"
				}).catch(() => {
				  // on cancel
				});
			},
			goUser(){ //去用户中心
				uni.navigateTo({
				    url: '/pages/user/user',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		},
		onShow() {
			this.https('index/getHome','get',{})
				.then(res=>{
					console.log(res.data)
					this.userList = res.data.data.userList
					let orderState = res.data.data.orderNumber
					this.orderState1 = orderState.filter(item=>{
						return item.order_states === 1
					})
					this.orderState2 = orderState.filter(item=>{
						return item.order_states === 2
					})
					this.orderState3 = orderState.filter(item=>{
						return item.order_states === 3
					})
					this.orderState4 = orderState.filter(item=>{
						return item.order_states === 4
					})
					this.orderState5 = orderState.filter(item=>{
						return item.order_states === 5 || item.order_states === 6
					})

				})
		}
	}
</script>

<style>
.homes{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background: #3BBA63;
	color: #FFFFFF;
}
/* 头像区域 */
.homes-title{
	width: 100%;
	height: 206rpx;
	padding: 44rpx 0;
	box-sizing: border-box;
	background: #3BBA63;
	display: flex;
	justify-content: space-between;
}
.homes-title-left{
	width: 176rpx;
	height: 100%;
	padding: 0 28rpx;
	box-sizing: border-box;
}
.homes-title-left image{
	width: 100%;
	height: 100%;
	border-radius: 59rpx;
}
.homes-title-center{
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: wrap;
}
.homes-title-center-list{
	width: 100%;
	height: 40rpx;
	font-size: 26rpx;
	color: #FFFFFF;
	line-height: 40rpx;
}
.homes-title-right{
	width: 84rpx;
	text-align: center;
	line-height: 118rpx;
}
.homes-title-right text{
	color: #FFFFFF;
	font-size: 40rpx;
}
/* 订单区域 */
.homes-order{
	width: 100%;
	height: 280rpx;
	background: #FFFFFF;
}
.homes-order-title{
	width: 100%;
	height: 95rpx;
	padding-left: 30rpx;
	box-sizing: border-box;
}
.homes-order-title-box{
	width: 100%;
	height: 100%;
	border-bottom: 1px solid #EBEBEB;
	display: flex;
	justify-content: space-between;
	padding: 0 36rpx 0 10rpx;
	box-sizing: border-box;
	line-height: 94rpx;
}
.homes-order-title-box-left text:nth-child(1){
	color: #FFD944;
	font-size: 36rpx;
	font-weight: 900;
	margin-right: 20rpx;
}
.homes-order-title-box-left text:nth-child(2){
	color: #0F0F0F;
	font-size: 30rpx;
}
.homes-order-title-box-right text:nth-child(1){
	color: #909090;
	margin-right: 10rpx;
	font-size: 24rpx;
}
.homes-order-title-box-right text:nth-child(2){
	color: #C6C6C6;
	font-size: 30rpx;
}
.homes-order-box{
	width: 100%;
	height: 180rpx;
	padding-top: 28rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	margin-bottom: 20rpx;
}
.homes-order-box-list{
	width: 176rpx;
	height: 180rpx;
	text-align: center;
}
.homes-order-box-list-top{
	width: 100%;
	height: 76rpx;
	line-height: 76rpx;
	background: #FFFFFF;
}
.homes-order-box-list-top .cu-tag.badge{
	right: 30rpx;
	text-align: left;
}
.homes-order-box-list-top text{
	color: #878787;
	font-size: 55rpx;
	
}
.homes-order-box-list-bottom{
	width: 100%;
	height: 76rpx;
	line-height: 60rpx;
	color: #131313;
	font-size: 26rpx;
}
/* 个人信息 */
.homes-info{
	width: 100%;
	margin-bottom: 20rpx;
	background: #FFFFFF;
}
/* 余额明细 */
.homes-money{
	width: 100%;
	height: 150rpx;
	margin-bottom: 20rpx;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
}
.homes-money-list{
	width: 250rpx;
	height: 150rpx;
	padding-top: 35rpx;
	box-sizing: border-box;
}
.homes-money-list-top{
	width: 100%;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	font-size: 24rpx;
	font-weight: 700;
	color: #322F30;
}
.homes-money-list-bottom{
	width: 100%;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	font-size: 24rpx;
	color: #4A4A4A;
}
/* 版本信息 */
.home-version{
	width: 100%;
	height: 90rpx;
	text-align: center;
	font-size: 20rpx;
	line-height: 90rpx;
	color: #999999;
}
</style>
