<template>
	<view class="">
		<view class="u-sticky-wrap" :class="[elClass]" :style="{
			height: fixed ? height + 'px' : 'auto',
			backgroundColor: bgColor
		}">
			<view class="u-sticky" :style="{
				position: fixed ? 'fixed' : 'static',
				top: stickyTop + 'px',
				left: left + 'prx',
				width: width == 'auto' ? 'auto' : width + 'px'
			}">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px
			offsetTop: {
				type: [Number, String],
				default: 0
			},
			//列表中的索引值
			index: {
				type: [Number, String],
				default: ''
			},
			// 是否开启吸顶功能
			enable: {
				type: Boolean,
				default: true
			},
			// h5顶部导航栏的高度
			h5NavHeight: {
				type: [Number, String],
				default: 44
			},
			// 吸顶区域的背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			}
		},
		data() {
			return {
				fixed: false,
				height: 'auto',
				stickyTop: 0,
				elClass: this.$u.guid(),
				left: 0,
				width: 'auto',
			};
		},
		watch: {
			offsetTop(val) {
				this.initObserver();
			},
			enable(val) {
				if(val == false) {
					this.fixed = false;
					this.disconnectObserver('contentObserver');
				} else {
					this.initObserver();
				}
			}
		},
		mounted() {
			this.initObserver();
		},
		methods: {
			initObserver() {
				if(!this.enable) return ;
				// #ifdef H5
				this.stickyTop = this.offsetTop != 0 ? uni.upx2px(this.offsetTop) + this.h5NavHeight : this.h5NavHeight;
				// #endif
				// #ifndef H5
				this.stickyTop = this.offsetTop != 0 ? uni.upx2px(this.offsetTop) : 0;
				// #endif
				
				this.disconnectObserver('contentObserver');
				this.$uGetRect('.' + this.elClass).then((res) => {
					this.height = res.height;
					this.left = res.left;
					this.width = res.width;
					this.$nextTick(() => {
						this.observeContent();
					});
				});
			},
			observeContent() {
				this.disconnectObserver('contentObserver');
				const contentObserver = this.createIntersectionObserver({
					thresholds: [0.95, 0.98, 1]
				});
				contentObserver.relativeToViewport({
					top: -this.stickyTop
				});
				contentObserver.observe('.' + this.elClass, res => {
					if (!this.enable) return ;
					this.setFixed(res.boundingClientRect.top);
				});
				this.contentObserver = contentObserver;
			},
			setFixed(top) {
				const fixed = top < this.stickyTop;
				this.fixed = fixed;
				if(fixed) this.$emit('fixed', this.index);
			},
			disconnectObserver(observerName) {
				const observer = this[observerName];
				observer && observer.disconnect();
			},
		}
	};
</script>

<style scoped lang="scss">
	.u-sticky {
		z-index: 9999999999;
	}
</style>