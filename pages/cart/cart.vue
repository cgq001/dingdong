<template>
	<view class="classBox">
		<!-- <view class="status_bar">
		          
		</view> -->
		<scroll-view scroll-y="true" class="classBoxScroll">
			<!-- 购物车 -->
			<view class="classBoxs">
					<!-- 购物车列表 radio-group-->
					<view class="classBoxs-list" v-for="(item,index) in carList" :key='index'>
						<view class="uni-list-cell uni-list-cell-pd classBoxs-list-label">
							<view @click="radioChange(item.id)" :class="item.checkeds ? 'classBoxs-list-left lg text-blue cuIcon-roundcheckfill' : 'classBoxs-list-left lg  text-gray cuIcon-round' ">
								<!-- <radio :value="item.val" :checked="item.checkeds"/> -->
							</view>
							<view class="classBoxs-list-right">
								<view class="classBoxs-list-right-left">
									<image :src="item.url"></image>
								</view>
								<view class="classBoxs-list-right-right">
									<view class="classBoxs-list-right-right-name">{{item.name}}</view>
									<view class="classBoxs-list-right-right-cant">
										<view class="classBoxs-list-right-right-cant-left">￥{{item.price}}</view>
										<view class="classBoxs-list-right-right-cant-right">
											<text class="lg text-gray cuIcon-move" @click="removeNumber(item.id)"></text>
											<text>{{item.number}}</text>
											<text class="lg text-gray cuIcon-add" @click="addNumber(item.id)"></text>
										</view>
									</view>
								</view>
							</view>
						</view>
					 </view>
					
					  
			</view>
			<view class="classBoxs-emptys" v-if="carList.length === 0">
				<image src="../../static/imgs/car.png"></image>
				<navigator class="classBoxs-emptys-btns" url="../index/index" open-type="switchTab">
					去逛逛
				</navigator>
			</view>
			<!-- 猜你喜欢 -->
			 <view class="classBoxLive">
					<text class="lg text-gray cuIcon-title"></text>
					<text>猜你喜欢</text>
					<text class="lg text-gray cuIcon-title"></text>
			</view>
			<view class="Index-live">
				<!-- 列表 -->
				<view class="Index-live-list" v-for="(item,index) in goodList" :key='index'>
					<!-- 图片 -->
					<view class="Index-live-list-img" @click="toShoping(item.id)">
						<image :src="item.propaganda[0].url"></image>
					</view>
					<!-- 文字 -->
					<view class="Index-live-list-text" @click="toShoping(item.id)">
						{{item.name}}
					</view>
					<!-- 购物车和价格 -->
					<view class="Index-live-list-news">
						<view class="Index-live-list-news-left" @click="toShoping(item.id)">
							<view class="Index-live-list-news-left-pick">
								￥{{item.price}}
							</view>
							<view class="Index-live-list-news-left-vip" v-show="item.vip_price > 0">
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
		<view class="cu-bar bg-white tabbar border shop cartFoots">
			<button class="action" open-type="contact" @click="allCheck">
				<view   :class="$store.state.car.allCheck ? 'lg text-blue cuIcon-roundcheckfill' : 'lg text-gray cuIcon-round' ">
					
				</view>全选
			</button>
			<view class="action">
				
			</view>
			<view class="btn-group">
				<!-- <button class="cu-btn bg-orange round shadow-blur">加入购物车</button> -->
				<view class="cuBtnRound">合计：{{$store.state.car.allPrice.toFixed(2)}}元</view>
				<button class="cu-btn bg-red round shadow-blur" @click="goSettlement">去结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1:'123',
				page: 1,
				pageSize: 10,
				goodList:[]
			}
		},
		computed:{
			carList:function(){
				return this.$store.state.car.car
			}
		},
		onLoad() {
			let Token = this.$store.state.user.token
			if(!Token){
				uni.showModal({
				    title: '温馨提示',
				    content: '你还没有登陆,现在去登陆?',
				    success: function (res) {
				        if (res.confirm) {
				           uni.redirectTo({
				               url: '/pages/login/login'
				           });
				        } else if (res.cancel) {
				            uni.switchTab({
				                url: '/pages/index/index'
				            });
				        }
				    }
				});
			}
			this.infoGoods(1)
		},
		methods: {
			radioChange(id){  //是否选中
				this.$store.commit('car/changeRadio',id)
			},
			goSettlement(){  //去结算
			
				let carAlls = this.$store.state.car.car
				let src = carAlls.filter(item=>{
						return item.checkeds === true
					})
					
				if(src.length === 0){
					uni.showToast({
					    title: '请先选择商品',
						icon: 'none',
					    duration: 2000
					})
				}else{
					this.$store.commit('car/addOrder',src)
					uni.navigateTo({
					    url: '/pages/order/order',
						animationType: 'pop-in',
						animationDuration: 200
					})
				}
				
			},
			removeNumber(id){  // --
				this.$store.commit('car/removeNumber',id)
			},
			addNumber(id){  // ++
				this.$store.commit('car/addNumber',id)
			},
			allCheck(){  //全选
				this.$store.commit('car/allCheck')
			},
			infoGoods(page){
				this.http('nottoken/getBuyGoods','get',{
					current: page,
					pageSize: this.pageSize
				})
				.then(res=>{
					let newGoods= res.data.data.map(item=>{
						item.propaganda = JSON.parse(item.propaganda)
						return item;
					})
					this.goodList = [...this.goodList,...newGoods]
				})
			},
			toShoping(id){   //进入商品详情页
				uni.navigateTo({
				    url: '/pages/shoping/shoping?id='+id,
					animationType: 'pop-in',
					animationDuration: 200
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
		}
	}
</script>

<style>
.classBox{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-image:  linear-gradient(left top,#6C37B4,#E4038E);
	color: #FFFFFF;
}
.classBoxScroll{
	width: 100%;
	height: calc(100% - var(--status-bar-height));
	overflow: hidden;
	padding-bottom: 100rpx;
	
	box-sizing: border-box;
}
.classBoxs{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	margin-top: 20rpx;
}
/* 购物车 */
.classBoxs-list{
	width: 100%;
	height: 200rpx;
	
}
.classBoxs-list:last-child .classBoxs-list-right{
	border-bottom: none;
}
.classBoxs-list-label{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content:space-between;
}
.classBoxs-list-left{
	width: 90rpx;
	height: 200rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 46rpx;
}
.classBoxs-list-right{
	width: 650rpx;
	height: 200rpx;
	border-bottom: 1px solid #EFEFEF;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.classBoxs-list-right-left{
	width: 145rpx;
	height: 200rpx;
	padding: 25rpx 0rpx;
	box-sizing: border-box;
}
.classBoxs-list-right-left image{
	/* width: 100%; */
	height: 100%;
	
}
.classBoxs-list-right-right{
	width: 500rpx;
	height: 200rpx;
	padding-left: 25rpx;
	padding-top: 24rpx;
	padding-right: 15rpx;
	box-sizing: border-box;
}
.classBoxs-list-right-right-name{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	font-size: 24rpx;
	color: #262626;
	text-overflow: ellipsis;
	overflow: hidden;
	font-weight: 600;
	margin-bottom: 60rpx;
}
.classBoxs-list-right-right-cant{
	width: 100%;
	height: 44rpx;
	display: flex;
	justify-content: space-between;
}
.classBoxs-list-right-right-cant-left{
	width: auto;
	height: 44rpx;
	font-weight: 700;
	font-size: 26rpx;
	color: #212121;
	flex: 1;
}
.classBoxs-list-right-right-cant-right{
	width: 178rpx;
	height: 44rpx;
	display: flex;
	justify-content: space-between;
}
.classBoxs-list-right-right-cant-right text:nth-child(1){
	width: 44rpx;
	height: 44rpx;
	font-size: 30rpx;
	text-align: center;
	line-height: 44rpx;
	display: inline-block;
	color: #4C4C4C;
}
.classBoxs-list-right-right-cant-right text:nth-child(2){
	width: 76rpx;
	height: 44rpx;
	font-size: 30rpx;
	text-align: center;
	line-height: 44rpx;
	display: inline-block;
	background: #F9F9F9;
	color: #1B1B1B;
}
.classBoxs-list-right-right-cant-right text:nth-child(3){
	width: 44rpx;
	height: 44rpx;
	font-size: 30rpx;
	text-align: center;
	line-height: 44rpx;
	display: inline-block;
	color: #4C4C4C;
}
/* 猜你喜欢 */
.classBoxLive{
	width: 100%;
	height: 72rpx;
	padding-top: 10rpx;
	text-align: center;
	line-height: 62rpx;
	font-size: 30rpx;
	color: #0A0A0A;
}
.classBoxLive text:nth-child(1){
	color: #585858;
}
.classBoxLive text:nth-child(3){
	color: #585858;
}

/* 猜你喜欢列表 */
.Index-live{
		width: 100%;
		padding:  18rpx;
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
		background: #FFFFFF;
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
		padding-top: 50rpx;
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
	/* 空的购物车 */
	.classBoxs-emptys{
		width: 100%;
		height: 750rpx;
		padding-top: 100rpx;
		background: #F5F5F5;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.classBoxs-emptys image{
		width: 600rpx;
	}
	.classBoxs-emptys-btns{
		width: 300rpx;
		height: 80rpx;
		border-radius: 40rpx;
		color: #FFFFFF;
		background: #45C763;
		text-align: center;
		line-height: 80rpx;
		font-size: 36rpx;
	}
</style>
