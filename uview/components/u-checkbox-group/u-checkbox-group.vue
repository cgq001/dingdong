<template>
	<view class="u-checkbox-group">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			// 最多能选中多少个checkbox
			max: {
				type: [Number, String],
				default: 999
			},
			// 所有选中项的 name
			// value: {
			// 	default: Array,
			// 	default() {
			// 		return []
			// 	}
			// },
			// 是否禁用所有复选框
			disabled: {
				type: Boolean,
				default: false
			},
			// 在表单内提交时的标识符
			name: {
				type: [Boolean, String],
				default: ''
			},
			// 选中状态下的颜色
			activeColor: {
				type: String,
				default: '#2979ff'
			},
			// 组件的整体大小
			size: {
				type: [String, Number],
				default: 40
			}
		},
		provide() {
			return {
				checkboxGroup: this
			}
		},
		data() {
			return {
				// 所有子组件
				children: []
			}
		},
		methods: {
			emitEvent() {
				let values = [];
				this.children.map(val => {
					if(val.value) values.push(val.name);
				})
				this.$emit('change', values);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-checkbox-group {
		display: inline-flex;
	}
</style>
