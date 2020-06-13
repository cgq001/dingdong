<template>
	<view class="setaddress">
		<view class="setaddress-box">
			<view class="setaddress-box-list" @click="openAddress">
				<view class="setaddress-box-list-name">
					地址
				</view>
				<view class="setaddress-box-list-input">
					<!-- 选择详细地址 -->
					<text class="setaddress-box-list-input-address">{{addressCity}}</text>
					<!-- <input class="setaddress-box-list-input-lis" maxlength="20" placeholder="选择详细地址" /> -->
				</view>
				<view class="setaddress-box-list-icon">
					<!--   -->
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="setaddress-box-list">
				<view class="setaddress-box-list-name">
					详细地址
				</view>
				<view class="setaddress-box-list-input">
					<!-- 选择详细地址 -->
					<input class="setaddress-box-list-input-lis" maxlength="20" placeholder="选择详细地址" />
				</view>
				<view class="setaddress-box-list-icon">
					<!--  @click="goMap" -->
					<!-- <text class="lg text-gray cuIcon-right"></text> -->
				</view>
			</view>
<!-- 			<view class="setaddress-box-list">
				<view class="setaddress-box-list-name">
					备注
				</view>
				<view class="setaddress-box-list-input">
					<input class="setaddress-box-list-input-lis" maxlength="20" placeholder="例: 15栋3层3113室" />
				</view>
				<view class="setaddress-box-list-icon">
				
				</view>
			</view> -->
			<view class="setaddress-box-list">
				<view class="setaddress-box-list-name">
					收货人
				</view>
				<view class="setaddress-box-list-input">
					<input class="setaddress-box-list-input-lis" maxlength="11" placeholder="收货人姓名" />
				</view>
				<view class="setaddress-box-list-icon">
					
				</view>
			</view>
			<view class="setaddress-box-list">
				<view class="setaddress-box-list-name">
					
				</view>
				<view class="setaddress-box-list-input">
					<label class="radio setaddress-box-list-input-radio">
						<radio class="setaddress-box-list-input-radio-radio" color='#3ECB30' value="r1" checked="true" />
						<text class="setaddress-box-list-input-radio-text">先生</text>
					</label>
					<label class="radio setaddress-box-list-input-radio">
						<radio class="setaddress-box-list-input-radio-radio" color='#3ECB30' value="r2" />
						<text class="setaddress-box-list-input-radio-text">女士</text>
					</label>
				</view>
				<view class="setaddress-box-list-icon">
					
				</view>
			</view>
			<view class="setaddress-box-list">
				<view class="setaddress-box-list-name">
					手机号
				</view>
				<view class="setaddress-box-list-input">
					<input class="setaddress-box-list-input-lis" type="number" maxlength="11" placeholder="收货人手机号" />
				</view>
				<view class="setaddress-box-list-icon">
					
				</view>
			</view>
		</view>
		<!-- 提交地址 -->
		<view class="setaddress-submit">
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-gradual-green margin-tb-sm lg">保存</button>
				<button class="cu-btn bg-gradual-red margin-tb-sm lg">删除</button>
			</view>
		</view>
		<!-- 选择地址 -->
		<u-picker 
			mode="region" 
			v-model="show"  
			:area-code='["13", "1303", "130304"]'
			@confirm='confirmAddress'></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				addressCity: '请选择地址'
			}
		},
		methods: {
			goMap(){
				uni.navigateTo({
				    url: '/pages/map/map'
				});
			},
			openAddress(){
				this.show = true
			},
			confirmAddress(str){
				console.log(str)
				let srcNumber = [str.province.value ,str.city.value , str.area.value]
				let srcAdder = [str.province.label ,str.city.label , str.area.label ]
				console.log(srcAdder,srcNumber)
				this.addressCity = srcAdder.join('-')
			}
		}
	}
</script>

<style scoped>
.setaddress{
	width: 100%;
	height: 100%;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.setaddress-box{
	background: #FFFFFF;
}
.setaddress-box-list{
	width: 100%;
	height: 104rpx;
	border-bottom: 1rpx solid #F7F7F7;
	display: flex;
	justify-content: space-between;
}
.setaddress-box-list:nth-last-child(1){
	border-bottom-color: #FFFFFF;
}
.setaddress-box-list-name{
	width: 150rpx;
	padding-left: 30rpx;
	color: #01000A;
	font-size: 28rpx;
	line-height: 104rpx;
	font-weight: bold;
}
.setaddress-box-list-input{
	flex: 1;
	height: 104rpx;
	line-height: 104rpx;
	color: #8C8C8C;
	padding-left: 15rpx;
	box-sizing: border-box;
}
.setaddress-box-list-input-address{
	font-size: 32rpx;
}
.setaddress-box-list-input-lis{
	width: 100%;
	height: 100%;
	/* background: #007AFF; */
}
.setaddress-box-list-input-radio{
	margin-right: 80rpx;
}
.setaddress-box-list-input-radio-radio{
	color: #3ECB30;
}
.setaddress-box-list-input-radio-text{
	margin-left: 15rpx;
}
.setaddress-box-list-icon{
	width: 77rpx;
	line-height: 104rpx;
	height: 104rpx;
	text-align: center;
}
/* 提交地址 */
.setaddress-submit{
	width: 100%;
	height: auto;
}
</style>
