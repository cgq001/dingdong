<template>
	<view class="u-collapse">
		<slot />
	</view>
</template>

<script>
	export default {
		props: {
			// 是否手风琴模式
			accordion: {
				type: Boolean,
				default: true
			},
			// 头部的样式
			headStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			// 主体的样式
			bodyStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			// 是否显示右侧的箭头
			arrow: {
				type: Boolean,
				default: true
			},
			// 箭头的颜色
			arrowColor: {
				type: String,
				default: ''
			},
		},
		provide() {
			return {
				uCollapse: this
			}
		},
		created() {
			this.childrens = []
		},
		data() {
			return {
				
			}
		},
		methods: {
			// collapse item被点击，由collapse item调用父组件方法
			onChange() {
				let activeItem = [];
				this.childrens.forEach((vm, index) => {
					if (vm.isShow) {
						activeItem.push(vm.nameSync);
					}
				})
				// 如果是手风琴模式，只有一个匹配结果，也即activeItem长度为1，将其转为字符串
				if(this.accordion) activeItem = activeItem.join('');
				this.$emit('change', activeItem);
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
