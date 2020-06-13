<template>
	<view class="u-alert-tips" v-if="show" :class="{'u-close-alert-tips': !show}" :style="{
		backgroundColor: computeBgColor,
		borderColor: computeBorderColor
	}">
		<view class="u-icon-wrap">
			<u-icon v-if="showIcon" :name="$u.type2icon(type)" :size="description ? 40 : 32" class="u-icon" :color="computeColor"></u-icon>
		</view>
		<view class="u-alert-content" @tap.stop="click">
			<view class="u-alert-title" :style="{fontWeight: description ? 500 : 'normal'}">
				{{title}}
			</view>
			<view v-if="description" class="u-alert-desc">
				{{description}}
			</view>
		</view>
		<view class="u-icon-wrap">
			<u-icon @click="close" v-if="closeAble && !closeText" hoverClass="u-type-error-hover-color" name="close" color="#c0c4cc"
			 :size="22" class="u-close-icon" :style="{
				top: description ? '18rpx' : '24rpx'
			}"></u-icon>
		</view>
		<text v-if="closeAble && closeText" class="u-close-text" :style="{
			top: description ? '18rpx' : '24rpx'
		}">{{closeText}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			// 显示文字
			title: {
				type: String,
				default: ''
			},
			// 主题，success/warning/info/error
			type: {
				type: String,
				default: 'warning'
			},
			// 辅助性文字
			description: {
				type: String,
				default: ''
			},
			// 是否可关闭
			closeAble: {
				type: Boolean,
				default: false
			},
			// 关闭按钮自定义文本
			closeText: {
				type: String,
				default: ''
			},
			// 是否显示图标
			showIcon: {
				type: Boolean,
				default: false
			},
			// 文字颜色，如果定义了color值，icon会失效
			color: {
				type: String,
				default: ''
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: ''
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: ''
			},
			// 是否显示
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
			}
		},
		watch: {
			show(val) {
				if (val == false) {
					// 先opacity隐藏，再移除
					setTimeout(() => {
						this.showAlert = false;
					}, 300);
				}
			}
		},
		computed: {
			// 计算字体颜色，如果没有自定义的，就用uview主题颜色
			computeColor() {
				if (this.color) return this.color;
				else return this.$u.color[this.type];
			},
			// 计算背景颜色
			computeBgColor() {
				if (this.bgColor) return this.bgColor;
				return this.$u.color[this.type + 'Light'];
			},
			computeBorderColor() {
				if (this.borderColor) return this.borderColor;
				return this.$u.color[this.type + 'Disabled'];
			}
		},
		methods: {
			// 点击内容
			click() {
				this.$emit('click');
			},
			// 点击关闭按钮
			close() {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-alert-tips {
		display: flex;
		align-items: center;
		padding: 16rpx 30rpx;
		border-radius: 8rpx;
		position: relative;
		transition: all 0.3s linear;
		border: 1px solid #fff;
	}

	.u-close-alert-tips {
		opacity: 0;
		visibility: hidden;
	}

	@keyframes myfirst {
		from {
			height: 100%;
		}

		to {
			height: 0
		}
	}

	.u-icon {
		margin-right: 16rpx;
	}

	.u-alert-title {
		font-size: 28rpx;
		color: $u-main-color;
	}

	.u-alert-desc {
		font-size: 26rpx;
		text-align: left;
		color: $u-content-color;
	}

	.u-close-icon {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.u-close-hover {
		color: red;
	}
	
	.u-close-text {
		font-size: 24rpx;
		color: $u-tips-color;
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		line-height: 1;
	}
</style>
