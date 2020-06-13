<template>
	<view class="u-index-anchor-wrapper" :id="$u.guid()" :style="[wrapperStyle]">
		<view class="u-index-anchor " :class="[active ? 'u-index-anchor--active' : '']" :style="[customAnchorStyle]">
			<slot v-if="useSlot" />
			<block v-else>
				<text>{{ index }}</text>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			useSlot: {
				type: Boolean,
				default: false
			},
			index: {
				type: String,
				default: ''
			},
			customStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				active: false,
				wrapperStyle: {},
				anchorStyle: {}
			}
		},
		inject: ['UIndexList'],
		mounted() {
			this.UIndexList.children.push(this);
			this.UIndexList.updateData();
		},
		computed: {
			customAnchorStyle() {
				return Object.assign(this.anchorStyle, this.customStyle);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-index-anchor {
		box-sizing: border-box;
		padding: 14rpx 24rpx;
		color: #606266;
		width: 100%;
		font-weight: 500;
		font-size: 28rpx;
		line-height: 1.2;
		background-color: rgb(245, 245, 245);
	}

	.u-index-anchor--active {
		right: 0;
		left: 0;
		color: #2979ff;
		background-color: #fff;
	}
</style>
