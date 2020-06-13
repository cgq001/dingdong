<template>
	<view class="u-char-box">
		<view class="u-char-flex">
			<input :value="valueModel" type="number" :focus="focus" :maxlength="maxlength" class="u-input" @input="getVal" />
			<view v-for="(item, index) in maxlength" :key="index">
				<view :class="[breathe && charArrLength == index ? 'u-breathe' : '', 'u-char-item', 
				charArrLength === index && mode == 'box' ? 'u-box-active' : '',
				mode === 'box' ? 'u-box' : '']" :style="{
					fontWeight: bold ? 'bold' : 'normal',
					fontSize: fontSize + 'rpx',
					color: inactiveColor
				}">
					<view class="u-placeholder-line" :style="{display: charArrLength === index ? 'block' : 'none'}" v-if="mode !== 'middleLine'"></view>
					<view v-if="mode === 'middleLine' && charArrLength <= index" :class="[breathe && charArrLength == index ? 'u-breathe' : '', charArrLength === index ? 'u-middle-line-active' : '']"
					 class="u-middle-line" :style="{height: bold ? '4px' : '2px', background: charArrLength === index ? activeColor : inactiveColor}"></view>
					<view v-if="mode === 'bottomLine'" :class="[breathe && charArrLength == index ? 'u-breathe' : '', charArrLength === index ? 'u-buttom-line-active' : '']"
					 class="u-bottom-line" :style="{height: bold ? '4px' : '2px', background: charArrLength === index ? activeColor : inactiveColor}"></view>
					<block v-if="!dotFill"> {{ charArr[index] ? charArr[index] : ''}}</block>
					<block v-else>
						<text class="u-dot">{{ charArr[index] ? '●' : ''}}</text>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 最大输入长度
			maxlength: {
				type: [Number, String],
				default: 4
			},
			// 是否用圆点填充
			dotFill: {
				type: Boolean,
				default: false
			},
			// 显示模式，box-盒子模式，bottomLine-横线在底部模式，middleLine-横线在中部模式
			mode: {
				type: String,
				default: "box"
			},
			// 预置值
			value: {
				type: [String, Number],
				default: ''
			},
			// 当前激活输入item，是否带有呼吸效果
			breathe: {
				type: Boolean,
				default: true
			},
			// 是否自动获取焦点
			focus: {
				type: Boolean,
				default: false
			},
			// 字体是否加粗
			bold: {
				type: Boolean,
				default: false
			},
			// 字体大小
			fontSize: {
				type: [String, Number],
				default: 60
			},
			// 激活样式
			activeColor: {
				type: String,
				default: '#2979ff'
			},
			// 未激活的样式
			inactiveColor: {
				type: String,
				default: '#606266'
			}
		},
		watch: {
			maxlength: {
				// 此值设置为true，会在组件加载后无需maxlength变化就会执行一次本监听函数，无需再created生命周期中处理
				immediate: true,
				handler(val) {
					this.maxlength = Number(val);
				}
			},
			value: {
				immediate: true,
				handler(val) {
					// 转为字符串
					val = String(val);
					// 超出部分截掉
					this.valueModel = val.substring(0, this.maxlength);
				}
			},
		},
		data() {
			return {
				valueModel: ""
			}
		},
		computed: {
			// 是否显示呼吸灯效果
			animationClass() {
				return (index) => {
					if (this.breathe && this.charArr.length == index) return 'u-breathe';
					else return '';
				}
			},
			// 用于显示字符
			charArr() {
				return this.valueModel.split('');
			},
			charArrLength() {
				return this.charArr.length;
			}
		},
		methods: {
			getVal(e) {
				let {
					value
				} = e.detail
				this.valueModel = value;
				// 判断长度是否超出了maxlength值，理论上不会发生，因为input组件设置了maxlength属性值
				if (String(value).length > this.maxlength) return;
				// 未达到maxlength之前，发送change事件，达到后发送finish事件
				this.$emit('change', value);
				if (String(value).length == this.maxlength) {
					this.$emit('finish', value);
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@keyframes breathe {
		0% {
			opacity: 0.3;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 0.3;
		}
	}

	.u-char-box {
		text-align: center;
	}

	.u-char-flex {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;
	}

	.u-input {
		position: absolute;
		top: 0;
		left: -100%;
		width: 200%;
		height: 100%;
		text-align: left;
		z-index: 9;
		opacity: 1;
	}

	.u-char-item {
		position: relative;
		width: 90rpx;
		height: 90rpx;
		margin: 10rpx 10rpx;
		font-size: 60rpx;
		font-weight: bold;
		color: $u-main-color;
		line-height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.u-middle-line {
		border: none;
	}

	.u-box {
		box-sizing: border-box;
		border: 2rpx solid #cccccc;
		border-radius: 6rpx;
	}

	.u-box-active {
		overflow: hidden;
		animation-timing-function: ease-in-out;
		animation-duration: 1500ms;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		border: 2rpx solid $u-type-primary;
	}

	.u-middle-line-active {
		background: $u-type-primary;
	}

	.u-breathe {
		animation: breathe 2s infinite ease;
	}

	.u-placeholder-line {
		display: none;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 2rpx;
		height: 40rpx;
		background: #333333;
		animation: twinkling 1.5s infinite ease;
	}

	.u-animation-breathe {
		animation-name: breathe;
	}

	.u-dot {
		font-size: 34rpx;
		line-height: 34rpx;
	}

	.u-middle-line {
		height: 4px;
		background: #000000;
		width: 80%;
		position: absolute;
		border-radius: 2px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.u-buttom-line-active {
		background: $u-type-primary;
	}

	.u-bottom-line {
		height: 4px;
		background: #000000;
		width: 80%;
		position: absolute;
		border-radius: 2px;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
	}
</style>
