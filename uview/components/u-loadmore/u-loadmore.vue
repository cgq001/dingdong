<template>
	<view class="u-load-more-wrap" :style="{backgroundColor: bgColor}">
		<!-- 加载中和没有更多的状态才显示两边的横线 -->
		<view :class="status == 'loadmore' || status == 'nomore' ? 'u-more' : ''" class="u-load-more-inner">
			<u-loading class="u-loadmore-icon" :color="iconColor" :mode="iconType == 'circle' ? 'circle' : 'flower'" :show="status == 'loading' && icon"></u-loading>
			<!-- 如果没有更多的状态下，显示内容为dot（粗点），加载特定样式 -->
			<view :style="[loadTextStyle]" :class="[(status == 'nomore' && isDot == true) ? 'u-dot-text' : 'u-more-text']" @tap="loadMore">
				{{ showText }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "loadMore",
		props: {
			//当前页面背景颜色，如果背景为非白色的时候，需要把此值设置为背景的颜色
			bgColor: {
				type: String,
				default: '#fff'
			},
			// 是否显示加载中的图标
			icon: {
				type: Boolean,
				default: true
			},
			// 字体大小
			fontSize: {
				type: String,
				default: '28'
			},
			// 字体颜色
			color: {
				type: String, 
				default: '#606266'
			},
			// 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
			status: {
				type: String,
				default: 'loadmore'
			},
			// 加载中状态的图标，flower-花朵状图标，circle-圆圈状图标
			iconType: {
				type: String,
				default: 'circle'
			},
			// 显示的文字
			loadText: {
				type: Object,
				default () {
					return {
						loadmore: '加载更多',
						loading: '正在加载...',
						nomore: '没有更多了'
					}
				}
			},
			// 在“没有更多”状态下，是否显示粗点
			isDot: {
				type: Boolean,
				default: false
			},
			// 加载中显示圆圈动画时，动画的颜色
			iconColor: {
				type: String,
				default: '#b7b7b7'
			}
		},
		data() {
			return {
				// 粗点
				dotText: "●"
			}
		},
		computed: {
			// 加载的文字显示的样式
			loadTextStyle() {
				return {
					color: this.color,
					fontSize: this.fontSize + 'rpx',
					position: 'relative',
					zIndex: 1,
					backgroundColor: this.bgColor,
					// 如果是加载中状态，动画和文字需要距离近一点
					padding: this.status == 'loading' ? '0 8px' : '0 12px',
				}
			},
			// 加载中圆圈动画的样式
			cricleStyle() {
				return {
					borderColor: `#e5e5e5 #e5e5e5 #e5e5e5 ${this.circleColor}`
				}
			},
			// 加载中花朵动画形式
			// 动画由base64图片生成，暂不支持修改
			flowerStyle() {
				return {
				}
			},
			// 显示的提示文字
			showText() {
				let text = '';
				if(this.status == 'loadmore') text = this.loadText.loadmore;
				else if(this.status == 'loading') text = this.loadText.loading;
				else if(this.status == 'nomore' && this.isDot) text = this.dotText;
				else text = this.loadText.nomore;
				return text;
			}
		},
		methods: {
			loadMore() {
				// 只有在“加载更多”的状态下才发送点击事件，内容不满一屏时无法触发底部上拉事件，所以需要点击来触发
				if(this.status == 'loadmore') this.$emit('loadmore');
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-load-more-wrap {
		padding: 40rpx 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.u-load-more-inner {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.u-more {
		width: 60%;
		position: relative;
		display: flex;
		justify-content: center;
	}
	
	.u-more::before {
		content: ' ';
		position: absolute;
		border-bottom: 1px solid #d4d4d4;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		width: 100%;
		top: 50%;
		left: 0;
	}
	
	.u-dot-text {
		font-size: 28rpx;
	}
	
	.u-loadmore-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
