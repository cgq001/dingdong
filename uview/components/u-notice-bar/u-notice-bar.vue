<template>
	<view class="" v-if="show">
		<block v-if="mode == 'horizontal' && isCircular">
			<u-row-notice
				:type="type"
				:color="color"
				:bgColor="bgColor"
				:list="list"
				:volumeIcon="volumeIcon"
				:moreIcon="moreIcon"
				:closeIcon="closeIcon"
				:mode="mode"
				:fontSize="fontSize"
				:speed="speed"
				:playState="playState"
				@getMore="getMore"
				@close="close"
				@click="click"
			></u-row-notice>
		</block>
		<block v-if="mode == 'vertical' || (mode == 'horizontal' && !isCircular)">
			<u-column-notice
				:type="type"
				:color="color"
				:bgColor="bgColor"
				:list="list"
				:volumeIcon="volumeIcon"
				:moreIcon="moreIcon"
				:closeIcon="closeIcon"
				:mode="mode"
				:fontSize="fontSize"
				:duration="duration"
				:playState="playState"
				@getMore="getMore"
				@close="close"
				@click="click"
			></u-column-notice>
		</block>
	</view>
</template>
<script>
export default {
	props: {
		// 显示的内容，数组
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 显示的主题，success|error|primary|info|warning
		type: {
			type: String,
			default: 'warning'
		},
		// 是否显示左侧的音量图标
		volumeIcon: {
			type: Boolean,
			default: true
		},
		// 是否显示右侧的右箭头图标
		moreIcon: {
			type: Boolean,
			default: false
		},
		// 是否显示右侧的关闭图标
		closeIcon: {
			type: Boolean,
			default: false
		},
		// 是否自动播放
		autoplay: {
			type: Boolean,
			default: true
		},
		// 文字颜色，各图标也会使用文字颜色
		color: {
			type: String,
			default: ''
		},
		// 背景颜色
		bgColor: {
			type: String,
			default: ''
		},
		// 滚动方向，horizontal-水平滚动，vertical-垂直滚动
		mode: {
			type: String,
			default: 'horizontal'
		},
		// 是否显示
		show: {
			type: Boolean,
			default: true
		},
		// 字体大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 28
		},
		// 滚动一个周期的时间长，单位ms
		duration: {
			type: [Number, String],
			default: 2000
		},
		// 水平滚动时的滚动速度，即每秒滚动多少rpx，这有利于控制文字无论多少时，都能有一个恒定的速度
		speed: {
			type: [Number, String],
			default: 160
		},
		// 水平滚动时，是否采用衔接形式滚动
		// 水平衔接模式，采用的是swiper组件，水平滚动
		isCircular: {
			type: Boolean,
			default: true
		},
		// 播放状态，paly-播放，paused-暂停
		playState: {
			type: String,
			default: 'play'
		}
	},
	methods: {
		// 点击通告栏
		click(index) {
			this.$emit('click', index);
		},
		// 点击关闭按钮
		close() {
			this.$emit('close');
		},
		// 点击更多箭头按钮
		getMore() {
			this.$emit('getMore');
		}
	}
};
</script>

<style lang="scss" scoped>
.u-notice-bar {
	padding: 18rpx 24rpx;
	overflow: hidden;
}

.u-direction-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.u-left-icon {
	display: flex;
	align-items: center;
}

.u-notice-box {
	flex: 1;
	display: flex;
	overflow: hidden;
	margin-left: 12rpx;
}

.u-right-icon {
	margin-left: 12rpx;
	display: flex;
	align-items: center;
}

.u-notice-content {
	line-height: 1;
	white-space: nowrap;
	font-size: 26rpx;
	animation: u-loop-animation 10s linear infinite both;
	text-align: right;
	// 这一句很重要，为了能让滚动左右连接起来
	padding-left: 100%;
}

@keyframes u-loop-animation {
	0% {
		transform: translate3d(0, 0, 0);
	}

	100% {
		transform: translate3d(-100%, 0, 0);
	}
}
</style>
