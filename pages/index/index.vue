<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="contentBox"> 
			<!-- 定位 和 搜索 -->
			<view class="contentBox-titleFiex">
				<!-- 搜索 -->
				<view class="contentBox-titleFiex-input">
					<div class="contentBox-titleFiex-input-box" v-show ="keycodes.length> 0" >
						<text class="lg text-gray cuIcon-search"></text>
						{{keycodes.length> 0 && keycodes[0].name}}
					</div>
				</view>
			</view>
			<!-- 主体内容 -->
			
			 <scroll-view scroll-y="true" class="scroll-Y" :upper-threshold='50' :lower-threshold='50'>
				 <!-- 轮播图 -->
			       <swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
			        :autoplay="true" interval="5000" duration="600" style="height: 600rpx;">
			       	<swiper-item v-for="(item,index) in Swiper" :key="index">
			       		<image :src="item.carousel[0].url" mode="aspectFill"></image>
			       		<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
			       	</swiper-item>
			       </swiper>
				   <!-- 导航 -->
				   <view class="Index-Nav">
					   <view class="Index-Nav-List" v-for="(item,index) in oneClass" :key='index' @click="goClass(item.id)">
						   <image :src="item.image[0].url"></image>
						   <view class="Index-Nav-List-Text">
							   {{item.name}}
						   </view>
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
				   <!-- 今日疯抢 -->
				   <view class="Index-Rush">
					   <view class="Index-Rush-left">
						   <text style="color: #3ECD60;" class="lg text-gray cuIcon-titles"></text>
						   <text>今日疯抢</text>
						   <view class="shoping-buy-right">
								<text class="shoping-buy-right-time">{{surplusH}}</text>
								<text>:</text>
								<text class="shoping-buy-right-time">{{surplusF}}</text>
								<text>:</text>
								<text class="shoping-buy-right-time">{{surplusS}}</text>
						   </view>
					   </view>
					   <view class="Index-Rush-right">
					   		<!-- 更多 -->
					   </view>
				   </view>
				   <!-- 今日疯抢 滚动图 -->
				    <scroll-view class="scroll-view_H" scroll-x="true">
						<view class="scroll-view-H-Box">
							<view class="scroll-view-item_H" v-for="(item,index) in Insane" :key='index'>
								<!-- 图片 -->
								<view class="scroll-view-item_H-img">
									<image :src="item.propaganda[0].url" @click="toShoping(item.id)"></image>
								</view>
								<!-- 配文 -->	
								<view class="scroll-view-item_H-name" @click="toShoping(item.id)">
									{{item.name}}
								</view>
								<!-- 购物和价格 -->
								<view class="scroll-view-item_H-news">
									<view class="scroll-view-item_H-news-left" @click="toShoping(item.id)">
										<view class="scroll-view-item_H-news-left-top">
											￥{{ item.vip_price > 0 ? item.vip_price : item.price}}
										</view>
										<view class="scroll-view-item_H-news-left-bottom" v-show="item.vip_price > 0">
											￥{{item.price}}
										</view>
									</view>
									<view class="scroll-view-item_H-news-right" @click="addCars(item)">
										<text class="lg text-gray cuIcon-cart"></text>
									</view>
								</view>
							</view>
						</view>
				    </scroll-view>
					<!-- 横条 -->
					<view class="Index-Hr"></view>
					<!-- 猜你喜欢  顶部 -->
					<view class="Index-Rush">
						<view class="Index-Rush-left">
							<text style="color: #3ECD60;" class="lg text-gray cuIcon-titles"></text>
							<text>猜你喜欢</text>
						</view>
						<view class="Index-Rush-right">
							<!-- 更多 -->
						</view>
					</view>
					<!-- 猜你喜欢  内容-->
					<view class="Index-live">
						<!-- 列表 -->
						<view class="Index-live-list"  v-for="(item,index) in homeLiveAll" :key="index">
							<!-- 图片 -->
							<view class="Index-live-list-img" @click="toShoping(item.id)">
								<!-- <image src="https://ddimg.ddxq.mobi/02a7557cb9ab1503365698396.jpg!maicai.product.list"></image> -->
								<image :src="item.propaganda[0].url"></image>
							</view>
							<!-- 文字 -->
							<view class="Index-live-list-text" @click="toShoping(item.id)">
								<!-- 土鸡蛋 8 枚 -->
								{{item.name}}
							</view>
							<!-- 购物车和价格 -->
							<view class="Index-live-list-news">
								<view class="Index-live-list-news-left" @click="toShoping(item.id)">
									<view class="Index-live-list-news-left-pick">
										￥{{item.price}}
									</view>
									<view class="Index-live-list-news-left-vip" v-if="item.vip_price > 0">
										￥{{item.vip_price}}<text>绿卡价</text>
									</view>
								</view>
								<view class="Index-live-list-news-right" @click="addCars(item)">
									<text class="lg text-gray cuIcon-cart"></text>
								</view>
							</view>
						</view>
					</view>
			</scroll-view>
		 </view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				dotStyle: true,
				towerStart: 0,
				direction: '',
				homeLiveAll:[],
				oneClass:[] ,//首页分类
				Insane: [] ,//疯狂抢购
				surplusTimes: null,
				surplusH: 0,
				surplusF: 0,
				surplusS: 0,
				Swiper:[],
				keycodes: []
			}
		},
		onLoad() {
			this.infoLive(1)
			this.infoClass()
			this.infoInsane()
			this.infoSwips()
			let This = this
			This.countDown()
			This.surplusTimes = setInterval(function(){
				This.countDown()
			},1000)
		},
		onHide(){
			clearInterval(this.surplusTimes)
		},
		onShow() {
			let This = this
			This.countDown()
			This.surplusTimes = setInterval(function(){
				This.countDown()
			},1000)
		},
		scrolltoupper(){
			console.log('触发顶部时间')
		},
		scrolltolower(){
			console.log('触发顶部时间')
		},
		onReachBottom(){
			console.log('触底了')
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			goClass(id){  //导航到分类页
				this.$store.commit('car/setClass',id)
				uni.switchTab({
				    url: '/pages/class/class'
				});
			},
			toShoping(id){   //进入商品详情页
				uni.navigateTo({
				    url: '/pages/shoping/shoping?id='+id,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			goVip(){
				uni.navigateTo({
				    url: '/pages/vip/vip',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			infoLive(page){ //猜你喜欢
				let This = this
				this.http('nottoken/homeLive','get',{
					current:page,
					pageSize:10
				})
				.then(res=>{
					if(res.data.code === 0){
						let jsonData = res.data.data
							jsonData.map(item=>{
								item.propaganda = JSON.parse(item.propaganda)
								return item;
							})
						This.homeLiveAll = [...This.homeLiveAll,...jsonData]
						// console.log(This.homeLiveAll[0].propaganda)
					}
				})
			},
			addCars(src){ //加入购物车
				let shopingList ={
					id: src.id,
					name: src.name,
					number: 1,
					url: src.propaganda[0].url,
					price: parseFloat(src.price),
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
			infoClass(){  //获取首页分类
				this.http('nottoken/getOneClass','get',{})
					.then(res=>{
						
						this.oneClass = res.data.data.map(item=>{
							item.image = JSON.parse(item.image)
							return item;
						})
					})
			},
			infoInsane(){  //获取疯狂抢购
				this.http('nottoken/getInsane','get',{})
					.then(res=>{
						console.log(res.data)
						this.Insane = res.data.data.map(item=>{
							item.propaganda = JSON.parse(item.propaganda)
							item.price = parseFloat(item.price)
							item.vip_price = parseFloat(item.vip_price)
							return item;
						})
					})
			},
			infoSwips(){  //获取关键词和轮播图
				this.http("nottoken/getSwipers",'get',{})
					.then(res=>{
						console.log(res)
						this.Swiper = res.data.data.swipers.map(item=>{
							item.carousel = JSON.parse(item.carousel)
							return item;
						})
					
						this.keycodes =  res.data.data.keycode
						// console.log(this.keycodes[0].name)
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
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.status_bar {
		  height: var(--status-bar-height);
		  width: 100%;
		  background-image:  linear-gradient(left top,#6C37B4,#E4038E);
		  color: #FFFFFF;
	 }
	 .contentBox{
		 width: 100%;
		 height: calc(100% - var(--status-bar-height));
		 position: relative;
		 overflow: hidden;
	 }
	 /* 定位和搜索 */
	 .contentBox-titleFiex{
		width: 100%;
		height: 92rpx;
		/* background-image: linear-gradient(left top,#6C37B4,#E4038E); */
		background: rgba(255,255,255,0);
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1000;
	}
	.contentBox-titleFiex-gps{
		width: 100%;
		height: 66rpx;
		padding: 0 28rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		line-height: 66rpx;
		color: #FFFFFF;
		letter-spacing:5rpx;
		display: flex;
		
	}
	.contentBox-titleFiex-gps-box{
		flex: 1;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.contentBox-titleFiex-gps-box text:nth-child(1){
		margin-right: 10rpx;
		color: #FFFFFF;
	}
	.contentBox-titleFiex-gps-box text:nth-child(2){
		margin-left: 5rpx;
		color: #FFFFFF;
	}
	.contentBox-titleFiex-gps-news{
		width: 40px;
		height: 100%;
		text-align: center;
		position: relative;
		animation: news 1s linear  infinite alternate;
		
	}
	@keyframes news{
		0%{
			transform:rotateZ(45deg);
		},
		50%{
			transform:rotateZ(0deg);
		},
		100%{
			transform:rotateZ(-90deg);
		}
	}
	.contentBox-titleFiex-gps-news text{
		color: #FFFFFF;
		font-size: 40rpx;
	}
	.contentBox-titleFiex-gps-news text:nth-child(2){
		position: absolute;
		right: -10rpx;
		top: 5rpx;
		color: #FFFFFF;
		font-size: 10rpx;
		padding: 5rpx;
		background: #FFFFFF;
		display: inline-block;
		height: 20rpx;
		width: 20rpx;
		border-radius: 15rpx;
		line-height: 20rpx;
		text-align: center;
		color: #DE058F;
	}
	.contentBox-titleFiex-input{
		width: 100%;
		height: 92rpx;
		padding: 16rpx 18rpx;
		box-sizing: border-box;
	}
	.contentBox-titleFiex-input-box{
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
		background: #FDFFFE;
		font-size: 26rpx;
		color: #C3C5C4;
		text-align: center;
		line-height: 60rpx;
	}
	.contentBox-titleFiex-input-box text{
		margin-right: 10rpx;
	}
	
	/* 滚动区域 */
	.scroll-Y{
		width: 100%;
		height: calc(100% - var(--status-bar-height));
		overflow: hidden;
		z-index: 10;
	}
	/* 轮播图 */
	.screen-swiper{
		height: 416rpx !important;
	}
	.screen-swiper{
		height: 416rpx !important;
	}
	/* 导航 */
	.Index-Nav{
		width: 100%;
		height: 380rpx;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-flow: wrap;
	}
	.Index-Nav-List{
		width: 110rpx;
		height: 180rpx;
		padding-top: 20rpx;
		display: flex;
		justify-content: center;
		flex-flow: wrap;
		margin: 0 20rpx;
	}
	.Index-Nav-List image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		overflow: hidden;
	}
	.Index-Nav-List-Text{
		width: 100%;
		height: 58rpx;
		line-height: 58rpx;
		font-size: 24rpx;
		/* font-weight: 600; */
		color: #3C3B3B;
		overflow: hidden;
		text-align: center;
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
	/* 今日疯抢 */
	.Index-Rush{
		width: 100%;
		height: 102rpx;
		padding: 24rpx 20rpx 24rpx 15rpx;
		box-sizing: border-box;
		display: flex;
	}
	.Index-Rush-left{
		flex: 1;
		line-height: 54rpx;
		font-size: 36rpx;
		letter-spacing: 3rpx;
		font-weight: 700;
		display: flex;
		
	}
	.Index-Rush-right{
		width: 100rpx;
		height: 100%;
		line-height: 34rpx;
		font-size: 26rpx;
		color: #5BB384;
		font-weight: 600;
	}
	/* 今日疯抢 滚动图 */
	.scroll-view_H{
		height: 356rpx;
		width: 100%;
	}
	/* 要根据返回数量的多少调整盒子宽度 */
	.scroll-view-H-Box{
		height: 356rpx;
		width: 1320rpx;
		/* width: auto; */
		display: flex;
		justify-content: flex-start;
		
	}
	.scroll-view-item_H{
		width: 220rpx;
		height: 356rpx;
		/* float: left; */
		
	}
	/* .scroll-view-item_H:nth-child(1){
		background: #1CBBB4;
	} */
	.scroll-view-item_H-img{
		width: 220rpx;
		height: 190rpx;
		padding: 10rpx 20rpx 20rpx 20rpx;
		box-sizing: border-box;
	}
	.scroll-view-item_H-img image{
		width: 100%;
		height: 100%;
	}
	.scroll-view-item_H-name{
		width: 100%;
		height: 64rpx;
		line-height: 32rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertic;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #101010;
	}
	.scroll-view-item_H-news{
		width: 100%;
		height: 106rpx;
		display: flex;
		justify-content:space-between;
	}
	.scroll-view-item_H-news-left{
		width: 130rpx;
		height: 100%;
		padding-top: 20rpx;
		box-sizing: border-box;
	}
	.scroll-view-item_H-news-left-top{
		width: 100%;
		height: 38rpx;
		line-height: 38rpx;
		color: #F15C6B;
		font-size: 28rpx;
		text-align: center;
	}
	.scroll-view-item_H-news-left-bottom{
		width: 100%;
		height: 26rpx;
		line-height: 26rpx;
		color: #A8A8A8;
		font-size: 17rpx;
		text-align: center;
		text-decoration: line-through;
	}
	.scroll-view-item_H-news-right{
		width: 82rpx;
		height: 100%;
		text-align: center;
		padding: 10rpx;
		box-sizing: border-box;
	}
	.scroll-view-item_H-news-right text{
		width: 60rpx;
		height: 60rpx;
		background: #3BB86A;
		border-radius: 30rpx;
		display: inline-block;
		line-height: 60rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}
	/* 横条 */
	.Index-Hr{
		width: 100%;
		height: 20rpx;
		background: #F8F4F5;
	}
	/* 猜你喜欢 */
	.Index-live{
		width: 100%;
		padding: 0 18rpx 18rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-flow: wrap;
	}
	.Index-live-list{
		width: 350rpx;
		height: 550rpx;
		box-shadow: 0 0 5rpx #EEEEEE;
		border: 1px solid #EEEEEE;
		border-radius: 10rpx;
		padding: 0rpx 20rpx 0rpx 20rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
	}
	.Index-live-list-img{
		width: 100%;
		height: 340rpx;
		padding: 40rpx 5rpx;
		box-sizing: border-box;
	}
		
	.Index-live-list-img image{
		width: 100%;
		height: 100%;
	}
	.Index-live-list-text{
		width: 100%;
		height: 70rpx;
		line-height: 35rpx;
		color: #101010;
		font-size: 25rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertic;
	}
	.Index-live-list-news{
		width: 100%;
		height: 136rpx;
		display: flex;
		justify-content: space-between;
	}
	.Index-live-list-news-left{
		width: 230rpx;
		height: 100%;
		overflow: hidden;
		/* display: flex;
		flex-direction:column;
		justify-content:flex-start;
		align-items:center;
		flex-flow: wrap; */
		padding-top: 40rpx;
		box-sizing: border-box;
		/* display: flex;
		align-items: center;
		flex-flow: wrap; */
	}
	.Index-live-list-news-left-pick{
		width: 100%;
		height: 38rpx;
		color: #F45A6C;
		font-size: 27rpx;
		font-weight: 600;
		line-height: 38rpx;
		
	}
	.Index-live-list-news-left-vip{
		width: 100%;
		height: 40rpx;
		color: #30BD4C;
		font-size: 22rpx;
		line-height: 40rpx;
		
		
	}
	.Index-live-list-news-left-vip text{
		background: #30BD4C;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 5rpx 10rpx;
		margin-left: 10rpx;
	}
	.Index-live-list-news-right{
		width: 78rpx;
		height: 100%;
		overflow: hidden;
		padding-top: 40rpx;
		box-sizing: border-box;
	}
	.Index-live-list-news-right text{
		width: 60rpx;
		height: 60rpx;
		display: inline-block;
		background: #47C470;
		border-radius: 30rpx;
		text-align: center;
		line-height: 60rpx;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	.shoping-buy-right{
		width: 270rpx;
		height: 54rpx;
/* 		background: #FEEFE8; */
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
</style>
