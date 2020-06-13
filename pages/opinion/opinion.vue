<template>
	<view class="opinion">
		<!-- 文字描述 -->
		<view class="opinion-text">
			<!-- 名称 -->
			<view class="opinion-text-name">
				<view class="opinion-text-name-left">
					<text class="lg text-gray cuIcon-title"></text>
				</view>
				<view class="opinion-text-name-right">
					请描述你遇到的问题
				</view>
			</view>
			<!-- 列表 -->
			<view class="opinion-text-box">
				<view class="opinion-text-box-list">
					发票问题
				</view>
				<view class="opinion-text-box-list">
					配送问题
				</view>
				<view class="opinion-text-box-list">
					活动问题
				</view>
				<view class="opinion-text-box-list">
					商品问题
				</view>
				<view class="opinion-text-box-list">
					意见反馈
				</view>
				<view class="opinion-text-box-list">
					支付问题
				</view>
				<view class="opinion-text-box-list">
					APP问题
				</view>
			</view>
			<!-- 内容输入区域 -->
			<view class="opinion-text-textarea">
				 <textarea class="opinion-text-textarea-box" placeholder="描述你的问题"/>
			</view>
		</view>
		<!-- 图片 -->
		<view class="opinion-image">
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传(不超过3张)
				</view>
				<view class="action">
					1/3
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 提交 -->
		<view class="opinion-submit">
			<view class="opinion-submit-btn">提交反馈</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[]
			}
		},
		methods: {
			DelImg(){
				
			},
			ChooseImage(){
				
			},
			ViewImage(){
				
			}
		}
	}
</script>

<style scoped>
.opinion{
	width: 100%;
	min-height: 100%;
	padding-top: 20rpx;
	box-sizing: border-box;
}
/* 文字描述 */
.opinion-text{
	width: 100%;
	height: auto;
	border-top: 2rpx solid #E9E9E9;
	border-bottom: 2rpx solid #E9E9E9;
	background: #FFFFFF;
	padding-bottom: 30rpx;
	box-sizing: border-box;
	margin-bottom: 30rpx;
}
.opinion-text-name{
	width: 100%;
	height: 86rpx;
	padding: 0 10rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	line-height: 86rpx;
}
.opinion-text-name-left{
	width: 32rpx;
	height: 100%;
	font-size: 36rpx;
	color: #E55435;
}
.opinion-text-name-left text{
	color: #E55435;
}
.opinion-text-name-right{
	flex: 1;
	height: 100%;
	font-size: 30rpx;
	color: #434343;
	padding-left: 10rpx;
	box-sizing: border-box;
}
.opinion-text-box{
	width: 100%;
	height: auto;
	padding: 5rpx 30rpx;
	box-sizing: border-box;
}
.opinion-text-box-list{
	height: 70rpx;
	line-height: 70rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
	border: 2rpx solid #D7D7D7;
	border-radius: 35rpx;
	display: inline-block;
	margin-bottom: 20rpx;
	margin-right: 20rpx;
}
.opinion-text-textarea{
	width: 100%;
	height: 180rpx;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.opinion-text-textarea-box{
	width: 100%;
	height: 100%;
}
/* 图片 */
.opinion-image{
	width: 100%;
	height: auto;
	border-top: 2rpx solid #E9E9E9;
	border-bottom: 2rpx solid #E9E9E9;
	margin-bottom: 50rpx;
}
/* 提交 */
.opinion-submit{
	width: 100%;
	height: auto;
	padding: 10rpx 25rpx;
	box-sizing: border-box;
}
.opinion-submit-btn{
	width: 100%;
	height: 80rpx;
	background-image: linear-gradient(to right, #1692E2, #0081D5);
	border-radius: 10rpx;
	text-align: center;
	line-height: 80rpx;
	font-size: 30rpx;
	color: #FFFFFF;
}
</style>
