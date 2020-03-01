<template>
	<view class="shoping">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<scroll-view  scroll-y="true" class="shoping-Scroll">
			
			<!-- 轮播 -->
			<view class="shoping-swipe">
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in goodSrc.carousel" :key="index">
						<image :src="item.url" mode="aspectFill"></image>
						<!--  v-if="item.type=='image'" -->
						<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
					</swiper-item>
				</swiper>
			</view>
			<!-- 抢购 -->
			<view class="shoping-buy" v-if="goodSrc.buy === 1">
				<view class="shoping-buy-left">
					疯狂抢购
					<text>抢购中</text>
				</view>
				<view class="shoping-buy-right">
					<text>距结束</text>
					<text class="shoping-buy-right-time">{{surplusH}}</text>
					<text>:</text>
					<text class="shoping-buy-right-time">{{surplusF}}</text>
					<text>:</text>
					<text class="shoping-buy-right-time">{{surplusS}}</text>
				</view>
			</view>
			<!-- 主要商品信息 -->
			<view class="shoping-name">
				{{goodSrc.name}}
			</view>
			<view class="shoping-describe">
				{{goodSrc.bewrite}}
			</view>
			<view class="shoping-pick">
				<text>￥</text>
				<text>{{ goodSrc.vip_price>0 ? goodSrc.vip_price : goodSrc.price}}</text>
				<text v-if="goodSrc.vip_price>0">￥{{goodSrc.price}}</text>
			</view>
			<view class="shoping-time">
				<view class="shoping-time-list">
					<text class="lg text-gray cuIcon-timefill"></text>
					最快29分送达
				</view>
			</view>
			<!-- 会员卡 -->
			<view class="Index-vip">
				<view class="Index-vip-list" @click="goVip">
					<view class="Index-vip-list-icon">
						<text class="lg text-gray cuIcon-crownfill"></text>
					</view>
					<view class="Index-vip-list-text">
						<text>加入绿卡会员<text style="color: #FFFFFF;" class="lg text-gray cuIcon-title"></text>预计每年节省806元</text>
					</view>
					<view class="Index-vip-list-right">
						5折开卡<text style="color: #FFFFFF;" class="lg text-gray cuIcon-right"></text>
					</view>
				</view>
			</view>
			<!-- 评论 -->
			<view class="shoping-comment">
				<view class="shoping-comment-name">评论</view>
				<view class="shoping-comment-content">
					<view class="shoping-comment-content-left">
						<image src="../../static/tabbar/h2.png"></image>
					</view>
					<view class="shoping-comment-content-right">
						<view class="shoping-comment-content-right-name">
							<text>用户名</text>
							<text>12:52:23</text>
						</view>
						<view class="shoping-comment-content-right-score">
							<text class="lg text-gray cuIcon-favorfill"></text>
							<text class="lg text-gray cuIcon-favorfill"></text>
							<text class="lg text-gray cuIcon-favorfill"></text>
							<text class="lg text-gray cuIcon-favorfill"></text>
							<text class="lg text-gray cuIcon-favorfill"></text>
							<text class="shoping-comment-content-right-score-text">很满意</text>
						</view>
						<view class="shoping-comment-content-right-msg">
							很满意
						</view>
					</view>
				</view>
				<view class="shoping-comment-move">
					<view class="shoping-comment-move-box">
						<text>查看更多</text>
						<text>(630)</text>
					</view>
				</view>
			</view>
			<!-- 横条 -->
			<view class="shoping-hr">
				
			</view>
			<!-- 规格 -->
			<view class="shoping-Specifications">
				<view class="shoping-Specifications-name">规格</view>
				<view class="shoping-Specifications-list">
					<view class="shoping-Specifications-list-left">净含量</view>
					<view class="shoping-Specifications-list-right">{{goodSrc.weight}}</view>
				</view>
				<view class="shoping-Specifications-list">
					<view class="shoping-Specifications-list-left">保存条件</view>
					<view class="shoping-Specifications-list-right">{{goodSrc.conditions}}</view>
				</view>
				<view class="shoping-Specifications-list">
					<view class="shoping-Specifications-list-left">保质期</view>
					<view class="shoping-Specifications-list-right">{{goodSrc.shelf_life}}</view>
				</view>
			</view>
			<!-- 横条 -->
			<view class="shoping-hr">
				
			</view>
			<!-- 宣传图 -->
			<view class="shoping-imgs">
				<image v-for="(item,index) in goodSrc.propaganda" :key='index' :src="item.url"></image>
			</view>
			<!-- 底部 -->
			<view class="shoping-foot">
				我也是有底线的~
			</view>
		</scroll-view>
		<!-- 购物车 -->
		<view class="cu-bar bg-white tabbar border shop">
			<button class="action" open-type="contact" @click="goCars">
				<view class="cuIcon-cart">
					<view class="cu-tag badge" v-show="carNumber > 0">{{carNumber}}</view>
				</view>
				购物车
			</button>
			<view class="action">
				
			</view>
			<view class="btn-group">
				<button class="cu-btn bg-orange round shadow-blur" @click="addCars">加入购物车</button>
				<button class="cu-btn bg-red round shadow-blur" @click="goSettlement">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodSrc:{ //商品明细
					
				},
				surplusH: '00',
				surplusF: '00',
				surplusS: '00',
				surplusTimes: null
			}
		},
		onLoad(options){
			this.http('nottoken/searchGood','get',{
				id: options.id
			}).then(res=>{
				console.log(res.data)
				res.data.data.carousel = JSON.parse(res.data.data.carousel)
				res.data.data.propaganda = JSON.parse(res.data.data.propaganda)
				
				this.goodSrc = res.data.data
			})
			
			let This = this
			This.countDown()
			this.surplusTimes = setInterval(function(){
				This.countDown()
			},1000)
		},
		onHide(){
			clearInterval(this.surplusTimes)
		},
		methods: {
			info(id){
				
			},
			goVip(){
				uni.navigateTo({
				    url: '/pages/vip/vip',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			countDown(){  //倒计时
				let currentY = new Date().getFullYear()
				let currentM = new Date().getMonth()
				let currentD = new Date().getDate()+1
				let currentTime = new Date().getTime()
				let tomorrowTime = new Date(currentY,currentM,currentD).getTime()
				let surplusTime = parseInt((tomorrowTime - currentTime) /1000)
				let surplusH = this.zoom(parseInt(surplusTime/3600))
				let surplusF = this.zoom(parseInt((surplusTime%3600)/60))
				let surplusS = this.zoom(parseInt((surplusTime%3600%60)))
				// console.log(surplusH,surplusF,surplusS)
				this.surplusH =surplusH
				this.surplusF =surplusF
				this.surplusS =surplusS
				
			},
			zoom(num){  //补领操作
				if(num<10){
					return '0'+num
				}else{
					return num+''
				}
			},
			addCars(){ //添加购物车
				let shopingList ={
					id: this.goodSrc.id,
					name: this.goodSrc.name,
					number: 1,
					url: this.goodSrc.propaganda[0].url,
					price: parseFloat(this.goodSrc.price),
					checkeds: false,
					val: '0',
				}
				this.$store.commit('car/addCar',shopingList)
				uni.showToast({
				    title: '添加成功',
					icon: 'success',
				    duration: 2000
				})
			},
			goSettlement(){  //去结算
				
				let src = [{
					id: this.goodSrc.id,
					name: this.goodSrc.name,
					number: 1,
					url: this.goodSrc.propaganda[0].url,
					price: parseFloat(this.goodSrc.price),
					checkeds: true,
					val: '0',
				}]
				this.$store.commit('car/addOrder',src)
				uni.navigateTo({
				    url: '/pages/order/order',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			goCars(){
				uni.switchTab({
				    url: '/pages/cart/cart',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		},
		computed:{
			carNumber:function(){
				return this.$store.state.car.car.length
			}
		}
	}
</script>

<style>
.shoping{
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	position: relative;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-image:  linear-gradient(left top,#6C37B4,#E4038E);
	color: #FFFFFF;
}
.shoping-Scroll{
	width: 100%;
	height: calc(100% - var(--status-bar-height));
	padding-bottom: 100rpx;
	box-sizing: border-box;
}
/* 轮播图 */
.shoping-swipe{
	width: 100%;
	height: 700rpx;
}
.screen-swiper{
	width: 100%;
	height: 700rpx;
}
.screen-swiper image{
	width: 100%;
}
/* 抢购 */
.shoping-buy{
	width: 100%;
	height: 88rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 24rpx;
}
.shoping-buy-left{
	width: 480rpx;
	height: 88rpx;
	background: #F14143;
	padding-left: 22rpx;
	line-height: 88rpx;
	box-sizing: border-box;
	font-size: 30rpx;
	color: #FFFFFF;
	
}
.shoping-buy-left text{
	font-size: 24rpx;
	margin-left: 15rpx;
}
.shoping-buy-right{
	width: 270rpx;
	height: 88rpx;
	background: #FEEFE8;
	color: #F1627D;
	text-align: center;
	line-height: 88rpx;
	font-size: 22rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.shoping-buy-right-time{
	display: inline-block;
	width: 38rpx;
	height: 30rpx;
	background: #FD6069;
	color: #FFFFFF;
	font-size: 16rpx;
	line-height: 30rpx;
	text-align: center;
	border-radius: 5rpx;
	margin: 0 10rpx;
	
}
/* 主要商品信息 */
.shoping-name{
	width: 100%;
	height: 48rpx;
	font-size: 32rpx;
	color: #151513;
	padding-left: 20rpx;
	box-sizing: border-box;
	line-height: 48rpx;
	text-overflow: ellipsis;
	overflow: hidden;
	font-weight: 600;
}
.shoping-describe{
	width: 100%;
	height: 44rpx;
	font-size: 26rpx;
	color: #878787;
	padding-left: 20rpx;
	box-sizing: border-box;
	line-height: 44rpx;
	text-overflow: ellipsis;
	overflow: hidden;
}
.shoping-pick{
	width: 100%;
	height: 70rpx;
	font-size: 22rpx;
	color: #878787;
	padding-left: 20rpx;
	box-sizing: border-box;
	line-height: 70rpx;
	text-overflow: ellipsis;
	overflow: hidden;
	margin-bottom: 8rpx;
}
.shoping-pick text:nth-child(1){
	color: #F25D65;
}
.shoping-pick text:nth-child(2){
	color: #F25D65;
	font-size: 32rpx;
	margin-right: 12rpx;
	margin-left: 5rpx;
	font-weight: 600;
}
.shoping-pick text:nth-child(3){
	color: #8F8F8F;
	text-decoration: line-through;
}
.shoping-time{
	width: 100%;
	height: 76rpx;
	line-height: 76rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.shoping-time-list{
	width: 100%;
	height: 100%;
	border-top: 1px solid #F1F1F1;
	box-sizing: border-box;
	font-size: 22rpx;
	color: #1E1E1E;
}
.shoping-time-list text{
	font-size: 22rpx;
	color: #CBCBCB;
	margin-right: 10rpx;
}
	/* 会员卡 */
	.Index-vip{
		width: 100%;
		height: 126rpx;
		background: #F8F4F5;
		padding: 20rpx;
		box-sizing: border-box;
		box-sizing: border-box;
	}
	.Index-vip-list{
		width: 100%;
		height: 100%;
		background-image: linear-gradient(left top,#3DB762,#44CE61);
		border-radius: 10rpx;
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 86rpx;
	}
	.Index-vip-list-icon{
		width: 86rpx;
		height: 100%;
		line-height: 86rpx;
		font-size: 40rpx;
		text-align: center;
		color: #F9E974;
	}
	.Index-vip-list-icon text{
		color:  #F9E974;
	}
	.Index-vip-list-text{
		width: 450rpx;
		height: 100%;
	}
	.Index-vip-list-right{
		width: 150rpx;
		height: 100%;
	}
/* 评论 */
.shoping-comment{
	width: 100%;
	/* height: 296rpx; */
	padding-top: 16rpx;
	box-sizing: border-box;
}
.shoping-comment-name{
	width: 100%;
	height: 56rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	font-size: 30rpx;
	color: #2F2F2F;
	font-weight: 800;
	line-height: 56rpx;
}
.shoping-comment-content{
	width: 100%;
	height: 124rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.shoping-comment-content-left{
	width: 52rpx;
	height: 124rpx;
	padding-top: 12rpx;
	box-sizing: border-box;
}
.shoping-comment-content-left image{
	width: 52rpx;
	height: 52rpx;
	border-radius: 26rpx;
}
.shoping-comment-content-right{
	flex: 1;
	padding-top: 10rpx;
}
.shoping-comment-content-right-name{
	width: 100%;
	height: 42rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	color: #252525;
	font-size: 24rpx;
	line-height: 42rpx;
}
.shoping-comment-content-right-name text:nth-child(2){
	color: #9A9A9A;
	font-size: 20rpx;
}
.shoping-comment-content-right-score{
	width: 100%;
	height: 40rpx;
	line-height: 40rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.cuIcon-favorfill{
	font-size: 28rpx;
	margin-right: 10rpx;
}
.shoping-comment-content-right-score-text{
	font-size: 22rpx;
	color: #212121;
}
.shoping-comment-content-right-msg{
	width: 100%;
	min-height: 32rpx;
	line-height: 32rpx;
	font-size: 24rpx;
	color: #29292B;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.shoping-comment-move{
	width: 100%;
	height: 104rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
}
.shoping-comment-move-box{
	width: 250rpx;
	height: 54rpx;
	border: 1px solid #E0E0E0;
	border-radius: 27rpx;
	text-align: center;
	line-height: 54rpx;
	font-size: 24rpx;
	color: #727272;
}
.shoping-comment-move-box text:nth-child(1){
	margin-right: 20rpx;
}
/* 横条 */
.shoping-hr{
	width: 100%;
	height: 20rpx;
	background: #F8F4F5;
}
/* 规格 */
.shoping-Specifications-name{
	width: 100%;
	height: 76rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	font-size: 30rpx;
	color: #2F2F2F;
	font-weight: 800;
	line-height: 76rpx;
}
.shoping-Specifications-list{
	width: 100%;
	height: 88rpx;
	border-top: 1px solid #EDEDED;
	line-height: 88rpx;
	font-size: 24rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	color: ;
}
.shoping-Specifications-list-left{
	width: 210rpx;
	height: 88rpx;
	color: #606060;
}
.shoping-Specifications-list-right{
	width: 540rpx;
	height: 88rpx;
	color: #3F3F3F;
}
/* 宣传图 */
.shoping-imgs{
	width: 100%;
	overflow-x: hidden;
	font-size: 0;
	padding: 0 25rpx;
	box-sizing: border-box;
	font-size: 0;
}
.shoping-imgs image{
	width: 100%;
	height: 700rpx;
}
/* 底部 */
.shoping-foot{
	width: 100%;
	height: 100rpx;
	background: #F8F4F5;
	display: flex;
	justify-content: center;
	line-height: 100rpx;
	color: #999999;
}
.shoping-foot text{
	color: #999999;
}
.shoping-foot text:nth-child(1){
	margin-right: 20rpx;
}
.shoping-foot text:nth-child(2){
	margin-left: 20rpx;
}
/* 购物车 */
.shop{
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
}
</style>
