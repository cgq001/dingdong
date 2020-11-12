<template>
	<view class="u-table" :style="[tableStyle]">
		<slot />
	</view>
</template>

<script>
	export default {
		props: {
			borderColor: {
				type: String,
				default: '#e4e7ed'
			},
			align: {
				type: String,
				default: 'center'
			},
			// td的内边距
			padding: {
				type: String,
				default: '10rpx 6rpx'
			},
			// 字体大小
			fontSize: {
				type: [String, Number],
				default: 28
			},
			// 字体颜色
			color: {
				type: String,
				default: '#606266'
			},
			// th的自定义样式
			thStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			// table的背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			}
		},
		provide() {
			return {
				uTable: this,
				uTd: this
			};
		},
		data() {
			return {
			}
		},
		computed: {
			tableStyle() {
				let style = {};
				style.borderLeft = `solid 1px ${this.borderColor}`;
				style.borderTop = `solid 1px ${this.borderColor}`;
				style.backgroundColor = this.bgColor;;
				return style;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-table {
		width: 100%;
		box-sizing: border-box;
	}

	.u-table /deep/ t-tr {
		display: flex;
	}
</style>
