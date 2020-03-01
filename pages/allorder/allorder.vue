<template>
	<view class="addorder">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in allTab" :key="index" @tap="tabSelect" :data-id="index">
					{{item.title}}
				</view>
			</view>
		</scroll-view>
		<view class="addorder-box">
			<swiper class="swiper addorder-box-swiper" :indicator-dots="false" :autoplay="false" :current='TabCur' @change="swiperChange">
			    <swiper-item>
			        <view class="addorder-box-swiper-list">
			        	<view class="addorder-box-swiper-list-emty" v-show="orderList.length === 0">
			        		<view class="addorder-box-swiper-list-emty-box">
			        			<image src="../../static/imgs/empty1.jpeg"></image>
			        			<text>暂时还没有相关订单</text>
			        		</view>
			        	</view>
			        	<view class="addorder-box-swiper-list-box" v-for="(item,index) in orderList" :key='index'>
			        		<view class="addorder-box-swiper-list-box-head">
			        			<text>{{item.order_createtime}}</text>
			        			<text>待支付</text>
			        		</view>
			        		<view class="addorder-box-swiper-list-box-content" @click="details(item.id)">
			        			<scroll-view class="order-list-box" scroll-x="true" >
			        				<view class="order-list-box-title" :style="{'width':  item.order_order.length*130+'rpx'}" > 
			        					<view class="order-list-box-list"  v-for="(items,indexs) in item.order_order" :key='indexs'>
			        						<image :src="items.url"></image>
			        					</view>		
			        				</view>
			        			</scroll-view>
			        			<view class="addorder-box-swiper-list-box-content-right">
			        				¥{{item.order_price}}
			        			</view>
			        		</view>
			        		<view class="addorder-box-swiper-list-box-footer">
			        			共{{item.order_order.length}}份商品,实付¥{{(parseFloat(item.order_price) + parseFloat(item.order_delivery)).toFixed(2)}}
			        		</view>
			        		<!-- <view class="addorder-box-swiper-list-box-can">
			        			<text>取消订单</text><text>去支付</text>
			        		</view> -->
			        	</view>
			        </view>
			    </swiper-item>
			    <swiper-item>
			        <view class="addorder-box-swiper-list">
						<view class="addorder-box-swiper-list-emty" v-show="orderList1.length === 0">
							<view class="addorder-box-swiper-list-emty-box">
								<image src="../../static/imgs/empty1.jpeg"></image>
								<text>暂时还没有相关订单</text>
							</view>
						</view>
			        	<view class="addorder-box-swiper-list-box" v-for="(item,index) in orderList1" :key='index'>
							<view class="addorder-box-swiper-list-box-head">
								<text>{{item.order_createtime}}</text>
								<text>待支付</text>
							</view>
							<view class="addorder-box-swiper-list-box-content" @click="details(item.id)">
								<scroll-view class="order-list-box" scroll-x="true" >
									<view class="order-list-box-title" :style="{'width':  item.order_order.length*130+'rpx'}" > 
										<view class="order-list-box-list"  v-for="(items,indexs) in item.order_order" :key='indexs'>
											<image :src="items.url"></image>
										</view>		
									</view>
								</scroll-view>
								<view class="addorder-box-swiper-list-box-content-right">
									¥{{item.order_price}}
								</view>
							</view>
							<view class="addorder-box-swiper-list-box-footer">
								共{{item.order_order.length}}份商品,实付¥{{(parseFloat(item.order_price) + parseFloat(item.order_delivery)).toFixed(2)}}
							</view>
							<!-- <view class="addorder-box-swiper-list-box-can">
								<text>取消订单</text><text>去支付</text>
							</view> -->
						</view>
			        </view>
					
			    </swiper-item>
			   <swiper-item>
			       <view class="addorder-box-swiper-list">
			       	<view class="addorder-box-swiper-list-emty" v-show="orderList2.length === 0">
			       		<view class="addorder-box-swiper-list-emty-box">
			       			<image src="../../static/imgs/empty1.jpeg"></image>
			       			<text>暂时还没有相关订单</text>
			       		</view>
			       	</view>
			       	<view class="addorder-box-swiper-list-box" v-for="(item,index) in orderList2" :key='index'>
			       		<view class="addorder-box-swiper-list-box-head">
			       			<text>{{item.order_createtime}}</text>
			       			<text>待发货</text>
			       		</view>
			       		<view class="addorder-box-swiper-list-box-content" @click="details(item.id)">
			       			<scroll-view class="order-list-box" scroll-x="true" >
			       				<view class="order-list-box-title" :style="{'width':  item.order_order.length*130+'rpx'}" > 
			       					<view class="order-list-box-list"  v-for="(items,indexs) in item.order_order" :key='indexs'>
			       						<image :src="items.url"></image>
			       					</view>		
			       				</view>
			       			</scroll-view>
			       			<view class="addorder-box-swiper-list-box-content-right">
			       				¥{{item.order_price}}
			       			</view>
			       		</view>
			       		<view class="addorder-box-swiper-list-box-footer">
			       			共{{item.order_order.length}}份商品,实付¥{{(parseFloat(item.order_price) + parseFloat(item.order_delivery)).toFixed(2)}}
			       		</view>
			       		<!-- <view class="addorder-box-swiper-list-box-can">
			       			<text>取消订单</text><text>去支付</text>
			       		</view> -->
			       	</view>
			       </view>
			    </swiper-item>
				<swiper-item>
				    <view class="addorder-box-swiper-list">
				    	<view class="addorder-box-swiper-list-emty" v-show="orderList3.length === 0">
				    		<view class="addorder-box-swiper-list-emty-box">
				    			<image src="../../static/imgs/empty1.jpeg"></image>
				    			<text>暂时还没有相关订单</text>
				    		</view>
				    	</view>
				    	<view class="addorder-box-swiper-list-box" v-for="(item,index) in orderList3" :key='index'>
				    		<view class="addorder-box-swiper-list-box-head">
				    			<text>{{item.order_createtime}}</text>
				    			<text>待收货</text>
				    		</view>
				    		<view class="addorder-box-swiper-list-box-content" @click="details(item.id)">
				    			<scroll-view class="order-list-box" scroll-x="true" >
				    				<view class="order-list-box-title" :style="{'width':  item.order_order.length*130+'rpx'}" > 
				    					<view class="order-list-box-list"  v-for="(items,indexs) in item.order_order" :key='indexs'>
				    						<image :src="items.url"></image>
				    					</view>		
				    				</view>
				    			</scroll-view>
				    			<view class="addorder-box-swiper-list-box-content-right">
				    				¥{{item.order_price}}
				    			</view>
				    		</view>
				    		<view class="addorder-box-swiper-list-box-footer">
				    			共{{item.order_order.length}}份商品,实付¥{{(parseFloat(item.order_price) + parseFloat(item.order_delivery)).toFixed(2)}}
				    		</view>
				    		<!-- <view class="addorder-box-swiper-list-box-can">
				    			<text>取消订单</text><text>去支付</text>
				    		</view> -->
				    	</view>
				    </view>
				 </swiper-item>
				 <swiper-item>
				      <view class="addorder-box-swiper-list">
				      	<view class="addorder-box-swiper-list-emty" v-show="orderList4.length === 0">
				      		<view class="addorder-box-swiper-list-emty-box">
				      			<image src="../../static/imgs/empty1.jpeg"></image>
				      			<text>暂时还没有相关订单</text>
				      		</view>
				      	</view>
				      	<view class="addorder-box-swiper-list-box" v-for="(item,index) in orderList4" :key='index'>
				      		<view class="addorder-box-swiper-list-box-head">
				      			<text>{{item.order_createtime}}</text>
				      			<text>待评价</text>
				      		</view>
				      		<view class="addorder-box-swiper-list-box-content" @click="details(item.id)">
				      			<scroll-view class="order-list-box" scroll-x="true" >
				      				<view class="order-list-box-title" :style="{'width':  item.order_order.length*130+'rpx'}" > 
				      					<view class="order-list-box-list"  v-for="(items,indexs) in item.order_order" :key='indexs'>
				      						<image :src="items.url"></image>
				      					</view>		
				      				</view>
				      			</scroll-view>
				      			<view class="addorder-box-swiper-list-box-content-right">
				      				¥{{item.order_price}}
				      			</view>
				      		</view>
				      		<view class="addorder-box-swiper-list-box-footer">
				      			共{{item.order_order.length}}份商品,实付¥{{(parseFloat(item.order_price) + parseFloat(item.order_delivery)).toFixed(2)}}
				      		</view>
				      		<!-- <view class="addorder-box-swiper-list-box-can">
				      			<text>取消订单</text><text>去支付</text>
				      		</view> -->
				      	</view>
				      </view>
				  </swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import moment from 'moment'
	
	export default {
		data() {
			return {
				TabCur: 2,
				scrollLeft: 0,
				allTab:[
					{
						title: '全部',
						id: 0
					},
					{
						title: '待支付',
						id: 1
					},
					{
						title: '待发货',
						id: 2
					},
					{
						title: '待收货',
						id: 3
					},
					{
						title: '待评价',
						id: 4
					}
				],
				page: 1,
				pageSize: 10,
				orderList:[],
				orderList1: [],
				orderList2: [],
				orderList3: [],
				orderList4: [],
			}
		},
		onLoad(options) {
			this.info(2)
			this.TabCur = options.id || 0
		},
		methods: {
			details(id){
				uni.navigateTo({
				    url: '/pages/details/details?id='+id,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				
			},
			swiperChange(event){
				this.TabCur = event.detail.current
			},
			info(page){
				let This =this
				this.https('index/getOrderAlls','post',{
					page: this.page,
					pageSize: this.pageSize
				})
				.then(res=>{
					console.log(res)
					let orderList = res.data.data.map(item=>{
						item.order_order = JSON.parse(item.order_order)
						item.order_createtime = moment(item.order_createtime).format('YYYY-MM-DD  h:mm:ss')
						return item
					})
					This.orderList = [...This.orderList,...orderList]
					This.orderList1 = This.orderList.filter(item=>{
						return item.order_states === 1
					})
					This.orderList2 = This.orderList.filter(item=>{
						return item.order_states === 2
					})
					This.orderList3 = This.orderList.filter(item=>{
						return item.order_states === 3
					})
					This.orderList4 = This.orderList.filter(item=>{
						return item.order_states === 4
					})
					console.log(This.orderList1)
				})
			}
		}
	}
</script>

<style>
.addorder{
	width: 100%;
	height: 100%;
}
.addorder-box{
	width: 100%;
	max-height: calc(100% - 90rpx);
}
.addorder-box-swiper{
	height: calc(100vh - 90rpx);
	padding-bottom: 50rpx;
}
.addorder-box-swiper-list{
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	background: #F5F5F5;
	color: #007AFF;
	padding-top: 20rpx;
	box-sizing: border-box;
	padding-bottom: 100rpx;
}
.addorder-box-swiper-list-emty{
	width: 100%;
	height: 100%;
	background: #F5F5F5;
	padding: 200rpx 100rpx 0;
}
.addorder-box-swiper-list-emty-box{
	width: 550rpx;
	height: auto;
}
.addorder-box-swiper-list-emty-box image{
	width: 550rpx;
	margin-bottom: 30rpx;
}
.addorder-box-swiper-list-emty-box text{
	display: inline-block;
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	color: grey;
}
/* 列表 */
.addorder-box-swiper-list-box{
	margin-bottom: 20rpx;
}
.addorder-box-swiper-list-box-head{
	width: 100%;
	height: 95rpx;
	background: #FFFFFF;
	padding: 0 25rpx;
	box-sizing: border-box;
	line-height: 95rpx;
	display: flex;
	justify-content: space-between;
}
.addorder-box-swiper-list-box-head text{
	color: #4C4C4C;
	font-size: 28rpx;
}
.addorder-box-swiper-list-box-content{
	width: 100%;
	height: 164rpx;
	background: #F5F5F5;
	padding-top: 27rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.addorder-box-swiper-list-box-content-right{
	flex: 1;
	text-align: center;
	line-height: 154rpx;
	color: #646566;
}
.addorder-box-swiper-list-box-footer{
	width: 100%;
	height: 100rpx;
	background: #FFFFFF;
	text-align: right;
	padding: 0 25rpx;
	box-sizing: border-box;
	line-height: 100rpx;
	color: #4C4C4C;
}
.addorder-box-swiper-list-box-can{
	width: 100%;
	height: 90rpx;
	border-top: 1px solid #ECECEC;
	background: #FFFFFF;
	padding-top: 20rpx;
	padding-right: 25rpx;
	box-sizing: border-box;
	text-align: right;
	/* display: flex; */
	/* justify-items: flex-start; */
	/* align-items: center; */
}
.addorder-box-swiper-list-box-can text{
	padding: 10rpx 20rpx;
	border-radius: 30rpx;
	font-size: 26rpx;
	color: #646566;
	border: 1px solid #4C4C4C;
	margin-left: 20rpx;
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
	background: #FFFFFF;
	margin-left: 20rpx;
}
.order-list-box-list image{
	width: 100%;
	height: 100%;
}
</style>
