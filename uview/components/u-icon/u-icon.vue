<template>
	<text class="uicon" :class="customClass" :style="{
		color: color,
		fontSize: size + 'rpx',
		fontWeight: bold ? 'bold' :　'normal',
	}" @tap="click" :hover-class="hoverClass" @touchstart="touchstart">
		
	</text>
</template>

<script>
	export default {
		props: {
			// 图标类名
			name: {
				type: String,
				default: ''
			},
			// 图标颜色
			color: {
				type: String,
				default: 'inherit'
			},
			// 字体大小，单位rpx
			size: {
				type: [Number, String],
				default: 'inherit'
			},
			// 是否显示粗体
			bold: {
				type: Boolean,
				default: false
			},
			// 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
			index: {
				type: [Number, String],
				default: ''
			},
			// 触摸图标时的类名
			hoverClass: {
				type: String,
				default: ''
			},
			// 自定义扩展前缀，方便用户扩展自己的图标库
			customPrefix: {
				type: String,
				default: 'uicon'
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			customClass() {
				let classes = [];
				classes.push(this.customPrefix + '-' + this.name);
				// uView的自定义图标类名为u-iconfont
				if(this.customPrefix == 'uicon') classes.push('u-iconfont');
				else classes.push(this.customPrefix);
				return classes;
			}
		},
		methods: {
			click() {
				this.$emit('click', this.index);
			},
			touchstart() {
				this.$emit('touchstart', this.index);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../uview/iconfont.css';
	
	.uicon {
		display: inline-flex;
		align-items: center;
	}
</style>
