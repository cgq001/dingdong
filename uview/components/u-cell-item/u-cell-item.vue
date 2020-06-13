<template>
	<view @tap="click" class="u-cell-item-box" :class="{'u-cell-border': itemIndex > 0 }" hover-stay-time="150" :hover-class="hover ? 'u-hover-class' : ''" :style="{
		backgroundColor: bgColor
	}">
		<view class="u-cell-content">
			<view class="u-icon-wrap" v-if="icon">
				<u-icon size="32" :name="icon" class="u-icon"></u-icon>
			</view>
			<view class="u-icon-wrap">
				<slot name="icon"></slot>
			</view>
			<view class="u-cell-title" :style="[titleStyle]">
				<text class="u-title-text" v-if="title">{{title}}</text>
				<slot name="left"></slot>
			</view>
			<view class="u-cell-value" v-if="value">
				<text class="u-value-text" :style="[valueStyle]" v-if="value">{{value}}</text>
			</view>
			<view v-else class="u-slot-wrap">
				<slot name="right"></slot>
			</view>
			<view :style="[arrowStyle]" class="u-icon-wrap">
				<u-icon v-if="arrow" size="26" class="u-arror-right" color="#969799" name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="u-cell-label" v-if="label" :style="[labelStyle]">
			{{label}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 左侧图标名称(只能uView内置图标)，或者图标src
			icon: {
				type: String,
				default: ''
			},
			// 左侧标题
			title: {
				type: String,
				default: ''
			},
			// 右侧内容
			value: {
				type: String,
				default: ''
			},
			// 标题下方的描述信息
			label: {
				type: String,
				default: ''
			},
			// 是否显示内边框
			border: {
				type: Boolean,
				default: true
			},
			// 是否开启点击反馈，即点击是cell背景为灰色
			hover: {
				type: Boolean,
				default: true
			},
			// 是否显示右侧箭头
			arrow: {
				type: Boolean,
				default: true
			},
			// 右侧箭头方向，可选值：right|up|down，默认为right
			arrowDirection: {
				type: String,
				default: 'right'
			},
			// 控制标题的样式
			titleStyle: {
				type: Object,
				default() {
					return {};
				}
			},
			// 右侧显示内容的样式
			valueStyle: {
				type: Object,
				default() {
					return {};
				}
			},
			// 描述信息的样式
			labelStyle: {
				type: Object,
				default() {
					return {};
				}
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			}
		},
		inject: ['uCellGroup'],
		data() {
			return {
				itemIndex: 0,
			}
		},
		created() {
			this.itemIndex = this.uCellGroup.index++;
		},
		computed: {
			arrowStyle() {
				let style = {};
				if(this.arrowDirection == 'top') style.transform = 'rotate(-90deg)';
				else if(this.arrowDirection == 'bottom') style.transform = 'rotate(90deg)';
				else style.transform = 'rotate(0deg)';
				return style;
			}
		},
		methods: {
			click() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-cell-item-box {
		padding: 28rpx 32rpx;
		position: relative;
	}
	
	.u-cell-border:after {
		left: 32rpx!important;
		position: absolute;
		box-sizing: border-box;
		content: ' ';
		pointer-events: none;
		right: 0;
		top: 0;
		border-bottom: 1px solid $u-border-color;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.u-cell-content {
		display: flex;
		align-items: center;
	}
	
	.u-cell-title {
		color: #323233;
		font-size: 30rpx;
		flex: 1;
		margin-left: 6rpx;
		text-align: left;
	}
	
	.u-cell-value {
		flex: 1;
		font-size: 26rpx;
		color: #969799;
		text-align: right;
	}
	
	.u-cell-label {
		color: #969799;
		font-size: 26rpx;
		margin-top: 10rpx;
		text-align: left;
	}
	
	.u-slot-wrap {
		display: flex;
		align-items: center;
	}
	
	// 微信小程序需要额外处理可能通过slot传入badge和switch的问题
	// 否则无法垂直居中
	/* #ifdef MP-WEIXIN */
	.u-slot-wrap /deep/ u-badge,
	.u-slot-wrap /deep/ u-switch {
		display: flex;
		align-items: center;
	}
	/* #endif */
	
	.u-icon {
		margin-right: 6rpx;
	}
	
	.u-value-text {
		margin-right: 10rpx;
	}
	
	.u-title-text {
		margin-right: 10rpx;
	}
</style>