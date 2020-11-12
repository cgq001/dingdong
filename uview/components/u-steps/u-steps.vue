<template>
	<view class="">
		<view class="u-steps">
			<view class="u-steps-item" v-for="(item,index) in list" :key="index">
				<view class="u-steps-item-num" v-if="mode == 'number' && current < index">{{index+1}}</view>
				<view class="u-steps-item-dot" v-if="mode == 'dot'" :style="{backgroundColor: index <= current ? innerActiveColor : unActiveColor}"></view>
				<u-icon size="22" class="u-steps-item-checked" :style="{backgroundColor: index <= current ? innerActiveColor : unActiveColor}"
				 v-if="mode == 'number' && current >= index" name="checkmark"></u-icon>
				<text :style="{color: index <= current ? innerActiveColor : unActiveColor}">{{item.name}}</text>
				<view class="u-steps-item-line" :style="{backgroundColor: index <= current ? innerActiveColor : unActiveColor, top: mode == 'dot' ? '24rpx' : '36rpx'}">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 步骤条的类型，dot|number
			mode: {
				type: String,
				default: 'dot'
			},
			// 步骤条的数据
			list: {
				type: Array,
				default () {
					return []
				}
			},
			// 主题类型, primary|success|info|warning|error
			type: {
				type: String,
				default: 'primary'
			},
			// 当前哪一步是激活的
			current: {
				type: [Number, String],
				default: 0
			},
			// 激活步骤的颜色
			activeColor: {
				type: String,
				default: ''
			},
			// 未激活的颜色
			unActiveColor: {
				type: String,
				default: '#606266'
			}
		},
		data() {
			return {

			}
		},
		computed: {
			innerActiveColor() {
				if (this.activeColor) return this.activeColor;
				else if (this.type) return this.$u.color[this.type];
				else return "#2979ff";
			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-steps {
		display: flex;
	}

	.u-steps-item {
		flex: 1;
		text-align: center;
		position: relative;
		min-width: 100rpx;
		font-size: 26rpx;
		color: #8799a3;
	}

	.u-steps-item .u-steps-item-line {
		content: "";
		position: absolute;
		height: 2rpx;
		width: calc(100% - 80rpx);
		left: calc(0rpx - (100% - 80rpx) / 2);
		top: 36rpx;
		z-index: 0;
	}

	.u-steps-item:first-child .u-steps-item-line {
		display: none;
	}

	.u-steps-item-num {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44rpx;
		height: 44rpx;
		border: 1px solid #8799a3;
		border-radius: 50%;
		margin: 14rpx auto;
		overflow: hidden;
	}

	.u-steps-item-dot {
		width: 20rpx;
		height: 20rpx;
		display: flex;
		border-radius: 50%;
		margin: 14rpx auto;
	}

	.u-steps-item-checked {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44rpx;
		color: #fff !important;
		height: 44rpx;
		border-radius: 50%;
		margin: 14rpx auto;
		overflow: hidden;
	}
</style>
