<template>
	<view class="u-th" :style="[thStyle]">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			// 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
			width: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		inject: ['uTable'],
		computed: {
			thStyle() {
				let style = {};
				if(this.width) style.flex = `0 0 ${this.width}%`;
				style.textAlign = this.uTable.align;
				style.padding = this.uTable.padding;
				style.borderBottom = `solid 1px ${this.uTable.borderColor}`;
				style.borderRight = `solid 1px ${this.uTable.borderColor}`;
				Object.assign(style, this.uTable.thStyle);
				return style;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.u-th {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		font-size: 28rpx;
		color: $u-main-color;
		font-weight: bold;
		background-color: rgb(245, 246, 248);
	}
</style>
