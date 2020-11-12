<template>
	<view
		class="u-grid-item"
		:class="[showBorder ? 'u-border-right u-border-bottom' : '']"
		:hover-class="hoverClass ? hoverClass : 'u-grid-item-hover'"
		:hover-stay-time="200"
		@tap="click"
		:style="{
			background: bgColor,
			width: width + 'px'
		}"
	>
		<view class="u-grid-item-box">
			<slot />
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// 点击时返回的index
		index: {
			type: [Number, String],
			default: ''
		}
	},
	// 父组件通过provide传递过来的整个this
	inject: ['uGrid'],
	data() {
		return {
			hoverClass: '', // 按下去的时候，是否显示背景灰色
		};
	},
	created() {
		this.hoverClass = this.uGrid.hoverClass;
	},
	computed: {
		// 小于2，显示2列；大于5，显示5列
		colNum() {
			return this.col < 2 ? 2 : this.col > 5 ? 5 : this.col;
		},
		// 每个grid-item的宽度
		width() {
			return this.uGrid.width / this.uGrid.col;
		},
		// 是否显示边框
		// 为了迎合演示的需要，从created生命周期移到此，以为演示中可能需要动态修改有无边框
		showBorder() {
			return this.uGrid.border;
		}
	},
	methods: {
		click() {
			this.uGrid.click(this.index);
		}
	},
};
</script>

<style scoped lang="scss">
	
.u-grid-item {
	box-sizing: border-box;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	flex-direction: column;
	position: relative;
}

.u-grid-item-hover {
	background: #f7f7f7 !important;
}

.u-grid-marker-box {
	position: absolute;
	display: inline-block;
	line-height: 0;
}

.u-grid-marker-wrap {
	position: absolute;
}

.u-grid-item-box {
	padding: 30rpx 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
