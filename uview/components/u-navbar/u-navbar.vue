<template>
	<view class="">
		<view class="u-navbar" :style="[navbarStyle]" :class="{'u-navbar-fixed': isFixed, 'u-border-bottom': borderBottom}">
			<view class="u-status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="u-navbar-inner" :style="[navbarInnerStyle]">
				<view class="u-back-wrap" v-if="isBack" @tap="goBack"> 
					<view class="u-icon-wrap">
						<u-icon :name="backIconName" :color="backIconColor" :size="backIconSize"></u-icon>
					</view>
					<text class="u-icon-wrap u-back-text u-line-1" v-if="backText" :style="[backTextStyle]">
						{{backText}}
					</text>
				</view>
				<view class="u-navbar-content-title" v-if="title" :style="[titleStyle]">
					<text class="u-title u-line-1">{{title}}</text>
				</view>
				<view class="u-slot-content">
					<slot></slot>
				</view>
			</view>
		</view>
		<!-- 解决fixed定位后导航栏塌陷的问题 -->
		<view class="u-navbar-placeholder" v-if="isFixed" :style="{width: '100%',height: height + statusBarHeight + 'px'}">
			
		</view>
	</view>
</template>

<script>
// 获取系统状态栏的高度
let systemInfo = uni.getSystemInfoSync();
let menuButtonInfo = {};
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
// #ifdef MP
menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// #endif
export default {
	props: {
		// 导航栏高度，单位px，非rpx
		height: {
			type: [String, Number],
			default: 44
		},
		// 返回箭头的颜色
		backIconColor: {
			type: String,
			default: '#606266'
		},
		// 左边返回的图标
		backIconName: {
			type: String,
			default: 'arrow-left'
		},
		// 左边返回图标的大小，rpx
		backIconSize: {
			type: [String, Number],
			default: '30'
		},
		// 返回的文字提示
		backText: {
			type: String,
			default: ''
		},
		// 返回的文字的 样式
		backTextStyle: {
			type: Object,
			default() {
				return {
					color: '#606266'
				}
			}
		},
		// 导航栏标题
		title: {
			type: String,
			default: ''
		},
		// 标题的宽度，如果需要自定义右侧内容，且右侧内容很多时，可能需要减少这个宽度，单位rpx
		titleWidth: {
			type: [String, Number],
			default: '250'
		},
		// 标题的颜色
		titleColor: {
			type: String,
			default: '#606266'
		},
		// 标题的字体大小
		titleSize: {
			type: [String, Number],
			default: 32
		},
		isBack: {
			type: [Boolean, String],
			default: true
		},
		// 对象形式，因为用户可能定义一个纯色，或者线性渐变的颜色
		background: {
			type: Object,
			default() {
				return {
					
				}
			}
		},
		// 导航栏是否固定在顶部
		isFixed: {
			type: Boolean,
			default: true
		},
		// 是否显示导航栏的下边框
		borderBottom: {
			type: Boolean,
			default: true
		}
	
	},
	data() {
		return {
			menuButtonInfo: menuButtonInfo,
			statusBarHeight: systemInfo.statusBarHeight
		};
	},
	computed: {
		// 导航栏内部盒子的样式
		navbarInnerStyle() {
			let style = {};
			// 导航栏宽度，如果在小程序下，导航栏宽度为胶囊的左边到屏幕左边的距离
			style.width = menuButtonInfo.left + 'px' || '100%';
			style.height = this.height + 'px';
			// 如果是各家小程序，导航栏内部的宽度需要减少右边胶囊的宽度
			// #ifdef MP
			let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
			style.marginRight = rightButtonWidth + 'px';
			// #endif
			return style;
		},
		// 整个导航栏的样式
		navbarStyle() {
			let style = {};
			// 合并用户传递的背景色对象
			Object.assign(style, this.background);
			return style;
		},
		// 导航中间的标题的样式
		titleStyle() {
			let style = {};
			style.color = this.titleColor;
			style.fontSize = this.titleSize + 'rpx';
			style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
			style.right = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
			// // #ifdef MP
			// let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
			// style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
			// style.right = rightButtonWidth - (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + rightButtonWidth + 'px';
			// // #endif
			style.width = uni.upx2px(this.titleWidth) + 'px';
			return style;
		}
	},
	created() {},
	methods: {
		goBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style scoped lang="scss">
	.u-navbar {
		width: 100%;
	}
	
	.u-navbar-fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 991;
	}
	
	.u-status-bar {
		width: 100%;
	}
	
	.u-navbar-inner {
		display: flex;
		justify-content: space-between;
		position: relative;
		align-items: center;
	}
	
	.u-back-wrap {
		display: flex;
		align-items: center;
		flex: 1;
		flex-grow: 0;
		margin-left: 24rpx;
	}
	
	.u-back-text {
		padding-left: 4rpx; 
		font-size: 30rpx;
	}
	
	.u-navbar-content-title {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		position: absolute;
		left: 0;
		right: 0;
		height: 60rpx;
		text-align: center;
	}
	
	.u-navbar-centent-slot {
		flex: 1;
	}
	
	.u-title {
		line-height: 1;
		font-size: 32rpx;
		flex: 1;
		
	}
	
	.u-navbar-right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	
	.u-slot-content {
		flex: 1;
		display: flex;
		align-items: center;
	}
</style>
