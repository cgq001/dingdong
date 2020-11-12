<template>
	<view class="u-swiper-wrap">
		<swiper
			@change="change"
			:current="current"
			:interval="interval"
			:circular="circular"
			:duration="duration"
			:autoplay="autoplay"
			:previous-margin="effect3d ? effect3dPreviousMargin + 'rpx' : '0'"
			:next-margin="effect3d ? effect3dPreviousMargin + 'rpx' : '0'"
			:style="{
				height: height + 'rpx'
			}"
		>
			<swiper-item
				class="u-swiper-item"
				v-for="(item, index) in list"
				:key="index"
				@tap="listClick(index)"
			>
				<view
					class="u-list-image-wrap"
					:class="[current != index ? 'u-list-scale' : '']"
					:style="{
						borderRadius: `${borderRadius}rpx`,
						transform: effect3d && current != index ? 'scaleY(0.9)' : 'scaleY(1)',
						margin: effect3d && current != index ? '0 20rpx' : 0
					}"
				>
					<image class="u-swiper-image" :src="item[name]" :mode="imgMode"></image>
					<view v-if="title"
						class="u-swiper-title u-line-1"
						:style="{
							'padding-bottom': titlePaddingBottom
						}"
					>
						{{ item.title }}
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view
			class="u-swiper-indicator"
			:style="{
				top: indicatorPos == 'topLeft' || indicatorPos == 'topCenter' || indicatorPos == 'topRight' ? '12rpx' : 'auto',
				bottom: indicatorPos == 'bottomLeft' || indicatorPos == 'bottomCenter' || indicatorPos == 'bottomRight' ? '12rpx' : 'auto',
				justifyContent: justifyContent,
				padding: `0 ${effect3d ? '74rpx' : '24rpx'}`
			}"
		>
			<block v-if="mode == 'rect'">
				<view class="u-indicator-item-rect" :class="{ 'u-indicator-item-rect-active': index == current }" v-for="(item, index) in list" :key="index"></view>
			</block>
			<block v-if="mode == 'dot'">
				<view class="u-indicator-item-dot" :class="{ 'u-indicator-item-dot-active': index == current }" v-for="(item, index) in list" :key="index"></view>
			</block>
			<block v-if="mode == 'round'">
				<view class="u-indicator-item-round" :class="{ 'u-indicator-item-round-active': index == current }" v-for="(item, index) in list" :key="index"></view>
			</block>
			<block v-if="mode == 'number'">
				<view class="u-indicator-item-number">{{ current + 1 }}/{{ list.length }}</view>
			</block>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 轮播图的数据,格式如：[{image: 'xxxx', title: 'xxxx'}，{image: 'yyyy', title: 'yyyy'}]，其中title字段可选
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 是否显示title标题
		title: {
			type: Boolean,
			default: false
		},
		// 用户自定义的指示器的样式
		indicator: {
			type: Object,
			default() {
				return {};
			}
		},
		// 圆角值
		borderRadius: {
			type: [Number, String],
			default: 8
		},
		// 隔多久自动切换
		interval: {
			type: [String, Number],
			default: 3000
		},
		// 指示器的模式，rect|dot|number|round
		mode: {
			type: String,
			default: 'round'
		},
		// list的高度，单位rpx
		height: {
			type: [Number, String],
			default: 250
		},
		// 指示器的位置，topLeft|topCenter|topRight|bottomLeft|bottomCenter|bottomRight
		indicatorPos: {
			type: String,
			default: 'bottomCenter'
		},
		// 是否开启缩放效果
		effect3d: {
			type: Boolean,
			default: false
		},
		// 3D模式的情况下，激活item与前后item之间的距离，单位rpx
		effect3dPreviousMargin: {
			type: [Number, String],
			default: 50
		},
		// 是否自动播放
		autoplay: {
			type: Boolean,
			default: true
		},
		// 自动轮播时间间隔，单位ms
		duration: {
			type: [Number, String],
			default: 500
		},
		// 是否衔接滑动，即到最后一张时接着滑动，是佛自动切换到第一张
		circular: {
			type: Boolean,
			default: true
		},
		// 图片的形式模式 
		imgMode: {
			type: String,
			default: 'aspectFill'
		},
		// 从list数组中读取的图片的属性名
		name: {
			type: String,
			default: 'image'
		}
	},
	data() {
		return {
			current: 0 // 当前活跃的swiper-item的index
		};
	},
	computed: {
		justifyContent() {
			if(this.indicatorPos == 'topLeft' || this.indicatorPos == 'bottomLeft') return 'flex-start';
			if(this.indicatorPos == 'topCenter' || this.indicatorPos == 'bottomCenter') return 'center';
			if(this.indicatorPos == 'topRight' || this.indicatorPos == 'bottomRight') return 'flex-end';
		},
		titlePaddingBottom() {
			let tmp = 0;
			if(this.mode == 'none') return '12rpx';
			if(['bottomLeft', 'bottomCenter', 'bottomRight'].indexOf(this.indicatorPos) >= 0 && this.mode == 'number') {
				tmp = '60rpx';
			} else if(['bottomLeft', 'bottomCenter', 'bottomRight'].indexOf(this.indicatorPos) >= 0 && this.mode != 'number') {
				tmp = '40rpx';
			} else {
				tmp = '12rpx';
			}
			return tmp;
		}
	},
	methods: {
		listClick(index) {
			this.$emit('click', index);
		},
		change(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss" scoped>
.u-swiper-wrap {
	position: relative;
	overflow: hidden;
}

.u-swiper-image {
	width: 100%;
	will-change: transform;
	height: 100%;
	display: block;
	/* #ifdef H5 */
	pointer-events: none;
	/* #endif */
}

.u-swiper-indicator {
	padding: 0 24rpx;
	position: absolute;
	display: flex;
	width: 100%;
	z-index: 1;
}

.u-indicator-item-rect {
	width: 26rpx;
	height: 8rpx;
	margin: 0 6rpx;
	transition: all 0.5s;
	background-color: rgba(0, 0, 0, 0.3);
}

.u-indicator-item-rect-active {
	background-color: rgba(255, 255, 255, 0.8);
}

.u-indicator-item-dot {
	width: 14rpx;
	height: 14rpx;
	margin: 0 6rpx;
	border-radius: 20rpx;
	transition: all 0.5s;
	background-color: rgba(0, 0, 0, 0.3);
}

.u-indicator-item-dot-active {
	background-color: rgba(255, 255, 255, 0.8);
}

.u-indicator-item-round {
	width: 14rpx;
	height: 14rpx;
	margin: 0 6rpx;
	border-radius: 20rpx;
	transition: all 0.5s;
	background-color: rgba(0, 0, 0, 0.3);
}

.u-indicator-item-round-active {
	width: 34rpx;
	background-color: rgba(255, 255, 255, 0.8);
}

.u-indicator-item-number {
	padding: 6rpx 16rpx;
	line-height: 1;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 100rpx;
	font-size: 26rpx;
	color: rgba(255, 255, 255, 0.8);
}

.u-list-scale {
	transform-origin: center center;
}

.u-list-image-wrap {
	width: 100%;
	height: 100%;
	flex: 1;
	transition: all 0.5s;
	overflow: hidden;
	box-sizing: content-box;
	position: relative;
}

.u-swiper-title {
	position: absolute;
	background-color: rgba(0, 0, 0, 0.3);
	bottom: 0;
	left: 0;
	width: 100%;
	font-size: 28rpx;
	padding: 12rpx 24rpx;
	color: rgba(255, 255, 255, 0.9);
}

.u-swiper-item {
	display: flex;
	overflow: hidden;
	align-items: center;
}
</style>
