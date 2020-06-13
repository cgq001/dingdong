<template>
	<view class="u-field" :class="{'u-field-border': itemIndex > 0 }">
		<view class="u-field-inner" :class="[type == 'textarea' ? 'u-textarea-inner' : '']">
			<view class="u-label" :class="[required ? 'u-required' : '']" :style="{justifyContent: justifyContent, flex: `0 0 ${labelWidth}rpx`}">
				<view class="u-icon-wrap" v-if="icon">
					<u-icon size="32" :name="icon" :color="iconColor" class="u-icon"></u-icon>
				</view>
				<slot name="icon"></slot>
				<text class="u-label-text" :class="[this.$slots.icon || icon ? 'u-label-left-gap' : '']">{{ label }}</text>
			</view>
			<view class="fild-body">
				<textarea
					v-if="type == 'textarea'"
					class="u-input-class u-textarea-class"
					:style="[inputStyle]"
					:value="value"
					:placeholder="placeholder"
					:placeholderStyle="placeholderStyle"
					:disabled="disabled"
					:maxlength="inputMaxlength"
					:focus="focus"
					:autoHeight="autoHeight"
					:fixed="fixed"
					@input="onInput"
					@blur="onBlur"
					@focus="onFocus"
					@confirm="onConfirm"
					@tap="fieldClick"
				/>
				<input
					v-else
					:style="[inputStyle]"
					class="u-input-class"
					:type="type"
					:value="value"
					:password="password || type === 'password'"
					:placeholder="placeholder"
					:placeholderStyle="placeholderStyle"
					:disabled="disabled"
					:maxlength="inputMaxlength"
					:focus="focus"
					:confirmType="confirmType"
					@focus="onFocus"
					@blur="onBlur"
					@input="onInput"
					@confirm="onConfirm"
					@tap="fieldClick"
				/>
				<u-icon v-if="clearable && value && focused" name="close-circle-fill" color="#c0c4cc" class="u-clear-icon" @touchstart="onClear"/>
				<view class="u-button-wrap"><slot name="button" /></view>
				<u-icon v-if="rightIcon" @click="rightIconClick" :name="rightIcon" color="#c0c4cc" :style="[rightIconStyle]" size="26" class="u-arror-right" />
			</view>
		</view>
		<view v-if="errorMessage" class="u-error-message" :style="{
			paddingLeft: labelWidth + 'rpx'
		}">{{ errorMessage }}</view>
	</view>
</template>

<script>
export default {
	props: {
		icon: String,
		rightIcon: String,
		// arrowDirection: {
		// 	type: String,
		// 	default: 'right'
		// },
		required: Boolean,
		label: String,
		password: Boolean,
		clearable: {
			type: Boolean,
			default: true
		},
		// 左边标题的宽度单位rpx
		labelWidth: {
			type: [Number, String],
			default: 130
		},
		// 对齐方式，left|center|right
		labelAlign: {
			type: String,
			default: 'left'
		},
		inputAlign: {
			type: String,
			default: 'left'
		},
		iconColor: {
			type: String,
			default: '#606266'
		},
		autoHeight: {
			type: Boolean,
			default: true
		},
		errorMessage: String,
		placeholder: String,
		placeholderStyle: String,
		focus: Boolean,
		fixed: Boolean,
		value: [Number, String],
		type: {
			type: String,
			default: 'text'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: [Number, String],
			default: 140
		},
		confirmType: {
			type: String,
			default: 'done'
		},
	},
	inject: ['uCellGroup'],
	data() {
		return {
			focused: false,
			itemIndex: 0,
		};
	},
	created() {
		if(this.uCellGroup) {
			this.itemIndex = this.uCellGroup.index++;
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			style.textAlign = this.inputAlign;
			return style;
		},
		rightIconStyle() {
			let style = {};
			if (this.arrowDirection == 'top') style.transform = 'roate(-90deg)';
			if (this.arrowDirection == 'bottom') style.transform = 'roate(90deg)';
			else style.transform = 'roate(0deg)';
			return style;
		},
		labelStyle() {
			let style = {};
			if(this.labelAlign == 'left') style.justifyContent = 'flext-start';
			if(this.labelAlign == 'center') style.justifyContent = 'center';
			if(this.labelAlign == 'right') style.justifyContent = 'flext-end';
			return style;
		},
		// uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
		justifyContent() {
			if(this.labelAlign == 'left') return 'flex-start';
			if(this.labelAlign == 'center') return 'center';
			if(this.labelAlign == 'right') return 'flex-end';
		},
		// 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
		inputMaxlength() {
			return Number(this.maxlength)
		}
	},
	methods: {
		onInput(event) {
			this.$emit('input', event.target.value);
		},
		onFocus(event) {
			this.focused = true;
			this.$emit('focus', event);
		},
		onBlur(event) {
			this.focused = false;
			this.$emit('blur', event);
		},
		onConfirm(e) {
			this.$emit('confirm', e.detail.value);
		},
		onClear(event) {
			this.$emit('input', '');
		},
		rightIconClick() {
			this.$emit('right-icon-click');
			this.$emit('click');
		},
		fieldClick() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
.u-field {
	font-size: 28rpx;
	padding: 20rpx 28rpx;
	text-align: left;
	position: relative;
	color: $u-main-color;
}

.u-field-inner {
	display: flex;
	align-items: center;
}

.u-textarea-inner {
	align-items: flex-start;
}

.u-textarea-class {
	min-height: 96rpx;
}

.fild-body {
	display: flex;
	flex: 1;
}

.u-arror-right {
	margin-left: 8rpx;
}

.u-label-text {
	display: inline-block;
}

.u-label-left-gap {
	margin-left: 6rpx;
}

.u-label {
	width: 130rpx;
	flex: 1 1 130rpx;
	text-align: left;
	position: relative;
	display: flex;
	align-items: center;
}

.u-required::before {
	content: '*';
	position: absolute;
	left: -16rpx;
	font-size: 14px;
	color: $u-type-error;
	height: 9px;
	line-height: 1;
}

.u-input-class {
	position: relative;
	overflow: hidden;
	font-size: 28rpx;
	height: 48rpx;
	flex: 1;
	width: auto;
}

.u-clear-icon {
	display: flex;
	align-items: center;
}

.u-field-border:after {
	left: 32rpx!important;
	position: absolute;
	box-sizing: border-box;
	content: ' ';
	pointer-events: none;
	right: 0;
	top: 0;
	border-bottom: 1px solid $u-border-color;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.u-error-message {
	color: $u-type-error;
	font-size: 26rpx;
	text-align: left;
}

.placeholder-style {
	color: rgb(150, 151, 153);
}
</style>
