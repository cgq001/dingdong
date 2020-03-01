<template>
	<view>
		<van-address-edit
		  :area-list="areaList"
		  :address-info='address_info'
		  show-delete
		  :search-result="searchResult"
		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
		  @delete="onDelete"
		/>
	</view>
</template>

<script>
	import areaList from '../../static/lib/area'
	export default {
	  data() {
	    return {
	      areaList,
	      searchResult: [],
		  address_info:{},
		  ids: -1,
		  shows: 0
	    }
	  },
	  onLoad(option) {
	  	let This = this
		if(option.id){
			this.ids = option.id
			this.shows = option.shows
			this.https('index/searchAddressId','get',{
				id: option.id
			}).then(res=>{
				console.log(res.data.data)
				let src ={
					id: res.data.data.id,
					name: res.data.data.address_name,
					tel: res.data.data.address_phone,
					province: res.data.data.address_province,
					city: res.data.data.address_city,
					county: res.data.data.address_county,
					addressDetail: res.data.data.address_addressDetail,
					areaCode: res.data.data.address_areacode
				}
				This.address_info = src
			})
		}
	  },
	  methods: {
	    onSave(src) {  //添加或修该地址
		
		let srcJson ={
			id: src.id,
			address_name: src.name,
			address_phone: src.tel,
			address_province: src.province,
			address_city: src.city,
			address_county: src.county,
			address_addressDetail: src.addressDetail,
			address_areacode:src.areaCode
		}
		  this.https('index/address','post',srcJson)
				.then(res=>{
					uni.redirectTo({
						 url: '/pages/address/address?id='+this.ids+'&shows='+this.shows,
						animationType: 'pop-in',
						animationDuration: 200
					})
				})
				.catch(err=>{
					console.log(err)
				})
	    },
	    onDelete() {
	      Toast('delete');
	    },
	    onChangeDetail(val) {
	      if (val) {
			  console.log(val)
	        this.searchResult = [{
	         
	        }];
	      } else {
	        this.searchResult = [];
	      }
	    }
	  }
	}
</script>

<style>

</style>
