<template>
	<u-popup class="" :maskCloseAble="maskCloseAble" mode="bottom" :popup="false" v-model="value" length="auto" :safeAreaInsetBottom="safeAreaInsetBottom" @close="popupClose">
		<slot />
		<view class="u-tooltip" v-if="tooltip">
			<view class="u-tooltip-item u-tooltip-cancel" hover-class="u-tooltip-cancel-hover" @tap="onCancel">
				{{cancelBtn ? '取消' : ''}}
			</view>
			<view v-if="tips" class="u-tooltip-item u-tooltip-tips">
				{{tips && mode == 'number' ? '数字键盘' : mode == 'card' ? '身份证键盘' : '车牌号键盘'}}
			</view>
			<view v-if="confirmBtn" @tap="onConfirm" class="u-tooltip-item u-tooltips-submit" hover-class="u-tooltips-submit-hover">
				{{confirmBtn ? '完成' : ''}}
			</view>
		</view>
		<block v-if="mode == 'number' || mode == 'card'">
			<u-number-keyboard :random="random" @backspace="backspace" @change="change" :mode="mode" :dotEnabled="dotEnabled"></u-number-keyboard>
		</block>
		<block v-else>
			<u-car-keyboard :random="random" @backspace="backspace" @change="change"></u-car-keyboard>
		</block>
	</u-popup>
</template>

<script>
	export default {
		props: {
			// 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘
			mode: {
				type: String,
				default: 'number'
			},
			// 是否显示键盘的"."符号
			dotEnabled: {
				type: Boolean,
				default: true
			},
			// 是否显示顶部工具条
			tooltip: {
				type: Boolean,
				default: true
			},
			// 是否显示工具条中间的提示
			tips: {
				type: Boolean,
				default: true
			},
			// 是否显示工具条左边的"取消"按钮
			cancelBtn: {
				type: Boolean,
				default: true
			},
			// 是否显示工具条右边的"完成"按钮
			confirmBtn: {
				type: Boolean,
				default: true
			},
			// 是否打乱键盘按键的顺序
			random: {
				type: Boolean,
				default: false
			},
			// 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			},
			// 是否允许通过点击遮罩关闭键盘
			maskCloseAble: {
				type: Boolean,
				default: true
			},
			// 通过双向绑定控制键盘的弹出与收起
			value: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				//show: false
			}
		},
		computed: {
			
		},
		methods: {
			change(e) {
				this.$emit('change', e);
			},
			// 键盘关闭
			popupClose() {
				// 通过发送input这个特殊的事件名，可以修改父组件传给props的value的变量，也即双向绑定
				this.$emit('input', false);
			},
			// 输入完成
			onConfirm() {
				this.popupClose();
				this.$emit('confirm');
			},
			// 取消输入
			onCancel() {
				this.popupClose();
				this.$emit('cancel');
			},
			// 退格键
			backspace() {
				this.$emit('backspace');
			},
			// 关闭键盘
			// close() {
			// 	this.show = false;
			// },
			// // 打开键盘
			// open() {
			// 	this.show = true;
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.u-keyboard {
		position: relative;
		z-index: 1003;
	}
	
	.u-tooltip {
		display: flex;
		justify-content: space-between;
	}
	
	.u-tooltip-item {
		color: #333333;
		flex: 0 0 33.333333%;
		text-align: center;
		padding: 20rpx 10rpx;
		font-size: 28rpx;
	}
	
	.u-tooltips-submit {
		text-align: right;
		flex-grow: 1;
		flex-wrap: 0;
		padding-right: 40rpx;
		color: $u-type-primary;
	}
	
	.u-tooltip-cancel {
		text-align: left;
		flex-grow: 1;
		flex-wrap: 0;
		padding-left: 40rpx;
		color: #888888;
	}
	
	.u-tooltips-submit-hover {
		color: $u-type-success;
	}
	
	.u-tooltip-cancel-hover {
		color: #333333;
	}
</style>
