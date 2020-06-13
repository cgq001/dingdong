<template>
	<view class="u-cell-box">
		<view class="u-cell-title" v-if="title" :style="[titleStyle]">
			{{title}}
		</view>
		<view class="u-cell-item-box" :class="{'u-border-bottom u-border-top': border}">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 分组标题
			title: {
				type: String,
				default: ''
			},
			// 是否显示分组list上下边框
			border: {
				type: Boolean,
				default: true
			},
			// 分组标题的样式，对象形式，注意驼峰属性写法
			// 类似 {'font-size': '24rpx'} 和 {'fontSize': '24rpx'}
			titleStyle: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		data() {
			return {
				index: 0,
			}
		},
		provide() {
			return {
				uCellGroup: this
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-cell-box {
		width: 100%;
	}
	
	.u-cell-title {
		padding: 30rpx 32rpx 10rpx 32rpx;
		font-size: 30rpx;
		text-align: left;
		color: $u-tips-color;
	}
	
	.u-cell-item-box {
		background-color: #FFFFFF;
	}
</style>
