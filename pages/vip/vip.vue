<template>
	<view class="vip">
		<view class="vip-box">
			<scroll-view :scroll-y="true" class="vip-box-scroll">
				<view class="vip-box-head">
					<!-- 头像部分 -->
					<view class="vip-box-head-name">
						<view class="vip-box-head-name-left">
							<image src="../../static/image/characteristic/00-07-53.png"></image>
							<text class="lg text-gray cuIcon-crownfill vip-box-head-name-left-icon"></text>
						</view>
						<view class="vip-box-head-name-centent">
							<view class="vip-box-head-name-centent-Identity">
								vip会员
							</view>
							<view class="vip-box-head-name-centent-time">
								2020.05.20 会员到期
							</view>
						</view>
					</view>
					<!-- 会员标识 -->
					<view class="vip-box-head-vips">
						<view class="vip-box-head-vips-list">
							<view class="vip-box-head-vips-list-img">
								<image src="../../static/image/vipIcon/integral.png"></image>
							</view>
							<view class="vip-box-head-vips-list-name">
								积分加倍
							</view>
						</view>
						<view class="vip-box-head-vips-list">
							<view class="vip-box-head-vips-list-img">
								<image src="../../static/image/vipIcon/vip.png"></image>
							</view>
							<view class="vip-box-head-vips-list-name">
								超级会员日
							</view>
						</view>
						<view class="vip-box-head-vips-list">
							<view class="vip-box-head-vips-list-img">
								<image src="../../static/image/vipIcon/coupon.png"></image>
							</view>
							<view class="vip-box-head-vips-list-name">
								每周优惠券
							</view>
						</view>
						<view class="vip-box-head-vips-list">
							<view class="vip-box-head-vips-list-img">
								<image src="../../static/image/vipIcon/move.png"></image>
							</view>
							<view class="vip-box-head-vips-list-name">
								敬请期待
							</view>
						</view>
					</view>
				</view>
				<!-- 权益列表 -->
				<view class="vip-box-interests">
					<view class="vip-box-interests-name">
						<text>积分加倍</text>
						<text class="lg text-gray cuIcon-titles"></text>
						<text>购物获得双倍积分</text>
					</view>
					<view class="vip-box-interests-image">
						
					</view>
				</view>
				<!-- 权益列表 -->
				<view class="vip-box-interests">
					<view class="vip-box-interests-name">
						<text>超级会员日</text>
						<text class="lg text-gray cuIcon-titles"></text>
						<text>每周五会员折扣日(部分商品)</text>
					</view>
					<view class="vip-box-interests-image">
						
					</view>
				</view>
				<!-- 权益列表 -->
				<view class="vip-box-interests">
					<view class="vip-box-interests-name">
						<text>每周优惠券</text>
						<text class="lg text-gray cuIcon-titles"></text>
						<text>每周可领4张,每周一零点更新</text>
					</view>
					<view class="vip-box-interests-coupon">
						<view class="vip-box-interests-coupon-list">
							<view class="vip-box-interests-coupon-list-left">
								<view class="vip-box-interests-coupon-list-left-number">¥ 4</view>
								<view class="vip-box-interests-coupon-list-left-message">
									满49元使用
								</view>
								<view class="vip-box-interests-coupon-list-left-message">
									全场通用
								</view>
							</view>
							<view class="vip-box-interests-coupon-list-right">
								立即领取
							</view>
						</view>
						<view class="vip-box-interests-coupon-list">
							<view class="vip-box-interests-coupon-list-left">
								<view class="vip-box-interests-coupon-list-left-number">¥ 5</view>
								<view class="vip-box-interests-coupon-list-left-message">
									满59元使用
								</view>
								<view class="vip-box-interests-coupon-list-left-message">
									全场通用
								</view>
							</view>
							<view class="vip-box-interests-coupon-list-right">
								立即领取
							</view>
						</view>
						<view class="vip-box-interests-coupon-list">
							<view class="vip-box-interests-coupon-list-left">
								<view class="vip-box-interests-coupon-list-left-number">¥ 6</view>
								<view class="vip-box-interests-coupon-list-left-message">
									满69元使用
								</view>
								<view class="vip-box-interests-coupon-list-left-message">
									全场通用
								</view>
							</view>
							<view class="vip-box-interests-coupon-list-right">
								立即领取
							</view>
						</view>
						<view class="vip-box-interests-coupon-list">
							<view class="vip-box-interests-coupon-list-left">
								<view class="vip-box-interests-coupon-list-left-number">¥ 7</view>
								<view class="vip-box-interests-coupon-list-left-message">
									满79元使用
								</view>
								<view class="vip-box-interests-coupon-list-left-message">
									全场通用
								</view>
							</view>
							<view class="vip-box-interests-coupon-list-right">
								立即领取
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="vip-foot">
			<view class="vip-foot-text">
				<view class="vip-foot-text-left">
					<text>续费包年</text>
					<text>¥88(五折)</text>
				</view>
				<view class="vip-foot-text-centnet">
					
				</view>
				<view class="vip-foot-text-right">
					立即开通
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.vip{
	width: 100%;
	height: 100%;
}
.vip-box{
	width: 100%;
	height: calc(100% - 126rpx);
}
.vip-box-scroll{
	width: 100%;
	height: 100%;
}
.vip-box-head{
	width: 100%;
	height: 430rpx;
	background: #29211F;
	padding-top: 60rpx;
	box-sizing: border-box;
	margin-bottom: 25rpx;
}
.vip-box-head-name{
	width: 100%;
	height: 80rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	margin-bottom: 50rpx;
}
.vip-box-head-name-left{
	width: 80rpx;
	height: 80rpx;
	border-radius: 40rpx;
	border: 2rpx solid #030303;
	position: relative;
}
.vip-box-head-name-left image{
	width: 100%;
	height: 100%;
	border-radius: 40rpx;
	z-index: 10;
}
.vip-box-head-name-left-icon{
	position: absolute;
	left: 55rpx;
	top: -20rpx;
	color: #FBD884;
	font-size: 40rpx;
	transform: rotate(45deg);
}
.vip-box-head-name-centent{
	flex: 1;
	height: 100%;
	padding-left: 50rpx;
	box-sizing: border-box;
}
.vip-box-head-name-centent-Identity{
	width: 120rpx;
	height: 38rpx;
	text-align: center;
	line-height: 38rpx;
	font-size: 20rpx;
	color: #FBCF66;
	border: 1px solid #FBCF66;
	border-radius: 19rpx;
	margin-bottom: 5rpx;
}
.vip-box-head-name-centent-time{
	font-size: 22rpx;
	color: rgba(255,255,2550.5);
}
.vip-box-head-vips-list{
	width: 135rpx;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.vip-box-head-vips-list-img{
	width: 85rpx;
	height: 85rpx;
	border-radius: 20rpx;
	background-image: linear-gradient(to right bottom,#FFF5DC ,#F7E3B1);
	display: flex;
	justify-content: center;
	align-items: center;
}
.vip-box-head-vips-list-img image{
	width: 40rpx;
	height: 40rpx;
}
.vip-box-head-vips-list-name{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
	font-size: 24rpx;
	color: #313131;
}
/* 会员标识 */
.vip-box-head-vips{
	width: 690rpx;
	height: auto;
	padding: 40rpx 30rpx;
	box-sizing: border-box;
	background: #FFFFFF;
	border-radius: 10rpx;
	margin-left: 30rpx;
	display: flex;
	justify-content: space-between;
}
/* 权益 */
.vip-box-interests{
	width: 690rpx;
	height: auto;
	box-sizing: border-box;
	background: #FFFFFF;
	border-radius: 10rpx;
	margin-left: 30rpx;
	padding: 0 30rpx 40rpx 30rpx;
	margin-bottom: 25rpx;
}
.vip-box-interests-name{
	width: 100%;
	height: 92rpx;
	line-height: 92rpx;
	margin-bottom: 10rpx;
}
.vip-box-interests-name text:nth-child(1){
	background: linear-gradient(to right, #685038, #E1BB8D);
	font-size: 34rpx;
	-webkit-background-clip: text;
	color: transparent;
}
.vip-box-interests-name text:nth-child(2){
	margin: 0 10rpx;
	color: #A4A4A4;
}
.vip-box-interests-name text:nth-child(2){
	
	color: #444444;
	font-size: 22rpx;
}
.vip-box-interests-image{
	width: 100%;
	height: 160rpx;
	border-radius: 10rpx;
	background: #007AFF;
}
.vip-box-interests-coupon{
	width: 100%;
	height: auto;
	display: flex;
	justify-content:space-between;
	flex-wrap: wrap;
}
.vip-box-interests-coupon-list{
	width: 305rpx;
	height: 160rpx;
	display: flex;
	justify-content: flex-start;
	border-radius: 10rpx;
	overflow: hidden;
	margin-bottom: 25rpx;
}
.vip-box-interests-coupon-list-left{
	width: 235rpx;
	height: 100%;
	background-image: linear-gradient(to right,#FFEFB4,#FFE68C);
	border-right: 2rpx dotted #FFFFFF;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.vip-box-interests-coupon-list-right{
	flex: 1;
	height: 100%;
	background-image: linear-gradient(to right,#EBD26E,#EAD176);
	writing-mode:tb-rl;
	text-align: center;
	line-height: 70rpx;
	font-weight: bold;
	color: #372F32;
}
.vip-box-interests-coupon-list-left-number{
	width: 100%;
	height: 85rpx;
	line-height: 85rpx;
	color: #303237;
	font-size: 40rpx;
	font-weight: 900;
}
.vip-box-interests-coupon-list-left-message{
	width: 100%;
	height: 30rpx;
	line-height: 30rpx;
	font-size: 22rpx;
	color: #261900;
}
/* 开通会员 */
.vip-foot{
	width: 100%;
	height: 126rpx;
	background: #FFFFFf;
	display: flex;
	justify-content: center;
	align-items: center;
}
.vip-foot-text{
	width: 690rpx;
	height: 90rpx;
	border-radius: 45rpx;
	background: #1F232F;
	display: flex;
	justify-content: space-between;
	line-height: 90rpx;
	overflow: hidden;
}
.vip-foot-text-left{
	flex: 1;
	height: 100%;
	background: #1F232F;
	padding-left: 60rpx;
	font-size: 30rpx;
	font-weight: bold;
}
.vip-foot-text-left text:nth-child(1){
	color: #FFFFFE;
}
.vip-foot-text-left text:nth-child(2){
	color: #FAEE8B;
	margin-left: 15rpx;
}
.vip-foot-text-centnet{
	background:  #2ACC67;
	width: 30rpx;
	height: 100%;
	transform: skew(-10deg);
	margin-right: -10rpx;
}
.vip-foot-text-right{
	width: 200rpx;
	background: #2ACC67;
	color: #ffffff;
	font-size: 30rpx;
	font-weight: bold;
	text-align: center;
	
}
</style>
