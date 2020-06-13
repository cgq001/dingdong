<template>
	<view :id="elId" class="u-grid" :class="{'u-border-top u-border-left': border}"><slot /></view>
</template>

<script>
export default {
	props: {
		// 分成几列
		col: {
			type: [Number, String],
			default: 3
		},
		// 是否显示边框
		border: {
			type: Boolean,
			default: true
		},
		// 是否显示hover-class的样式
		hoverClass: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			index: 0,
			elId: this.$u.guid(),
			// grid组件宽度，这里不用flex布局，是因为在微信小程序上，组件体现形式为
			// 页面上带上了组件结构元素，导致状态错乱
			width: 0, 
		}
	},
	provide() {
		return {
			uGrid: this
		}
	},
	mounted() {
		this.getGridRect();
	},
	methods: {
		click(index) {
			this.$emit('click', index);
		},
		async getGridRect() {
			let rect = await this.$uGetRect(`#${this.elId}`);
			// 小米手机可能会导致宽度计算问题(特定机型)，宫格布局变乱，故在这里减少一个像素
			this.width = rect.width - 1;
		}
	}
	
};
</script>

<style scoped lang="scss">
.u-grid {
	display: flex;
	width: 100%;
	align-items: center;
	flex-wrap: wrap;
}
</style>
