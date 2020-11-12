<template>
	<view
		class="u-switch"
		:class="[value == true ? 'u-switch--on' : '', disabled ? 'u-switch--disabled' : '']"
		@tap="onClick"
		:style="[switchStyle]"
	>
		<view class="u-switch__node node-class">
			<u-loading :show="loading" class="u-switch__loading" :size="size * 0.6" :color="loadingColor"/>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 是否为加载中状态
		loading: {
			type: Boolean,
			default: false
		},
		// 是否为禁用装填
		disabled: {
			type: Boolean,
			default: false
		},
		// 开关尺寸，单位rpx
		size: {
			type: [Number, String],
			default: 50
		},
		// 打开时的背景颜色
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		// 关闭时的背景颜色
		unactiveColor: {
			type: String,
			default: '#ffffff'
		},
		// 通过v-model双向绑定的值
		value: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			
		}
	},
	computed: {
		switchStyle() {
			let style = {};
			style.fontSize = this.size + 'rpx';
			style.backgroundColor = this.value ? this.activeColor : this.unactiveColor;
			return style;
		},
		loadingColor() {
			return this.value ? this.activeColor : null;
		}
	},
	methods: {
	    onClick() {
	        if (!this.disabled && !this.loading) {
				// 使手机产生短促震动，微信小程序有效，APP(HX 2.6.8)和H5无效
				uni.vibrateShort();
	            this.$emit('input', !this.value);
				// 放到下一个生命周期，因为双向绑定的value修改父组件状态需要时间，且是异步的
	            this.$nextTick(function(){
	            	this.$emit('change', this.value);
	            })
	        }
	    }
	}
};
</script>

<style lang="scss" scoped>
.u-switch {
	position: relative;
	display: inline-block;
	box-sizing: initial;
	width: 2em;
	width: var(--switch-width, 2em);
	height: 1em;
	height: var(--switch-height, 1em);
	background-color: #fff;
	background-color: var(--switch-background-color, #fff);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border: var(--switch-border, 1px solid rgba(0, 0, 0, 0.1));
	border-radius: 1em;
	border-radius: var(--switch-node-size, 1em);
	transition: background-color 0.3s;
	transition: background-color var(--switch-transition-duration, 0.3s);
}

.u-switch__node {
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 100%;
	z-index: 1;
	z-index: var(--switch-node-z-index, 1);
	width: 1em;
	width: var(--switch-node-size, 1em);
	height: 1em;
	height: var(--switch-node-size, 1em);
	background-color: #fff;
	background-color: var(--switch-node-background-color, #fff);
	box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
	box-shadow: var(--switch-node-box-shadow, 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05));
	transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05), -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: -webkit-transform var(--switch-transition-duration, 0.3s) cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: transform var(--switch-transition-duration, 0.3s) cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: transform var(--switch-transition-duration, 0.3s) cubic-bezier(0.3, 1.05, 0.4, 1.05),
		-webkit-transform var(--switch-transition-duration, 0.3s) cubic-bezier(0.3, 1.05, 0.4, 1.05);
}

.u-switch__loading {
	display: flex;
	align-items: center;
	justify-content: center;
}

.u-switch--on {
	background-color: #1989fa;
	background-color: var(--switch-on-background-color, #1989fa);
}

.u-switch--on .u-switch__node {
	-webkit-transform: translateX(1em);
	transform: translateX(1em);
	-webkit-transform: translateX(calc(var(--switch-width, 2em) - var(--switch-node-size, 1em)));
	transform: translateX(calc(var(--switch-width, 2em) - var(--switch-node-size, 1em)));
}

.u-switch--disabled {
	opacity: 0.4;
	opacity: var(--switch-disabled-opacity, 0.4);
}
</style>
