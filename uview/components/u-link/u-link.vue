<template>
	<text class="u-link" @tap.stop="openLink" :style="{
		color: color,
		fontSize: fontSize + 'rpx',
		borderBottom: underLine ? `1px solid ${lineColor ? lineColor : color}` : 'none',
		paddingBottom: underLine ? '0rpx' : '0'
	}">
		<slot></slot>
	</text>
</template>

<script>
	export default {
		props: {
			// 文字颜色
			color: {
				type: String,
				default: '#2979ff'
			},
			// 字体大小，单位rpx
			fontSize: {
				type: [String, Number],
				default: 28
			},
			// 是否显示下划线
			underLine: {
				type: Boolean,
				default: false
			},
			// 要跳转的链接
			href: {
				type: String,
				default: ''
			},
			// 小程序中复制到粘贴板的提示语
			mpTips: {
				type: String,
				default: '链接已复制，请在浏览器打开'
			},
			// 下划线颜色
			lineColor: {
				type: String,
				default: ''
			}
		},
		methods: {
			openLink() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href)
				// #endif
				// #ifdef H5
				window.open(this.href)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
					data: this.href
				});
				uni.showToast({
					title: this.mpTips,
					icon: 'none'
				})
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-link {
		line-height: 1;
	}
</style>
