<template>
	<movable-area class="u-swipe-action" :style="{backgroundColor: bgColor}">
		<movable-view
			class="u-swipe-view"
			@change="change"
			@touchend="touchend"
			@touchstart="touchstart"
			direction="horizontal"
			:disabled="disabled"
			:x="moveX"
			:style="{
				width: movableViewWidth
			}"
		>
			<view class="u-swipe-content"><slot></slot></view>
			<view
				class="u-swipe-del"
				@tap.stop="del"
				:style="{
					width: innerBtnWidth + 'px',
					backgroundColor: btnBgColor
				}"
			>
				<view class="u-btn-text">{{ btnText }}</view>
			</view>
		</movable-view>
	</movable-area>
</template>

<script>
export default {
	props: {
		// 左边滑动出来按钮的文字
		btnText: {
			type: String,
			default: '删除'
		},
		// 滑动出来的按钮的背景颜色
		btnBgColor: {
			type: String,
			default: '#ff0033'
		},
		// index值，用于得知点击删除的是哪个按钮
		index: {
			type: [Number, String],
			default: ''
		},
		// 滑动按钮的宽度，单位为rpx
		btnWidth: {
			type: [String, Number],
			default: 180
		},
		// 是否禁止某个action滑动
		disabled: {
			type: Boolean,
			default: false
		},
		// 打开或着关闭组件
		show: {
			type: Boolean,
			default: false
		},
		// 组件背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		}
	},
	watch: {
		show: {
			immediate: true,
			handler(nVal, oVal) {
				if(nVal) {
					this.open();
				} else {
					this.close();
				}
			}
		}
	},
	data() {
		return {
			moveX: 0, // movable-view元素在x轴上需要移动的目标移动距离，用于展开或收起滑动的按钮
			scrollX: 0, // movable-view移动过程中产生的change事件中的x轴移动值
			status: false, // 滑动的状态，表示当前是展开还是关闭按钮的状态
			movableAreaWidth: 0, // 滑动区域
			elId: this.$u.guid(), // id，用于通知另外组件关闭时的识别
		}
	},
	computed: {
		movableViewWidth() {
			return this.movableAreaWidth + this.innerBtnWidth + 'px';
		},
		innerBtnWidth() {
			return uni.upx2px(this.btnWidth);
		},
		
	},
	mounted() {
		this.getActionRect();
	},
	methods: {
		// 点击删除按钮
		del() {
			this.status = false
			this.moveX = 0
			this.$emit('click', this.index);
		},
		// movable-view元素移动事件
		change(e) {
			this.scrollX = e.detail.x;
		},
		// 关闭按钮状态
		close() {
			this.moveX = 0;
			this.status = false;
		},
		// 打开按钮的状态 
		open() {
			if(this.disabled) return ;
			this.moveX = - this.btnWidth;
			this.status = true;
		},
		// 用户手指离开movable-view元素，停止触摸
		touchend() {
			this.moveX = this.scrollX;
			// 停止触摸时候，判断当前是展开还是关闭状态
			// 关闭状态
			// 这一步很重要，需要先给this.moveX一个变化的随机值，否则因为前后设置的为同一个值
			// props单向数据流的原因，导致movable-view元素不会发生变化，切记，详见文档：
			// https://uniapp.dcloud.io/use?id=%e5%b8%b8%e8%a7%81%e9%97%ae%e9%a2%98
			this.$nextTick(function(){
				if(this.status == false) {
					// 关闭状态左滑，产生的x轴位移为负值，也就是说滑动的距离大于按钮的三分之一宽度，自动展开按钮
					if(this.scrollX <= -this.innerBtnWidth / 3) {
						this.moveX = -this.innerBtnWidth; // 按钮宽度的负值，即为展开状态movable-view元素左滑的距离
						this.status = true; // 标志当前为展开状态
						this.emitOpenEvent();
						// 产生震动效果
						uni.vibrateShort();
					} else {
						this.moveX = 0; // 如果距离没有按钮宽度的三分之一，自动收起
						this.status = false;
						this.emitCloseEvent();
					}
				} else {
					// 如果在打开的状态下，右滑动的距离X轴偏移超过按钮的三分之一(负值反过来的三分之二)，自动收起按钮
					if(this.scrollX > -this.innerBtnWidth * 2 / 3) {
						this.moveX = 0;
						this.$nextTick(() => {
							this.moveX = 101;
						})
						this.status = false;
						this.emitCloseEvent();
					} else {
						this.moveX = -this.innerBtnWidth;
						this.status = true;
						this.emitOpenEvent();
					}
				}
			})
		},
		emitOpenEvent() {
			this.$emit('open', this.index);
		},
		emitCloseEvent() {
			this.$emit('close', this.index);
		},
		// 开始触摸
		touchstart() {
			
		},
		getActionRect() {
			this.$uGetRect('.u-swipe-action').then(res => {
				this.movableAreaWidth = res.width;
			})
		}
	}
}
</script>

<style scoped lang="scss">
.u-swipe-action {
	width: auto;
	height: initial;
	position: relative;
	overflow: hidden;
}

.u-swipe-view {
	display: flex;
	height: initial;
	position: relative; /* 这一句很关键，覆盖默认的绝对定位 */
}

.u-swipe-content {
	flex: 1;
}

.u-swipe-del {
	position: relative;
	font-size: 30rpx;
	color: #ffffff;
}

.u-btn-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
