<template>
	<view class="u-countdown">
		<view class="u-countdown-item" :style="[itemStyle]" v-if="showDays">
			<view class="u-countdown-time" :style="[letterStyle]">
				{{ d }}
			</view>
		</view>
		<view
			class="u-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showDays"
		>
			{{ separator == 'colon' ? ':' : '天' }}
		</view>
		<view class="u-countdown-item" :style="[itemStyle]" v-if="showHours">
			<view class="u-countdown-time" :style="{ fontSize: fontSize + 'rpx', color: color}">
				{{ h }}
			</view>
		</view>
		<view
			class="u-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showHours"
		>
			{{ separator == 'colon' ? ':' : '时' }}
		</view>
		<view class="u-countdown-item" :style="[itemStyle]" v-if="showMinutes">
			<view class="u-countdown-time" :style="{ fontSize: fontSize + 'rpx', color: color}">
				{{ i }}
			</view>
		</view>
		<view
			class="u-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showMinutes"
		>
			{{ separator == 'colon' ? ':' : '分' }}
		</view>
		<view class="u-countdown-item" :style="[itemStyle]" v-if="showSeconds">
			<view class="u-countdown-time" :style="{ fontSize: fontSize + 'rpx', color: color}">
				{{ s }}
			</view>
		</view>
		<view
			class="u-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showSeconds && separator == 'zh'"
		>
			秒
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 倒计时的时间，秒为单位
		timestamp: {
			type: [Number, String],
			default: 0
		},
		// 是否自动开始倒计时
		autopaly: {
			type: Boolean,
			default: true
		},
		// 用英文冒号(colon)或者中文(zh)当做分隔符，false的时候为中文，如："11:22"或"11时22秒"
		separator: {
			type: String,
			default: 'colon'
		},
		// 分隔符的大小，单位rpx
		separatorSize: {
			type: [Number, String],
			default: 30
		},
		// 分隔符颜色
		separatorColor: {
			type: String,
			default: "#303133"
		},
		// 字体颜色
		color: {
			type: String,
			default: '#303133'
		},
		// 字体大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 30
		},
		// 背景颜色
		bgColor: {
			type: String,
			default: '#fff'
		},
		// 数字框高度，单位rpx
		height: {
			type: [Number, String],
			default: 'auto'
		},
		// 是否显示数字框
		showBorder: {
			type: Boolean,
			default: false
		},
		// 边框颜色
		borderColor: {
			type: String,
			default: '#303133'
		},
		// 是否显示秒
		showSeconds: {
			type: Boolean,
			default: true
		},
		// 是否显示分钟
		showMinutes: {
			type: Boolean,
			default: true
		},
		// 是否显示小时
		showHours: {
			type: Boolean,
			default: true
		},
		// 是否显示“天”
		showDays: {
			type: Boolean,
			default: true
		},
	},
	watch: {
		// 监听时间戳的变化
		timestamp(newVal, oldVal) {
			// 如果倒计时间发生变化，清除定时器，重新开始倒计时
			clearInterval(this.timer);
			this.start();
		}
	},
	data() {
		return {
			d: '00', // 天的默认值
			h: '00', // 小时的默认值
			i: '00', // 分钟的默认值
			s: '00', // 秒的默认值
			timer: null // 定时器
		};
	},
	computed: {
		// 倒计时item的样式，item为分别的时分秒部分的数字
		itemStyle() {
			let style = {};
			if(this.height) {
				style.height = this.height + 'rpx';
				style.width = this.height + 'rpx';
			}
			if(this.showBorder) {
				style.borderStyle = 'solid';
				style.borderColor = this.borderColor;
				style.borderWidth = '1px';
			}
			if(this.bgColor) {
				style.backgroundColor = this.bgColor;
			}
			return style;
		},
		// 倒计时数字的样式
		letterStyle() {
			let style = {};
			if(this.fontSize) style.fontSize = this.fontSize +  'rpx';
			if(this.color) style.color = this.color;
			return style;
		}
	},
	mounted() {
		// 如果自动倒计时
		this.autopaly && this.timestamp && this.start();
	},
	methods: {
		// 倒计时
		start() {
			if (this.timestamp <= 0) return;
			let seconds = Number(this.timestamp);
			this.formatTime(seconds);
			this.timer = setInterval(() => {
				seconds--;
				if (seconds < 0) {
					return this.end();
				}
				this.formatTime(seconds);
			}, 1000);
		},
		// 格式化时间
		formatTime(seconds) {
			// 小于等于0的话，结束倒计时
			seconds <= 0 && this.end();
			let [day, hour, minute, second] = [0, 0, 0, 0];
			day = Math.floor(seconds / (60 * 60 * 24));
			hour = Math.floor(seconds / (60 * 60)) - day * 24;
			minute = Math.floor(seconds / 60) - hour * 60 - day * 24 * 60;
			second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
			// 如果小于10，在前面补上一个"0"
			hour = hour < 10 ? '0' + hour : hour;
			minute = minute < 10 ? '0' + minute : minute;
			second = second < 10 ? '0' + second : second;
			this.d = day;
			this.h = hour;
			this.i = minute;
			this.s = second;
		},
		// 停止倒计时
		end() {
			// 清除定时器
			clearInterval(this.timer);
			this.timer = null;
			this.$emit('end', {});
		}
	},
	beforeDestroy() {
		clearInterval(this.timer);
		this.timer = null;
	}
};
</script>

<style scoped lang="scss">
	.u-countdown {
		display: inline-flex;
		align-items: center;
	}
	
	.u-countdown-item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rpx;
		border-radius: 6rpx;
		white-space: nowrap;
		transform: translateZ(0);
	}
	
	.u-countdown-time {
		margin: 0;
		padding: 0;
		line-height: 1;
	}
	
	.u-countdown-colon {
		display: flex;
		justify-content: center;
		padding: 0 5rpx;
		line-height: 1;
		align-items: center;
		padding-bottom: 4rpx;
	}
	
	.u-countdown-scale {
		transform: scale(0.9);
		transform-origin: center center;
	}
</style>
