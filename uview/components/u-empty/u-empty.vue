<template>
	<view class="u-empty" v-if="show">
		<image class="u-image" :src="src ? src : icons[mode].image" mode="widthFix" :style="{
			width: imgWidth + 'rpx',
			height: imgHeight == 'auto' ? 'auto' : imgHeight + 'rpx'
		}"></image>
		<text :style="{
			color: color,
			fontSize: fontSize + 'rpx',
		}">{{text ? text : icons[mode].text}}</text>
	</view>
</template>

<script>
	import icon from "./icon.js";
	export default {
		props: {
			// 图标路径
			src: {
				type: String,
				default: ''
			},
			// 提示文字
			text: {
				type: String,
				default: ''
			},
			// 文字颜色
			color: {
				type: String,
				default: '#c0c4cc'
			},
			// 文字大小，单位rpx
			fontSize: {
				type: [String, Number],
				default: 26
			},
			// 选择预置的图标类型
			mode: {
				type: String,
				default: 'data'
			},
			//  图标宽度，单位rpx
			imgWidth: {
				type: [String, Number],
				default: 240
			},
			// 图标高度，单位rpx
			imgHeight: {
				type: [String, Number],
				default: 'auto'
			},
			// 是否显示组件
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				icons: icon
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-empty {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 30%;
	}
	
	.u-image {
		margin-bottom: 20rpx;
	}
	
</style>
