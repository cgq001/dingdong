<template>
	<view class="char">
		<view class="status_bar" style="background: #FFFFFF;">
		  <!-- 这里是状态栏 -->
		</view>
		<!-- 顶部标题 -->
		<view class="char-head">
			<view class="char-head-left">
				购物车
			</view>
			<view class="char-head-right">
				编辑
			</view>
		</view>
		<!-- 可滑动区域  购物车为空: char-scroll-activeoff   购物车已满 char-scroll-activeon-->
		<view class="char-scroll char-scroll-activeon">
			<scroll-view class="char-scroll-check" scroll-y="true">
				<view class="char-scroll-empty">
					<view class="char-scroll-empty-image">
							<image src="http://public.nodebook.top/empty.png"></image>
					</view>
					
					<text>购物车空空如也</text>
				</view>
				<charList />
				<charList />
				<charList />
				
				<charList />
				<charList />
				
				<charList />
				<charList />
				<charList />
				
				<charList />
				<charList />
				
				<charList />
				<charList />
				<!-- 猜你喜欢 -->
				<view class="shopping-similar">
					<view class="shopping-similar-name">
						<u-divider bg-color='#F4F8FB' color='#3F3F3F'>猜你喜欢</u-divider>
					</view>
					<view class="shopping-similar-box">
						<view class="shopping-similar-box-list">
							<view class="shopping-similar-box-list-image">
								
							</view>
							<view class="shopping-similar-box-list-name">
								商品名称
							</view>
							<view class="shopping-similar-box-list-table">
								标签
							</view>
							<view class="classRightListBox-right-prick">
								<view class="classRightListBox-right-prick-left">
									<view class="classRightListBox-right-prick-left-prick1">
										<text>¥</text>
										<text>19.9</text>
									</view>
									<view class="classRightListBox-right-prick-left-prick2">
										<text>¥</text>
										<text>19.9</text>
									</view>
								</view>
								<view class="classRightListBox-right-prick-right">
									<text class="cuIcon-add"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 操作条 -->
		<view class="char-operating">
			<!-- 温馨提示 -->
			<view class="char-operating-top">
				<view class="char-operating-top-left">
					<text class="char-operating-top-left-tit">已经满25减5,再买10.23元,可享受</text>
				</view>
				<view class="char-operating-top-right">
					<text>去凑单</text>
					<text class="lg text-gray cuIcon-right"></text>
				</view>
			</view>
			<!-- 结算操作条 -->
			<view class="char-operating-bottom">
				<view class="char-operating-bottom-left">
					<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
					<view style="margin-left: 20rpx;">全选</view>
				</view>
				<view class="char-operating-bottom-right">
					<view class="char-operating-bottom-right-left">
						<view class="char-operating-bottom-right-left-top">
							<text>合计:</text>
							<text>39.9</text>
						</view>
						<view class="char-operating-bottom-right-left-bottom">
							<text>免基础配送费</text>
							<text>基础配送费10元</text>
						</view>
					</view>
					<view class="char-operating-bottom-right-right" @click="submitorder">
						去结算
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import charList from '../../components/charList.vue'
	export default {
		data() {
			return {
				radio: ''
			}
		},
		methods: {
			submitorder(){
				uni.navigateTo({
				    url: '/pages/submitorder/submitorder'
				});
			}
		},
		components:{
			charList
		}
	}
</script>

<style scoped>
.char{
	width: 100%;
	height: 100%;
	position: relative;
}
.char-head{
	width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: space-between;
	padding: 0 25rpx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.char-head-left{
	width: 150rpx;
	height: 100%;
	line-height: 80rpx;
	font-size: 36rpx;
	color: #000000;
}
.char-head-right{
	flex: 1;
	height: 100%;
	line-height: 80rpx;
	text-align: right;
	color: #121416;
	font-size: 30rpx;
}
.char-scroll{
	width: 100%;
	height: calc(100% - 80rpx - var(--status-bar-height));
	background: #F4F8FB;
	
	box-sizing: border-box;
}
.char-scroll-activeoff{
	padding: 18rpx 23rpx;
}
.char-scroll-activeon{
	padding: 18rpx 23rpx 196rpx;
}
.char-scroll-check{
	width: 100%;
	height: 100%;
}
.char-scroll-empty{
	width: 100%;
	height: 750rpx;
	padding-top: 120rpx;
	box-sizing: border-box;
	/* display: flex;
	justify-content: center; */
	/* align-items: center; */
	flex-wrap: wrap;
}
.char-scroll-empty-image{
	width: 100%;
	height: 250rpx;
	display: flex;
	justify-content: center;
	margin-bottom: 20rpx;
}
.char-scroll-empty image{
	width: 346rpx;
	height: 234rpx;
	margin: 0 auto;
}
.char-scroll-empty text{
	display: inline-block;
	width: 100%;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	font-size: 26rpx;
	color: #666666;
}
/* 操作条 */
.char-operating{
	width: 100%;
	height: auto;
	position: absolute;
	left: 0;
	bottom: 0;
}
.char-operating-bottom{
	width: 100%;
	height: 104rpx;
	background: #FFFFFF;
	padding: 0 22rpx 0 17rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.char-operating-bottom-left{
	width: 200rpx;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.checked{
	color: #39B54A;
}
.char-operating-bottom-right{
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.char-operating-bottom-right-right{
	width: 210rpx;
	height: 77rpx;
	border-radius: 38rpx;
	background-image: linear-gradient(to right,#FE5722,#FE212A);
	color: #FFFFFF;
	text-align: center;
	line-height: 77rpx;
	font-size: 30rpx;
}
.char-operating-bottom-right-left{
	margin-right: 10rpx;
	text-align: right;
}
.char-operating-bottom-right-left-top{
	display: flex;
	justify-content: flex-end;
}
.char-operating-bottom-right-left-top text:nth-child(1){
	font-size: 26rpx;
	margin-right: 10rpx;
}
.char-operating-bottom-right-left-top text:nth-child(2){
	font-size: 38rpx;
	font-weight: bold;
	color: #FE212A;
}
.char-operating-bottom-right-left-bottom text{
	font-size: 22rpx;
	color: #A1A1A1;
}

.char-operating-top{
	width: 100%;
	height: 76rpx;
	background: #FFF5F4;
	padding: 0 24rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.char-operating-top-left{
	flex: 1;
	height: 76rpx;
}
.char-operating-top-left-tit{
	width: 100%;
	height: 100%;
	line-height: 76rpx;
	font-size: 26rpx;
	color: #20232A;
}
.char-operating-top-right{
	width: 110rpx;
	line-height: 76rpx;
}
.char-operating-top-right text:nth-child(1){
	color: #FC1B3A;
	font-size: 24rpx;
}
.char-operating-top-right text:nth-child(2){
	color: #DD92A4;
	font-size: 24rpx;
}

/* 相似商品 */
.shopping-similar{
	width: 100%;
	height: auto;
	padding: 0 20rpx 20rpx;
	box-sizing: border-box;
	
}
.shopping-similar-name{
	width: 100%;
	height: 76rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.shopping-similar-box{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.shopping-similar-box-list{
	width: 345rpx;
	height: auto;
	background: #FFFFFF;
	padding-bottom: 44rpx;
	box-sizing: border-box;
	border-radius: 10rpx;
}
.shopping-similar-box-list-image{
	width: 100%;
	height: 340rpx;
	padding: 17rpx;
	box-sizing: border-box;
}
.shopping-similar-box-list-image image{
	width: 100%;
	height: 100%;
}
.shopping-similar-box-list-name{
	width: 100%;
	height: 68rpx;
	line-height: 34rpx;
	font-size: 26rpx;
	color: #1F1F1F;
	padding: 0 22rpx;
	box-sizing: border-box;
	
}
.shopping-similar-box-list-table{
	width: 100%;
	height: 68rpx;
	padding: 0 22rpx;
	box-sizing: border-box;
}
.classRightListBox-right-prick{
	width: 100%;
	height: 46rpx;
	display: flex;
	justify-content: space-between;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.classRightListBox-right-prick-left{
	flex: 1;
	height: 100%;
	display: flex;
}
.classRightListBox-right-prick-left-prick1{
	height: 100%;
	line-height: 46rpx;
	color: #FF3A86;
	margin-right: 10rpx;
}
.classRightListBox-right-prick-left-prick1 text:nth-child(1){
	font-size: 24rpx;
}
.classRightListBox-right-prick-left-prick1 text:nth-child(2){
	font-size: 36rpx;
	font-weight: bold;
}
.classRightListBox-right-prick-left-prick2{
	height: 100%;
	line-height: 46rpx;
	color: #B6B6B6;
	font-size: 26rpx;
	text-decoration: line-through;
}
.classRightListBox-right-prick-right{
	width: 45rpx;
	height: 45rpx;
	background: #60DA62;
	border-radius: 5rpx;
	font-size: 40rpx;
	color: #FFFFFF;
	text-align: center;
	line-height: 45rpx;
	
}
</style>
