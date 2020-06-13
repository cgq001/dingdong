<template>
	<view class="shopping">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<!-- 顶部 返回 和 分享 按钮 -->
		<view class="shopping-swipe-head" :style=" 'background-color: rgba(255,255,255,'+ (num/100) + ' );' ">
			<!-- <view class="lg text-gray cuIcon-back shopping-swipe-head-icon"></view> -->
			<u-icon name="arrow-leftward" color="#A2A1A7" size="36"></u-icon>
			<view class="shopping-swipe-head-title">
				<scroll-view scroll-x class="bg-white nav text-center shopping-swipe-head-title-scroll" >
					<view class="cu-item" :class="titleIndex == 0 ? 'text-blue cur' : '' " :style="{opacity: num/100 }" @click="scrollClick(0)">
						商品
					</view>
					<view class="cu-item" :class="titleIndex == 1 ? 'text-blue cur' : '' " :style="{opacity: num/100 }" @click="scrollClick(1)">
						评价
					</view>
					<view class="cu-item" :class="titleIndex == 2 ? 'text-blue cur' : '' " :style="{opacity: num/100 }" @click="scrollClick(2)">
						详情
					</view>
					<view class="cu-item" :class="titleIndex == 3 ? 'text-blue cur' : '' " :style="{opacity: num/100 }" @click="scrollClick(3)">
						推荐
					</view>
				</scroll-view>
			</view>
			<!-- <view class="lg text-gray cuIcon-forwardfill shopping-swipe-head-icon"></view> -->
			<u-icon name="zhuanfa" color="#A2A1A7" size="36"></u-icon>
		</view>
		<scroll-view scroll-y="true" class="shopping-scroll" @scroll='scrollNumbers' :scroll-top='scrollTop'>
			<!-- 幻灯片 -->
			<view class="shopping-swipe">
				<swiper class="screen-swiper shopping-swipe-box" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item" mode="aspectFill">
							
						</image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 商品基本信息 -->
			<view class="shopping-news">
				<view class="shopping-news-name">
					越南白肉火龙果大果6粒装(单果400g起)
				</view>
				<view class="shopping-news-title">
					清淡中带有一点芬芳,汁多味清甜
				</view>
				<view class="shopping-news-prick">
					<view class="shopping-news-prick-left">
						<text class="shopping-news-prick-left-icon">¥</text>
						<text class="shopping-news-prick-left-newprick">29.99</text>
						<text class="shopping-news-prick-left-company">/ 箱</text>
						<text class="shopping-news-prick-left-oldprick">¥29.99</text>
					</view>
					<view class="shopping-news-prick-right">
						月销量 19999件
					</view>
				</view>
			</view>
			<!-- 配送 -->
			<view class="shopping-distribution">
				<view class="shopping-distribution-left">
					配送
				</view>
				<view class="shopping-distribution-right">
					包邮,24小时内发货,预计2~5天送达
				</view>
			</view>
			<!-- 红包 -->
			<view class="shopping-envelopes">
				<view class="shopping-envelopes-left">
					活动
				</view>
				<view class="shopping-envelopes-right">
					<view class="shopping-envelopes-right-list">
						<text class="lg text-gray cuIcon-redpacket"></text>
						<text>满70减15</text>
					</view>
				</view>
				<text class="lg text-gray cuIcon-right shopping-envelopes-icon"></text>
			</view>
			<!-- 评价 -->
			<view class="shopping-evaluation">
				<view class="shopping-evaluation-name">商品评价</view>
				<view class="shopping-evaluation-message">
					<view class="shopping-evaluation-message-image">
						
					</view>
					<view class="shopping-evaluation-message-info">
						<view class="shopping-evaluation-message-info-name">冬花</view>
						<view class="shopping-evaluation-message-info-star">
							<u-rate :count="count" :current="2" active-color="#FFB71D"></u-rate>
							<text class="shopping-evaluation-message-info-star-text">很满意</text>
						</view>
						<view class="shopping-evaluation-message-info-text">
							叮咚到家,既快捷,又方便
						</view>
					</view>
				</view>
				<view class="shopping-evaluation-more">
					<view class="shopping-evaluation-more-box">
						查看更多评论 (325)
					</view>
				</view>
			</view>
			<!-- 商品详情 -->
			<view class="shopping-details">
				<view class="shopping-details-name">商品详情</view>
				<view class="shopping-details-specification">
					<view class="shopping-details-specification-box">
						<view class="shopping-details-specification-box-list">
							<view class="shopping-details-specification-box-list-left">
								产地
							</view>
							<view class="shopping-details-specification-box-list-right">
								中国
							</view>
						</view>
						<view class="shopping-details-specification-box-list">
							<view class="shopping-details-specification-box-list-left">
								规格
							</view>
							<view class="shopping-details-specification-box-list-right">
								一箱
							</view>
						</view>
						<view class="shopping-details-specification-box-list">
							<view class="shopping-details-specification-box-list-left">
								重量
							</view>
							<view class="shopping-details-specification-box-list-right">
								4仅
							</view>
						</view>
						<view class="shopping-details-specification-box-list">
							<view class="shopping-details-specification-box-list-left">
								包装
							</view>
							<view class="shopping-details-specification-box-list-right">
								箱
							</view>
						</view>
						<view class="shopping-details-specification-box-list">
							<view class="shopping-details-specification-box-list-left">
								保质期
							</view>
							<view class="shopping-details-specification-box-list-right">
								七天
							</view>
						</view>
					</view>
				</view>
				<view class="shopping-details-image">
					<!-- 图片放置区 -->
				</view>
			</view>
			<!-- 相似商品 -->
			<view class="shopping-similar">
				<view class="shopping-similar-name">
					<u-divider bg-color='#F5F5F5' color='#3F3F3F'>相似推荐</u-divider>
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
		<!-- 购物车 -->
		<view class="shopping-char">
			<view class="shopping-char-left">
				<view class="shopping-char-left-list">
					<text class="lg text-gray cuIcon-cart"></text>
					<text>购物车</text>
					<text class="shopping-char-left-list-number">99</text>
				</view>
				<view class="shopping-char-left-list">
					<text class="lg text-gray cuIcon-favor"></text>
					<text>收藏</text>
				</view>
			</view>
			<view class="shopping-char-right">
				<view class="shopping-char-right-box">
					<view class="shopping-char-right-box-left">加入购物车</view>
					<view class="shopping-char-right-box-right">立即购买</view>
				</view>
			</view>
		</view>
		<!-- 会员可 -->
		<view class="shopping-vip">
			<view class="shopping-vip-left">
				会员卡
			</view>
			<view class="shopping-vip-two">
				
			</view>
			<view class="shopping-vip-name">
				立即开通
			</view>
			<view class="shopping-vip-right">
				<text class="lg text-gray cuIcon-playfill"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList:[
					'../../static/image/characteristic/00-07-48.png',
					'../../static/image/characteristic/00-07-53.png',
					'../../static/image/characteristic/00-07-57.jpg',
					'../../static/image/characteristic/00-07-59.jpg',
					'../../static/image/characteristic/00-07-60.jpg',
				],
				count: 5,
				num: 0,
				similar: 0,
				details: 0,
				evaluation: 0,
				swipe: 0,
				head: 0,
				titleIndex: 0,
				scrollTop: 0,
				nanFlex: null
			}
		},
		mounted() {
			this.$nextTick(function(){
				this.infolementETop()
			})
			
		},
		methods: {
			// 滚动事件
			scrollNumbers(event){
				console.log(event.detail.scrollTop)
				let num = 0
				if(event.detail.scrollTop < 100){
					num = event.detail.scrollTop
				}else{
					num = 100
				}
				this.num = num
				
				if(event.detail.scrollTop >= this.swipe - this.head && event.detail.scrollTop< this.evaluation - this.head){
					this.titleIndex = 0
				}else if(event.detail.scrollTop >= this.evaluation - this.head && event.detail.scrollTop< this.details - this.head){
					this.titleIndex = 1
				}else if(event.detail.scrollTop >= this.details - this.head && event.detail.scrollTop< this.similar - this.head){
					this.titleIndex = 2
				}else if(event.detail.scrollTop >= this.similar - this.head){
					this.titleIndex = 3
				}else{
					this.titleIndex = 0
				}
				console.log(this.titleIndex)
			},
			// 获取元素高度
			infolementETop(){
				let _this = this
				const head = uni.createSelectorQuery().in(this);
				head.select('.shopping-swipe-head').boundingClientRect(data => {
				  _this.head = data.height
				}).exec();
				const swipe = uni.createSelectorQuery().in(this);
				swipe.select('.shopping-swipe').boundingClientRect(data => {
				  _this.swipe = data.top
				}).exec();
				const evaluation = uni.createSelectorQuery().in(this);
				evaluation.select('.shopping-evaluation').boundingClientRect(data => {
				  _this.evaluation = data.top
				}).exec();
				const details = uni.createSelectorQuery().in(this);
				details.select('.shopping-details').boundingClientRect(data => {
				  _this.details = data.top
				}).exec();
				const similar = uni.createSelectorQuery().in(this);
				similar.select('.shopping-similar').boundingClientRect(data => {
				  _this.similar = data.top
				}).exec();
			},
			// 点击导航条 滚动页面
			scrollClick(num){
				if(num === 0){
					this.scrollTop = this.swipe
				}
				if(num === 1){
					this.scrollTop = this.evaluation - this.head + 10
				}
				if(num === 2){
					this.scrollTop = this.details - this.head + 10
				}
				if(num === 3){
					this.scrollTop = this.similar - this.head + 10
				}
			}
		}
	}
</script>

<style scoped>
.shopping{
	width: 100%;
	height: 100%;
	padding-bottom: 93rpx;
	box-sizing: border-box;
	position: relative;
}
.shopping-scroll{
	width: 100%;
	height: calc(100% - var(--status-bar-height));
}
/* 幻灯片 */
.shopping-swipe{
	width: 100%;
	height: 750rpx;
	position: relative;
}
.shopping-swipe-box{
	height: 750rpx;
}
.shopping-swipe image{
	width: 100%;
	height: 750rpx;
}
/* 顶部按钮 */
/*#ifndef H5*/
.shopping-swipe-head{
	width: 100%;
	height: 92rpx;
	position: fixed;
	left: 0;
	top: var(--status-bar-height);
	display: flex;
	justify-content: space-between;
	padding: 0 15rpx;
	box-sizing: border-box;
	align-items: center;
	z-index: 2;
}
/*#endif*/
/*#ifdef H5*/
.shopping-swipe-head{
	width: 100%;
	height: 92rpx;
	position: fixed;
	left: 0;
	top: 0rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15rpx;
	box-sizing: border-box;
	z-index: 2;
}
/*#endif*/
.shopping-swipe-head-icon{
	width: 62rpx;
	height: 62rpx;
	font-size: 30rpx;
	background: rgba(163,165,168,0.7);
	color: #FFFFFF;
	text-align: center;
	line-height: 62rpx;
	border-radius: 31rpx;
}
.shopping-swipe-head-title{
	flex: 1;
	height: 92rpx;
	
}
.shopping-swipe-head-title-scroll{
	width: 100%;
	height: 92rpx;
	background: transparent;
}
/* 商品基本信息 */
.shopping-news{
	width: 100%;
	height: auto;
	padding: 27rpx 23rpx 12rpx;
	background: #FFFFFF;
	margin-bottom: 15rpx;
}
.shopping-news-name{
	width: 100%;
	line-height: 47rpx;
	font-size: 34rpx;
	color: #111111;
	font-weight: 600;
}
.shopping-news-title{
	width: 100%;
	line-height: 37rpx;
	color: #7A797F;
	font-size: 24rpx;
}
.shopping-news-prick{
	width: 100%;
	height: 76rpx;
	line-height: 76rpx;
	display: flex;
	justify-content: space-between;
}
.shopping-news-prick-left{
	height: 76rpx;
}
.shopping-news-prick-left-icon{
	font-size: 20rpx;
	color: #F1367A;
}
.shopping-news-prick-left-newprick{
	font-size: 34rpx;
	font-weight: 600;
	color: #F1367A;
	margin-right: 5rpx;
}
.shopping-news-prick-left-company{
	font-size: 24rpx;
	color: #424242;
	margin-right: 10rpx;
}
.shopping-news-prick-left-oldprick{
	font-size: 24rpx;
	color: #B3B2B7;
	text-decoration: line-through;
}
.shopping-news-prick-right{
	height: 76rpx;
	line-height: 76rpx;
	font-size: 24rpx;
	color: #858585;
}
/* 配送 */
.shopping-distribution{
	width: 100%;
	height: 88rpx;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15rpx;
}
.shopping-distribution-left{
	width: 100rpx;
	height: 88rpx;
	text-align: center;
	line-height: 88rpx;
	font-size: 26rpx;
	color: #7F7F7F;
}
.shopping-distribution-right{
	flex: 1;
	height: 88rpx;
	line-height: 88rpx;
	font-size: 26rpx;
	color: #313131;
}
/* 红包 */
.shopping-envelopes{
	width: 100%;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
	position: relative;
	margin-bottom: 15rpx;
}
.shopping-envelopes-left{
	width: 100rpx;
	height: 88rpx;
	text-align: center;
	line-height: 88rpx;
	font-size: 26rpx;
	color: #7F7F7F;
}
.shopping-envelopes-right{
	flex: 1;
	min-height: 88rpx;
	font-size: 26rpx;
	color: #313131;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-top: 20rpx;
}
.shopping-envelopes-right-list{
	width: auto;
	height: 50rpx;
	background: #F2F1F1;
	padding: 0rpx 15rpx;
	box-sizing: border-box;
	line-height: 50rpx;
	border-radius: 10rpx;
	font-size: 26rpx;
	margin-right: 15rpx;
	margin-bottom: 20rpx;
}
.shopping-envelopes-right-list text:nth-child(1){
	color: #FC0F26;
	font-size: 30rpx;
	margin-right: 10rpx;
}
.shopping-envelopes-icon{
	position: absolute;
	right: 20rpx;
	top: 0rpx;
	display: inline-block;
	width: 88rpx;
	height: 88rpx;
	line-height: 88rpx;
	text-align: right;
}
/* 评价 */
.shopping-evaluation{
	width: 100%;
	height: auto;
	background: #FFFFFF;
	margin-bottom: 15rpx;
	padding-bottom: 26rpx;
	box-sizing: border-box;
}
.shopping-evaluation-name{
	width: 100%;
	height: 82rpx;
	line-height: 82rpx;
	font-weight: bold;
	color: #393438;
	font-size: 34rpx;
	padding-left: 25rpx;
	box-sizing: border-box;
	
}
.shopping-evaluation-message{
	width: 100%;
	height: auto;
	padding: 0 20rpx 10rpx 25rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10rpx;
}
.shopping-evaluation-message-image{
	width: 52rpx;
	height: 52rpx;
	border-radius: 50%;
	background: #007AFF;
	overflow: hidden;
}
.shopping-evaluation-message-image image{
	width: 100%;
	height: 100%;
	
}
.shopping-evaluation-message-info{
	flex: 1;
	height: auto;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.shopping-evaluation-message-info-name{
	width: 100%;
	height: 36rpx;
	line-height: 36rpx;
	font-size: 23rpx;
	color: #131313;
	margin-bottom: 4rpx;
	overflow: hidden;
}
.shopping-evaluation-message-info-star{
	width: 100%;
	height: 42rpx;
}
.shopping-evaluation-message-info-star-text{
	margin-left: 10rpx;
	font-size: 24rpx;
	color: #141414;
}
.shopping-evaluation-message-info-text{
	width: 90%;
	height: auto;
	line-height: 30rpx;
	font-size: 24rpx;
	color: #141414;
}
.shopping-evaluation-more{
	width: 100%;
	height: 56rpx;
	display: flex;
	justify-content: center;
}
.shopping-evaluation-more-box{
	width: 250rpx;
	height: 56rpx;
	border: 2rpx solid #E8E8E8;
	color: #676767;
	font-size: 24rpx;
	text-align: center;
	line-height: 52rpx;
	box-sizing: border-box;
	border-radius: 28rpx;
}
/* 商品详情 */
.shopping-details{
	width: 100%;
	height: auto;
	background: #FFFFFF;
}
.shopping-details-name{
	width: 100%;
	padding: 0 25rpx;
	box-sizing: border-box;
	font-size: 34rpx;
	color: #393438;
	font-weight: bold;
	line-height: 106rpx;
	height: 106rpx;
}
.shopping-details-specification{
	width: 100%;
	padding: 16rpx 30rpx;
	box-sizing: border-box;
}
.shopping-details-specification-box{
	border: 1px solid #F3F4F6;
	border-radius: 10rpx;
	width: 100%;
	height: auto;
}
.shopping-details-specification-box .shopping-details-specification-box-list:nth-last-child(1){
	border-bottom: none;
}
.shopping-details-specification-box-list{
	width: 100%;
	height: 86rpx;
	border-bottom: 1rpx solid #F3F4F6;
	display: flex;
	justify-content: space-between;
	line-height: 86rpx;
}
.shopping-details-specification-box-list-left{
	width: 170rpx;
	height: 86rpx;
	color: #8A8B91;
	font-size: 24rpx;
	padding-left: 26rpx;
	box-sizing: border-box;
}
.shopping-details-specification-box-list-right{
	flex: 1;
	height: 86rpx;
	color: #000306;
	font-size: 24rpx;
}
.shopping-details-image{
	width: 100%;
	height: auto;
	font-size: 0;
	padding: 20rpx;
	box-sizing: border-box;
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
/* 购物车 */
.shopping-char{
	width: 100%;
	height: 93rpx;
	border-top: 2rpx solid #E7E7E7;
	box-sizing: border-box;
	background: #FFFFFF;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	justify-content: space-between;
}
.shopping-char-left{
	width: 280rpx;
	height: 90rpx;
	display: flex;
	justify-content: flex-start;
	padding-left: 60rpx;
	box-sizing: border-box;
}
.shopping-char-left-list{
	width: 80rpx;
	height: 90rpx;
	padding-top: 10rpx;
	box-sizing: border-box;
	text-align: center;
	position: relative;
	margin-right: 10rpx;
}
.shopping-char-left-list text{
	display: inline-block;
	color: #757575;
	width: 100%;
}
.shopping-char-left-list text:nth-child(1){
	font-size: 40rpx;
	
}
.shopping-char-left-list text:nth-child(2){
	font-size: 20rpx;
}
.shopping-char-left-list-number{
	position: absolute;
	right: -12rpx;
	top: 5rpx;
	font-size: 16rpx;
	background: #F74F49;
	border-radius: 18rpx;
	display: inline;
	width: 40rpx!important;
	height: 30rpx;
	color: #FFFFFF!important;
	line-height: 30rpx;
	text-align: center;
}
.shopping-char-right{
	flex: 1;
	height: 90rpx;
	padding: 7rpx;
	box-sizing: border-box;
}
.shopping-char-right-box{
	width: 446rpx;
	height: 100%;
	display: flex;
	justify-content: space-between;
	color: #FFFFFF;
	border-radius: 38rpx;
	overflow: hidden;
}
.shopping-char-right-box-left{
	width: 223rpx;
	height: 100%;
	line-height: 76rpx;
	text-align: center;
	background-image: linear-gradient(to right, #FECE00, #FF9700);
	font-size: 28rpx;
}
.shopping-char-right-box-right{
	width: 223rpx;
	height: 100%;
	line-height: 76rpx;
	text-align: center;
	background-image: linear-gradient(to right, #58A6FF, #1B79FF);
	font-size: 28rpx;
}
/* 会员卡 */
.shopping-vip{
	width: 186rpx;
	height: 77rpx;
	background-image: linear-gradient(to right,#FFEEC8,#F6D48C);
	border-radius: 38rpx 0 0 38rpx;
	position: fixed;
	right: 0;
	top: calc(50vh - 38rpx);
	padding-left: 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.shopping-vip-left{
	width: 64rpx;
	height: 30rpx;
	background-image: linear-gradient(to right,#3D1B09,#653B0A);
	color: #E6D6B4;
	font-size: 16rpx;
	text-align: center;
	line-height: 30rpx;
	border-radius: 5rpx;
}
.shopping-vip-two{
	width: 10rpx;
	height: 30rpx;
	border-right: 1rpx solid #E7CC95;
	margin-right: 10rpx;
}
.shopping-vip-name{
	padding-top: 8rpx;
	box-sizing: border-box;
	width: 46rpx;
	height: 76rpx;
	font-size: 22rpx;
	color: #654524;
	line-height: 30rpx;
}
.shopping-vip-right{
	width: 24rpx;
	height: 76rpx;
	text-align: center;
	line-height: 76rpx;
}
.shopping-vip-right text{
	color: #464146;
	font-size: 22rpx;
}
</style>
