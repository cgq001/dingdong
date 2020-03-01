<template>
	<view class="address">
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  :switchable='shows != 1'
		  default-tag-text="默认"
		  @add="onAdd"
		  @edit="onEdit"
		  @select='selectAddress'
		/>
		<!-- 添加地址 -->
		<!-- <view class="padding flex flex-direction add-address">
			
			<button class="cu-btn bg-blue margin-tb-sm lg"><text class="cuIcon-add"></text> &nbsp;&nbsp;&nbsp;&nbsp;添加地址</button>
		</view> -->
	</view>
</template>

<script>
	export default {
	  data() {
	    return {
	      chosenAddressId: 1,
	      list: [
	        {
	          id: '1',
	          name: '张三',
	          tel: '13000000000',
	          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
	        },
	        {
	          id: '2',
	          name: '李四',
	          tel: '1310000000',
	          address: '浙江省杭州市拱墅区莫干山路 50 号'
	        }
	      ],
		  shows: 0
	    }
	 },
	
	 onLoad(options) {
		 this.shows = options.shows || 0
	 	this.chosenAddressId = parseInt(options.id)
		this.https('index/searchAddress','get',{})
			.then(res=>{
				console.log(res)
				let list = []
					for(let i=0;i<res.data.data.length;i++){
						let listJson ={
							id: res.data.data[i].id,
							tel: res.data.data[i].address_phone,
							name: res.data.data[i].address_name,
							address: res.data.data[i].address_province+res.data.data[i].address_city+res.data.data[i].address_county+res.data.data[i].address_addressDetail
						}
						list.push(listJson)
					}
					this.list = list
			})
	 },
	  methods: {
	    onAdd() {
	      uni.redirectTo({  
				 url: '/pages/addressEdit/addressEdit',
				animationType: 'pop-in',
				animationDuration: 200
	      })
	    },
	    onEdit(item, index) {
	       uni.redirectTo({
	       		url: '/pages/addressEdit/addressEdit?id='+item.id+'&shows='+this.shows,
				animationType: 'pop-in',
				animationDuration: 200
	       })
	    },
		selectAddress(item,index){
			uni.navigateTo({
					url: '/pages/order/order?id='+item.id,
							animationType: 'pop-in',
							animationDuration: 200
			})
		}
	  }
	}
</script>

<style>
.address{
	width: 100%;
	min-height: 100vh;
	background: #FFFFFF;
	position: relative;
}
.add-address{
	position: absolute;
	left: 0;
	bottom: 50rpx;
	width: 750rpx;
}
</style>
