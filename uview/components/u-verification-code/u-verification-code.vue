<template>
	<view class="u-code-wrap">
		
	</view>
</template>

<script>
	export default {
		props: {
			// 倒计时总秒数
			seconds: {
				type: [String, Number],
				default: 60
			},
			// 尚未开始时提示
			startText: {
				type: String,
				default: '获取验证码'
			},
			// 正在倒计时中的提示
			changeText: {
				type: String,
				default: 'X秒重新获取'
			},
			// 倒计时结束时的提示
			endText: {
				type: String,
				default: '重新获取'
			},
		},
		data() {
			return {
				secNum: this.seconds,
				timer: null,
				canGetCode: true, // 是否可以执行验证码操作
			}
		},
		mounted() {
			this.changeEvent(this.startText);
		},
		methods: {
			// 开始倒计时
			start() {
				this.secNum = this.seconds;
				this.$emit('start');
				this.canGetCode = false;
				// 这里放这句，是为了一开始时就提示，否则要等setInterval的1秒后才会有提示
				this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
				this.timer = setInterval(() => {
					if(--this.secNum) {
						// 用当前倒计时的秒数替换提示字符串中的"x"字母
						this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
					} else {
						clearInterval(this.timer);
						this.changeEvent(this.endText);
						this.secNum = this.seconds;
						this.$emit('end');
						this.canGetCode = true;
					}
				}, 1000);
			},
			// 重置，可以让用户再次获取验证码
			reset() {
				this.canGetCode = true;
				clearInterval(this.timer);
				this.secNum = this.seconds;
				this.changeEvent(this.endText);
			},
			changeEvent(text) {
				this.$emit('change', text);
			}
		},
		beforeDestroy() {
			clearTimeout(this.timer)
		},
	}
</script>

<style lang="scss" scoped>
	.u-code-wrap {
		width: 0;
		height: 0;
		position: fixed;
		z-index: -1;
	}
</style>
