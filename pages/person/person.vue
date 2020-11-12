<template>
	<view class="person">
		<view class="person-box">
			<view class="person-box-list person-image" @click="goImage">
				<view class="person-box-list-left">
					头像
				</view>
				<view class="person-box-list-right person-image-box">
					<image src="../../static/image/characteristic/00-07-56.png"></image>
				</view>
			</view>
			<view class="person-box-list" @click="goNickname">
				<view class="person-box-list-left">
					昵称
				</view>
				<view class="person-box-list-right">
					<text>小屁登</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="person-box-list" @click="goGender">
				<view class="person-box-list-left">
					性别
				</view>
				<view class="person-box-list-right">
					<text>女</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="person-box-list" @click="timeShow = true">
				<view class="person-box-list-left">
					生日
				</view>
				<view class="person-box-list-right">
					<text>2000年1月1日</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="person-box-list"  @click="goPhone">
				<view class="person-box-list-left">
					手机号
				</view>
				<view class="person-box-list-right">
					<text>15639762230</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="person-box-list">
				<view class="person-box-list-left">
					绑定QQ账号
				</view>
				<view class="person-box-list-right">
					<text>已绑定</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
		</view>
		<!-- 时间选择器 -->
		<u-picker v-model="timeShow" mode="time" @confirm='selectTime'></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeShow: false
			}
		},
		methods: {
			// 选择生日时间
			selectTime(time){
				console.log(time)
			},
			// 去修该昵称
			goNickname(){
				uni.navigateTo({
				    url: '/pages/nickname/nickname'
				});
			},
			// 去修该手机号
			goPhone(){
				uni.navigateTo({
				    url: '/pages/phone/phone'
				});
			},
			// 去修该性别
			goGender(){
				uni.navigateTo({
				    url: '/pages/gender/gender'
				});
			},
			// 去修该头像
			goImage(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>

<style scoped>
.person{
	width: 100%;
	height: 100%;
	padding-top: 20rpx;
	box-sizing: border-box;
	background: #F5F5F5;
}
.person-box{
	background: #FFFFFF;
	padding-left: 30rpx;
	box-sizing: border-box;
}
.person-box-list{
	width: 100%;
	border-bottom: 1rpx solid #F3F3F3;
	display: flex;
	justify-content: space-between;
	height: 95rpx;
	line-height: 95rpx;
}
.person-box-list:nth-last-child(1){
	border-bottom-color: #FFFFFF;
}
.person-box-list-left{
	width: 280rpx;
	height: 100%;
	font-size: 30rpx;
	color: #000000;
}
.person-box-list-right{
	flex: 1;
	height: 100%;
	padding-right: 30rpx;
	height: 95rpx;
	display: flex;
	justify-content: flex-end;
}
.person-box-list-right text:nth-child(1){
	color: #646464;
	font-size: 22rpx;
}
.person-box-list-right text:nth-child(2){
	color: #BFBFBF;
	font-size: 28rpx;
	margin-left: 10rpx;
}
.person-image{
	height: 126rpx;
	line-height: 126rpx;
}
.person-image-box{
	padding-top: 15rpx;
	box-sizing: border-box;
}
.person-image-box image{
	width: 96rpx;
	height: 96rpx;
	border-radius: 48rpx;
	overflow: hidden;
}
</style>
