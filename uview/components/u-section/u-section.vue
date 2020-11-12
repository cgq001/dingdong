<template>
	<view class="u-section">
		<view class="u-section-title" :style="{
			fontWeight: bold ? 'bold' : 'normal',
			color: color,
			fontSize: fontSize + 'rpx'
		}">
			{{title}}
		</view>
		<view class="u-right-info" v-if="right">
			{{subTitle}}
			<view class="u-icon-arrow" @tap="rightClick">
				<u-icon name="arrow-right" size="22" :color="$u.color['tipsColor']"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 标题信息
			title: {
				type: String,
				default: ''
			},
			// 右边副标题内容
			subTitle: {
				type: String,
				default: '更多'
			},
			// 是否显示右边的内容
			right: {
				type: Boolean,
				default: true
			},
			fontSize: {
				type: [Number, String],
				default: 28
			},
			// 主标题是否加粗
			bold: {
				type: Boolean,
				default: true
			},
			// 主标题的颜色
			color: {
				type: String,
				default: '#303133'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			rightClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	
	.u-section-title {
		position: relative;
		font-size: 28rpx;
		padding-left: 10px;
		line-height: 1;
	}
	
	.u-section-title:after {
		position: absolute;
		width: 4px;
		top: -1px;
		height: 16px;
		content: '';
		left: 0;
		border-radius: 10px;
		background-color: currentColor;
	}
	
	.u-right-info {
		color: $u-tips-color;
		font-size: 26rpx;
		display: flex;
		align-items: center;
	}
	
	.u-icon-arrow {
		margin-left: 6rpx;
	}
</style>
