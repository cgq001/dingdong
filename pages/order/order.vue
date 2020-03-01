<template>
	<view class="order">
		<view class="order-address" @click="address(list.id)" v-if="list.address">
			<view class="order-address-add">
				<view class="order-address-add-left">
					{{list.address}}
				</view>
				<view class="order-address-add-right">
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="order-address-name">
				<text>{{list.name}}</text>
				<text>{{list.tel}}</text>
			</view>
		</view>
		<!-- 空地址 -->
		<view class="order-addressempty" @click="addressempty" v-if="!list.address">
			<view class="order-addressempty-left">
				<van-icon class="order-addressempty-left-icon" name="add-square" />
				<text>请添加收货地址</text>
			</view>
			<view class="order-addressempty-right">
				<i class='lg text-gray cuIcon-right'></i>
			</view>
		</view>
		<!-- 彩虹线 -->
		<view class="order-hrs">
		</view>
		<!-- 背景 -->
		<view class="order-hr"></view>
		<!-- 配送时间 -->
		<view class="order-time">
			<view class="order-time-left">
				送达时间
			</view>
			<view class="order-time-right" @click="show=true">
			    <text>{{timeText === null ? '选择配送时间' : timeText }}</text>
				<text class="lg text-gray cuIcon-right"></text>
			</view>
		</view>
		<!-- 订单详情 -->
		<view class="order-list">
			<scroll-view class="order-list-box" scroll-x="true" >
				<view class="order-list-box-title" :style="{'width': order.length*110+'rpx'}">
					<view class="order-list-box-list" v-for="(item,index) in order" :key='index'>
						<image :src="item.url"></image>
					</view>		
				</view>
			</scroll-view>
			<view class="order-list-icon" @click="shoplist">
				<text>共{{order.length}}件</text>
				<text class="lg text-gray cuIcon-right"></text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="cu-form-group orderFrom">
			<view class="title">备注</view>
			<input placeholder="选填,告诉小哥你的特殊要求" v-model="message" name="input"></input>
		</view>
		<!-- 支付或者 优惠券 -->
		<view class="homes-info cu-list menu sm-border orderFrom">
			<!-- <view class="cu-item arrow">
				<view class="content">
					<text class="text-grey">支付方式</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">微信</text>
				</view>
			</view> -->
			<view class="cu-form-group margin-top">
				<view class="title">支付方式</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-item arrow" @click="coupons">
					<view class="content">
						<text class="text-grey">优惠券</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">0张可用</text>
					</view>
			</view>
		</view>
		
		<!-- 价格和运费 -->
		<view class="homes-info cu-list menu sm-border orderFrom">
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">商品金额</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">￥{{orderPrice}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">配送费</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">￥{{delivery}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">积分</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">+{{orderPrice}}</text>
				</view>
			</view>
		</view>
		<!-- 提交订单 -->
		<view class="cu-bar bg-white tabbar border shop cartFoots">
			<button class="action" open-type="contact">
				
			</button>
			<view class="action">
				
			</view>
			<view class="btn-group">
				<!-- <button class="cu-btn bg-orange round shadow-blur">加入购物车</button> -->
				<view class="cuBtnRound">实付：{{(Number(orderPrice) + Number(delivery)).toFixed(2)}}元</view>
				<button class="cu-btn bg-red round shadow-blur" @click="goSettlement">提交订单</button>
			</view>
		</view>
		<!-- 选择配送时间 -->
		<van-action-sheet v-model="show">
		  <van-picker show-toolbar title="选择配送时间" :columns="columns" @confirm='confirm' @cancel='show=false' />
		</van-action-sheet>
		<!-- 支付弹窗 -->
		<van-popup  round closeable v-model="payShow" @close='payClose'>
			<view class="pay-box">
				<view class="pay-box-top">
					<h3>叮咚买菜</h3>
					<p>
						<text style="font-size: 36rpx; margin-right: 10rpx;">￥</text>
						{{payJson.price}}
					</p>
				</view>
				<view class="pay-box-bottom">
					<van-cell title="支付方式" is-link value="余额" style="margin-bottom: 20rpx;" />
					<view class="pay-box-bottom-btn">
						<view class="pay-box-bottom-btn-view" @click="pay">确认支付</view>
					</view>
				</view>
			</view>
		</van-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				delivery: 0.00,
				list: {},
				picker: ['余额'],
				index: 0,
				show: false,
				timeText: null,
				message: undefined ,//备注
				payShow: false , //支付弹窗
				payJson:{ //支付数据
					id: 1,
					price: 20.00 
				} 
			}
		},
		methods: {
			shoplist(){
				uni.navigateTo({
				    url: '/pages/shoplist/shoplist'
				});
			},
			goSettlement(){
				if(this.index<0){
					this.$dialog.alert({
					      message: '请选择付款方式'
					    })
					return false;
				}
				if(this.timeText === null){
					// this.$dialog.alert({
					//       message: '请选择配送时间'
					//     })
						this.show= true
					return false;
				}
				if(!this.list.address){
					this.$dialog.alert({
					      message: '请选择收货地址'
					    })
					return false;
				}
				let src = {
					order_address: this.list,  //收货地址
					order_time: this.timeText , //配送时间
					order_order: this.order ,//订单
					order_price: this.orderPrice ,//订单总金额
					order_delivery: this.delivery ,//快递费
					order_payment: this.picker[this.index] ,//支付方式
					allPrice: (Number(this.orderPrice) + Number(this.delivery)).toFixed(2) , // 总价
					order_message: this.message //备注
				}
				// console.log(src)  
				//提交订单
				let This = this
				this.https('index/addOrder','post',src)
					.then(res=>{
						
						if(res.data.code === 0){
						
							This.payJson = res.data.data
							This.payShow = true
							This.$store.commit('car/removeCheck')
						}else{
							this.$dialog.alert({
							  message: '订单提交失败'
							}).then(() => {
							  uni.switchTab({
							      url: '/pages/cart/cart'
							  });
							})
						}
					})
			},
			address(id){
				uni.navigateTo({
				    url: '/pages/address/address?id='+id
				});
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			confirm(picker, value, index){ 
				this.timeText = picker.join(' ')
				this.show = false
			},
			addressempty(){
				uni.navigateTo({
				    url: '/pages/address/address'
				});
			},
			coupons(){
				this.$dialog.alert({
				      message: '暂不支持此功能'
				    })
			},
			payClose(){  //关闭弹出层
				uni.showToast({
				    title: '支付失败',
					icon: 'none',
				    duration: 2000
				});
				uni.switchTab({
				    url: '/pages/home/home'
				});
			},
			pay(){ //确认支付
				this.https('index/addPays','post',{
					...this.payJson
				})
				.then(res=>{
					if(res.data.code === 0){
								this.$dialog.alert({
								  message: '支付成功'
								}).then(() => {
								  uni.switchTab({
								      url: '/pages/home/home'
								  });
								})
					}else if(res.data.code === 1){
						this.$dialog.confirm({
								  title: '提示',
								  message: '支付失败,现在去充值?'
								}).then(() => {
									
								}).catch(() => {
									uni.switchTab({
									    url: '/pages/home/home'
									});
								})
					}else{
						this.$dialog.alert({
						  message: '支付失败'
						}).then(() => {
						  uni.switchTab({
						      url: '/pages/home/home'
						  });
						})
					}
				})
				//console.log(this.payJson)
			}
		},
		onLoad(options) {
			//console.log(options.id)
			this.https('index/searchAddress','get',{})
				.then(res=>{
					if(res.data.data.length === 0){
						return false;
					}
					let list;
					if(options.id){
						for(let i=0;i<res.data.data.length;i++){
							if(options.id == res.data.data[i].id){
								let listJson ={
									id: res.data.data[i].id,
									tel: res.data.data[i].address_phone,
									name: res.data.data[i].address_name,
									address: res.data.data[i].address_province+res.data.data[i].address_city+res.data.data[i].address_county+res.data.data[i].address_addressDetail
								}
								list = listJson
							}
						}
					}else{
						let listJson ={
							id: res.data.data[0].id,
							tel: res.data.data[0].address_phone,
							name: res.data.data[0].address_name,
							address: res.data.data[0].address_province+res.data.data[0].address_city+res.data.data[0].address_county+res.data.data[0].address_addressDetail
						}
						list = listJson
					}
						this.list = list
						//console.log(this.list)
				})
		},
		computed:{
			order:function(){
				console.log(this.$store.state.car.order)
				if(this.$store.state.car.order.length<1){
					uni.switchTab({
					    url: '/pages/cart/cart'
					});
				}
				return this.$store.state.car.order
			},
			orderPrice:function(){
				let This = this
				let src = This.$store.state.car.order.filter(item=>{
					return item.checkeds === true
				})
				let allPrice=0;
					for(let i=0; i<src.length; i++){
						
						allPrice +=parseFloat( (src[i].price * src[i].number).toFixed(2) )
						
					}
					if(allPrice < 10){
						This.delivery = 10.00
					}
					console.log(This.$store.state.car.order)
				return parseFloat(allPrice,2).toFixed(2)
			},
			columns:function(){
				let allTime =[
					{
						text: '7:00~7:29'
					},
					{
						text: '7:30~7:59'
					},
					{
						text: '8:00~8:29'
					},
					{
						text: '8:30~8:59'
					},
					{
						text: '9:00~9:29'
					},
					{
						text: '9:30~9:59'
					},
					{
						text: '10:00~10:29'
					},
					{
						text: '10:30~10:59'
					},
					{
						text: '11:00~11:29'
					},
					{
						text: '11:30~11:59'
					},
					{
						text: '12:00~12:29'
					},
					{
						text: '12:30~12:59'
					},
					{
						text: '13:00~13:29'
					},
					{
						text: '13:30~13:59'
					},
					{
						text: '14:00~14:29'
					},
					{
						text: '14:30~14:59'
					},
					{
						text: '15:00~15:29'
					},
					{
						text: '15:30~15:59'
					},
					{
						text: '16:00~16:29'
					},
					{
						text: '16:30~16:59'
					},
					{
						text: '17:00~17:29'
					},
					{
						text: '17:30~17:59'
					},
					{
						text: '18:00~18:29'
					},
					{
						text: '18:30~18:59'
					},
					{
						text: '19:00~19:29'
					},
					{
						text: '19:30~19:59'
					},
					{
						text: '20:00~20:29'
					},
					{
						text: '20:30~20:59'
					},
				]
				let date = new Date;
				let H = date.getHours()
				let F = date.getMinutes()
				
				let H1 = H-7
			
				let nums = 0
					if(H1 >= 0 && F > 29){
						nums = H1*2 + 1
					}else if(H1 >= 0 && F <= 29){
						nums = H1*2
					}else{
						nums= 0
					}
				let allTimeCount = 	allTime.slice(nums)
				let src;
				if(allTimeCount.length > 0){
					src = [{
					        text: '今天',
					        children: allTimeCount
					      }, {
					        text: '明天',
					        children: allTime
					      }]
				}else{
					src = [{
					        text: '明天',
					        children: allTime
					      }]
				}
				
				return src;
			}
		},
		beforeDestroy() {
			uni.switchTab({
			    url: '/pages/cart/cart'
			});
		}
	}
</script>

<style>
.order{
	width: 100%;
	min-height: 100%;
	padding-bottom: 100rpx;
	box-sizing: border-box;
}
/* 地址 */
.order-address{
	width: 100%;
	height: 160rpx;
	padding-top: 6rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.order-address-add{
	width: 100%;
	height: 92rpx;
	line-height: 46rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.order-address-add-left{
	width: 500rpx;
	height: 100%;
	line-height: 46rpx;
	color: #131313;
	font-size: 30rpx;
	font-weight: 600;
}
.order-address-add-right{
	width: 100rpx;
	height: 100%;
	text-align: right;
	line-height: 92rpx;
}
.order-address-name{
	width: 100%;
	height: 36rpx;
	color: #1F1F1F;
	font-size: 24rpx;
	font-weight: 600;
	line-height: 36rpx;
	padding: 0 20rpx;
}
.order-address-name text:nth-child(2){
	margin-left: 10rpx;
}
/* 彩虹线 */
.order-hrs{
	width: 100%;
	height: 10rpx;
	background-image: repeating-linear-gradient(-45deg,#FD3FF7 0,#FD3FF7 5%,#FFFFFF 5%,#FFFFFF 10%,#367DFF 10%,#367DFF 15%,#FFFFFF 15%,#FFFFFF 20%);
}
.order-hr{
	width: 100%;
	height: 20rpx;
	background: #F5F5F5;
}
/* 送达时间 */
.order-time{
	width: 100%;
	height: 92rpx;
	background: #FFFFFF;
	padding: 0 20rpx;
	line-height: 92rpx;
	display: flex;
	justify-content: space-between;
}
.order-time-left{
	width: 250rpx;
	height: 92rpx;
	font-size: 28rpx;
	color: #020202;
}
.order-time-right{
	width: 350rpx;
	height: 92rpx;
	line-height: 92rpx;
	text-align: right;
}
.order-time-right text:nth-child(1){
	color: #23884C;
	margin-right: 10rpx;
	font-size: 26rpx;
}
/* 订单详情 */
.order-list{
	width: 100%;
	height: 170rpx;
	background: #FFFFFF;
	display: flex;
	justify-content: center;
	padding: 30rpx 20rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
.order-list-box{
	width: 530rpx;
	height: 110rpx;
	
}
.order-list-box-title{
	width: 1100rpx;
	height: 110rpx;
	display: flex;
	justify-content: flex-start;
}
.order-list-box-list{
	width: 110rpx;
	height: 110rpx;
	display: flex;
	justify-items: center;
	align-items: center;
}
.order-list-box-list image{
	width: 60%;
	height: 60%;
}
.order-list-icon{
	flex: 1;
	height: 110rpx;
	line-height: 110rpx;
	text-align: right;
}
.order-list-icon text:nth-child(1){
	color: #787878;
	font-size: 24rpx;
	margin-right: 10rpx;
}
.orderFrom{
	margin-bottom: 20rpx;
}
.content text{
	color: #333333;
}
	/* 购物车 */
.cartFoots{
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
}
.cuBtnRound{
	background: #FFFFFF;
}
/* 空地址 */
.order-addressempty{
	width: 100%;
	height: 150rpx;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
	padding: 0 25rpx;
	box-sizing: border-box;
	line-height: 150rpx;
	font-size: 30rpx;
}
.order-addressempty-left{
	display: flex;
	align-items: center;
}
.order-addressempty-left-icon{
	color: #007AFF;
	font-size: 46rpx;
	margin-right: 20rpx;
	
}
/* 支付弹窗 */
.pay-box{
	width: 560rpx;
	height: 450rpx;
	border-radius: 20rpx;
	background: #FFFFFF;
	padding: 25rpx;
	box-sizing: border-box;
}
.pay-box-top{
	width: 100%;
	height: 210rpx;
	border-bottom: 1rpx solid #CCCCCC;
	padding-top: 80rpx;
	box-sizing: border-box;
}
.pay-box-top h3{
	width: 100%;
	font-size: 28rpx;
	font-weight: 400;
	text-align: center;
}
.pay-box-top p{
	width: 100%;
	height: 70rpx;
	font-size: 46rpx;
	font-weight: bold;
	text-align: center;
	line-height: 70rpx;
}
.pay-box-bottom-btn{
	width: 100%;
	height: 70rpx;
	display: flex;
	justify-content: center;
}
.pay-box-bottom-btn-view{
	width: 300rpx;
	height: 100%;
	background: #07C062;
	border-radius: 10rpx;
	text-align: center;
	line-height: 70rpx;
	color: #FFFFFF;
}
</style>
