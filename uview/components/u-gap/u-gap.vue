<template>
	<view class="u-gap" :style="[gapStyle]">
		
	</view>
</template>

<script>
	export default {
		props: {
			bgColor: {
				type: String,
				default: '#f3f4f6' // 也即：rgb(243, 244, 246)
			},
			// 高度
			height: {
				type: [String, Number],
				default: 30
			}
		},
		computed: {
			gapStyle() {
				return {
					backgroundColor: this.bgColor,
					height: this.height + 'rpx'
				}
			}
		}
	}
</script>

<style>
</style>
