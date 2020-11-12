<template>
	<view class="u-divider" :style="{
		height: height == 'auto' ? 'auto' : height + 'rpx',
		backgroundColor: bgColor
	}" @tap="click">
		<view class="u-divider-line" :style="[lineStyle]"></view>
		<view class="u-divider-text" :style="{
			color: color,
			fontSize: fontSize + 'rpx'
		}"><slot /></view>
		<view class="u-divider-line" :style="[lineStyle]"></view>
	</view>
</template>

<script>
export default {
	props: {
		// 单一边divider横线的宽度(数值)，单位rpx。或者百分比
		halfWidth: {
			type: [Number, String],
			default: 150
		},
		// divider横线的颜色，如设置，
		borderColor: {
			type: String,
			default: '#dcdfe6'
		},
		// 主题色，可以是primary|info|success|warning|error之一值
		type: {
			type: String,
			default: 'primary'
		},
		// 文字颜色
		color: {
			type: String,
			default: '#909399'
		},
		// 文字大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 26
		},
		// 整个divider的背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// 整个divider的高度单位rpx
		height: {
			type: [Number, String],
			default: 40
		},
	},
	computed: {
		lineStyle() {
			let style = {};
			if(String(this.halfWidth).indexOf('%') != -1) style.width = this.halfWidth;
			else style.width = this.halfWidth + 'rpx';
			// borderColor优先级高于type值
			if(this.borderColor) style.borderColor = this.borderColor;
			else style.borderColor = this.$u.color[this.type];
			return style;
		}
	},
	methods: {
		click() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
.u-divider {
	width: 100%;
	position: relative;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	flex-direction: row;
}

.u-divider-line {
	border-bottom: 1px solid $u-border-color;
	transform: scale(1, 0.5);
	transform-origin: center;
}

.u-divider-text {
	white-space: nowrap;
	display: inline-flex;
	padding: 0 20rpx;
}
</style>
