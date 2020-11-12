<template>
	<view class="border">
		<view class="border-head">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==Index?'text-orange cur':''" v-for="(item,index) in listAll" :key="index" @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="border-box">
			<swiper class="border-box-swiper" :current='Index' @change='swiperChange'>
			    <swiper-item>
			       <scroll-view scroll-y class="border-box-scroll" :lower-threshold='50' @scrolltolower='scrolltolower'>
						<orderList />
						<orderList />
						<orderList />
						<orderList />
						<orderList />
			       </scroll-view>
			    </swiper-item>
			    <swiper-item>
			        2
			    </swiper-item>
			    <swiper-item>
			        3
			    </swiper-item>
				<swiper-item>
				    3
				</swiper-item>
			</swiper>
			
			<!--  -->
		</view>
	</view>
</template>

<script>
	import orderList from '../../components/orderList.vue' 
	export default {
		data() {
			return {
				Index: 0,
				listAll: ['全部','待支付','待收货','待评价']
			}
		},
		onLoad(option) {
			// console.log(option.id);
			this.Index = option.id
		},
		methods: {
			tabSelect(e) {
				this.Index = e.currentTarget.dataset.id;
			},
			swiperChange(event){
				console.log(event.detail.current)
				this.Index = event.detail.current
			},
			scrolltolower(){
				console.log('触底了')
			}
		},
		components:{
			orderList
		}
	}
</script>

<style scoped>
.border{
	width: 100%;
	height: 100%;
}
.border-head{
	width: 100%;
	height: 120rpx;
	background: #FFFFFF;
}
.border-box{
	width: 100%;
	height: calc(100% - 120rpx);	
}
.border-box-scroll{
	width: 100%;
	height: 100%;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.border-box-swiper{
	width: 100%;
	height: 100%;
}
</style>
