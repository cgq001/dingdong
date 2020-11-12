<template>
	<view class="u-radio">
		<view class="u-radio__icon-wrap" @tap="toggle">
			<u-icon :class="iconClass" name="checkbox-mark" :size="iconSize" :color="iconColor" class="u-radio__icon" :style="[iconStyle]" />
		</view>
		<view class="u-label-class u-radio__label" @tap="onClickLabel"><slot /></view>
	</view>
</template>

<script>
export default {
	props: {
		// radio的名称
		name: {
			type: [String, Number],
			default: ''
		},
		// 形状，square为方形，circle为原型
		shape: {
			type: String,
			default: 'square'
		},
		// 是否禁用
		disabled: {
			type: Boolean,
			default: false
		},
		// 是否禁止点击提示语选中复选框
		labelDisabled: {
			type: Boolean,
			default: false
		},
		// 选中状态下的颜色，如设置此值，将会覆盖radioGroup的activeColor值
		activeColor: {
			type: String,
			default: ''
		},
		// 图标的大小，单位rpx
		iconSize: {
			type: [String, Number],
			default: 24
		}
	},
	inject: ['radioGroup'],
	data() {
		return {
			parentDisabled: false
		};
	},
	created() {
		this.parentDisabled = this.radioGroup.disabled;
	},
	computed: {
		// 设置radio的状态，要求radio的name等于radioGroup的value时才为选中状态
		iconStyle() {
			let style = {};
			if (this.radioActiveColor && this.name == this.radioGroup.value && !this.disabled && !this.parentDisabled) {
				style.borderColor = this.radioActiveColor;
				style.backgroundColor = this.radioActiveColor;
			}
			style.width = this.radioGroup.size + 'rpx';
			style.height = this.radioGroup.size + 'rpx';
			return style;
		},
		iconColor() {
			return this.name == this.radioGroup.value ? '#ffffff' : 'transparent';
		},
		iconClass() {
			let classs = [];
			classs.push('u-radio__icon--' + this.shape);
			if(this.name == this.radioGroup.value) classs.push('u-radio__icon--checked');
			if(this.disabled || this.parentDisabled) classs.push('u-radio__icon--disabled');
			if(this.name == this.radioGroup.value && (this.disabled || this.parentDisabled)) classs.push('u-radio__icon--disabled--checked');
			return classs;
		},
		// 激活的颜色，可能受radioGroup和本组件的activeColor影响
		// 本组件的activeColor值优先
		radioActiveColor() {
			return this.activeColor ? this.activeColor : this.radioGroup.activeColor;
		}
	},
	methods: {
		onClickLabel() {
			if (!this.disabled && !this.labelDisabled && !this.parentDisabled) {
			    this.radioGroup.setValue(this.name);
				this.emitEvent();
			}
		},
		toggle() {
			if (!this.disabled && !this.parentDisabled) {
				this.radioGroup.setValue(this.name);
				this.emitEvent();
			}
		},
		emitEvent() {
			this.$emit('change', this.name)
		},
	}
};
</script>

<style lang="scss" scoped>
.u-radio {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	overflow: hidden;
	-webkit-user-select: none;
	user-select: none;
}

.u-radio__icon-wrap,
.u-radio__label {
	color: $u-content-color;
}

.u-radio__icon-wrap {
	-webkit-flex: none;
	flex: none;
}

.u-radio__icon {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	box-sizing: border-box;
	width: 42rpx;
	height: 42rpx;
	color: transparent;
	text-align: center;
	transition-property: color, border-color, background-color;
	font-size: 20px;
	border: 1px solid #c8c9cc;
	transition-duration: 0.2s;
}

.u-radio__icon--circle {
	border-radius: 100%;
}

.u-radio__icon--square {
	border-radius: 3px;
}

.u-radio__icon--checked {
	color: #fff;
	background-color: #2979ff;
	border-color: #2979ff;
}

.u-radio__icon--disabled {
	background-color: #ebedf0;
	border-color: #c8c9cc;
}

.u-radio__icon--disabled--checked {
	color: #c8c9cc!important;
}

.u-radio__label {
	word-wrap: break-word;
	margin-left: 10rpx;
	margin-right: 18rpx;
	color: $u-content-color;
	font-size: 30rpx;
}

.u-radio__label--disabled {
	color: #c8c9cc;
}

.u-radio__label:empty {
	margin: 0;
}
</style>
