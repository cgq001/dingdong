<template>
	<view class="class">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<!-- 分栏滚动 -->
		<view class="contentBox">
			<!-- 搜索 -->
			<view class="contentBox-titleFiex-input">
				<div class="contentBox-titleFiex-input-box">
					<text class="lg text-gray cuIcon-search"></text>
					番茄
				</div>
			</view>
			<!-- 滚动区域 -->
			<view class="class-scroll">
				<!-- 左侧 -->
				<scroll-view class="class-scroll-left" scroll-y="true">
					<view class="class-scroll-left-list" v-for="(item,index) in classAll" :key="index" :style="item.id ===indexs && 'background: #FFFFFF;'" @click="infoGoodsId(item.id)">
						{{item.name}}
					</view>
				</scroll-view>
				<!-- 右侧 -->
				<scroll-view class="class-scroll-right" scroll-y="true">
					<!-- 标题 -->
					<view class="class-scroll-right-title">{{className}}</view>
					<!-- 列表 -->
					<view class="class-scroll-right-list" v-for="(item,index) in goodsAll" :key='index'>
						<view class="class-scroll-right-list-left" @click="toShoping(item.id)">
							<image :src="item.propaganda[0].url"></image>
						</view>
						<view class="class-scroll-right-list-right">
							<view class="class-scroll-right-list-right-name" @click="toShoping(item.id)">{{item.name}}</view>
							<view class="class-scroll-right-list-right-nameTwo" @click="toShoping(item.id)">{{item.bewrite}}</view>
							<view class="class-scroll-right-list-right-news">
								<view class="class-scroll-right-list-right-news-left" @click="toShoping(item.id)">
									<view class="class-scroll-right-list-right-news-pick">￥ {{item.price}}</view>
									<view class="class-scroll-right-list-right-news-vip" v-show="parseFloat(item.vip_price)>0">
										￥ {{item.vip_price}} <text>绿卡价</text>
										</view>
								</view>
								<view class="class-scroll-right-list-right-news-right" @click="addCars(item)">
									<text class="lg text-gray cuIcon-cart"></text>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 暂无数据 -->
					<view class="class-scroll-right-404">
						我也是有底线的~
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classAll:[],
				goodsAll:[],
				indexs: -1
			}
		},
		onLoad() {
			this.infoClass()
			
			this.indexs = this.$store.state.car.classIndex
		},
		onShow() {
			if(this.$store.state.car.classIndex >-1){
				this.indexs = this.$store.state.car.classIndex
			}
			
		},
		methods: {
			infoClass(){
				this.http('nottoken/getAllClass','get',{})
					.then(res=>{
						console.log(res.data)
						this.classAll = res.data.data.class
						
						if(this.indexs === -1){
							this.indexs = res.data.data.class[0].id
							this.goodsAll = res.data.data.goods.map(item=>{
								item.propaganda = JSON.parse(item.propaganda)
								return item
							})
						}else{
							this.infoGoods(this.indexs)
						}
					})
			},
			infoGoods(id){
				 this.http('nottoken/getOneAllGoods','get',{
				 	id: id
				 })
				 .then(res=>{
				 	this.goodsAll = res.data.data.map(item=>{
				 		item.propaganda = JSON.parse(item.propaganda)
				 		return item
				 	})
					this.indexs = id
				})
			},
			infoGoodsId(id){
				 
					this.indexs = id
			
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
			toShoping(id){   //进入商品详情页
				uni.navigateTo({
				    url: '/pages/shoping/shoping?id='+id,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
		},
		computed:{
			className: function(){
				if(this.classAll.length > 0){
					let nameAll = this.classAll.filter(item=>{
						return item.id === this.indexs
					})
					
					return nameAll[0].name;
				}else{
					return '';
				}
			}
		},
		watch:{
			indexs:function(){
				this.infoGoods(this.indexs)
			}
		}
	}
</script>

<style>
.class{
	width: 100%;
	height: 100%;
	overflow: hidden;
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
	overflow: hidden;
}
/* 搜索 */
.contentBox-titleFiex-input{
	width: 100%;
	height: 92rpx;
	background: #FFFFFF;
	padding: 16rpx 18rpx;
	box-sizing: border-box;
}
.contentBox-titleFiex-input-box{
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
		background: #F2F2F2;
		font-size: 26rpx;
		color: #B4B4B4;
		text-align: center;
		line-height: 60rpx;
}
.contentBox-titleFiex-input-box text{
		margin-right: 10rpx;
		color: #B6B6B6;
}
/* 滚动区域 */
.class-scroll{
	width: 100%;
	height: calc(100% - 92rpx);
	overflow: hidden;
	display: flex;
	justify-content: space-between;
}
.class-scroll-left{
	width: 228rpx;
	height: 100%;
	background: #F7F7F7;
}
.class-scroll-left-list{
	width: 100%;
	border-top: 1px solid #EFEFEF;
	box-sizing: border-box;
	font-size: 24rpx;
	text-align: center;
	line-height: 110rpx;
	height: 110rpx;
	color: #3E3D3D;
}
	
.class-scroll-left .class-scroll-left-list:nth-child(1){
	border:none;
}
.class-scroll-right{
	width: 520rpx;
	height: 100%;
	background: #FFFFFF;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.class-scroll-right-title{
	width: 100%;
	height: 76rpx;
	border-bottom: 1px solid #EFEFEF;
	font-size: 24rpx;
	line-height: 76rpx;
	color: #5E5E5E;
}
.class-scroll-right-list{
	width: 100%;
	height: 270rpx;
	border-bottom: 1px solid #EFEFEF;
	display: flex;
	justify-content: space-between;
}
.class-scroll-right-list-left{
	width: 156rpx;
	height: 270rpx;
	padding: 50rpx 0;
	box-sizing: border-box;
}
.class-scroll-right-list-left image{
	width: 156rpx;
	height: 100%;
}
.class-scroll-right-list-right{
	width: 410rpx;
	height: 270rpx;
	padding: 25rpx 20rpx 0 22rpx;
	box-sizing: border-box;
	
}
.class-scroll-right-list-right-name{
	width: 100%;
	height: 38rpx;
	color: #373737;
	font-size: 26rpx;
	line-height: 38rpx;
	text-overflow: ellipsis;
	/* white-space:nowrap; */
	overflow: hidden;
}
.class-scroll-right-list-right-nameTwo{
	width: 100%;
	height: 34rpx;
	color: #8C8C8C;
	font-size: 22rpx;
	line-height: 34rpx;
	text-overflow: ellipsis;
	/* white-space:nowrap; */
	overflow: hidden;
}
.class-scroll-right-list-right-news{
	width: 100%;
	height: 140rpx;
	display: flex;
	justify-content: space-between;
}
.class-scroll-right-list-right-news-left{
	flex: 1;
	height: 140rpx;
	padding-top: 30rpx;
}
.class-scroll-right-list-right-news-pick{
	width: 100%;
	height: 36rpx;
	font-size: 28rpx;
	line-height: 36rpx;
	color: #FF4F67;
	font-weight: 600;
}
.class-scroll-right-list-right-news-vip{
	width: 100%;
	height: 30rpx;
	font-size: 22rpx;
	line-height: 30rpx;
	color: #4ABC69;
	font-weight: 600;
	padding-left: 10rpx;
	box-sizing: border-box;
}
.class-scroll-right-list-right-news-vip text{
	background: #4ABC69;
	color: #FFFFFF;
	font-size: 16rpx;
	padding: 5rpx 10rpx;
	margin-left: 10rpx;
}
.class-scroll-right-list-right-news-right{
	width: 60rpx;
	padding-top: 36rpx;
	box-sizing: border-box;
}
.class-scroll-right-list-right-news-right text{
	width: 60rpx;
	height: 60rpx;
	display: inline-block;
	background: #47C470;
	color: #FFFFFF;
	font-size: 30rpx;
	text-align: center;
	line-height: 60rpx;
	border-radius: 30rpx;
}
.class-scroll-right-404{
	width: 100%;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	font-size: 26rpx;
	color: #999999;
}
</style>
