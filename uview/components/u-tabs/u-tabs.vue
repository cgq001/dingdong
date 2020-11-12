<template>
	<view class="u-tabs" :id="id" :style="{
		background: bgColor
	}">
		<scroll-view scroll-x class="u-scroll-view" :scroll-left="scrollLeft" scroll-with-animation>
			<view class="u-scroll-box" :class="{'u-tabs-scorll-flex': !isScroll}">
				<view
					class="u-tab-item"
					:id="'u-tab-item-' + index"
					v-for="(item, index) in list"
					:key="index"
					@tap="clickTab(index)"
					:style="[tabItemStyle(index)]"
				>
					{{ item[name] || item['name']}}
				</view>
				<view class="u-tab-bar" :style="[tabBarStyle]"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		// 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
		isScroll: {
			type: Boolean,
			default: true
		},
		//需循环的标签列表
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 当前活动tab的索引
		current: {
			type: Number,
			default: 0
		},
		// 导航栏的高度和行高
		height: {
			type: [String, Number],
			default: 80
		},
		// 字体大小
		fontSize: {
			type: [String, Number],
			default: 30
		},
		// 过渡动画时长, 单位ms
		duration: {
			type: [String, Number],
			default: 0.5
		},
		// 选中项的主题颜色
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		// 未选中项的颜色
		inactiveColor: {
			type: String,
			default: '#303133'
		},
		// 菜单底部移动的bar的宽度，单位rpx
		barWidth: {
			type: [String, Number],
			default: 40
		},
		// 移动bar的高度
		barHeight: {
			type: [String, Number],
			default: 6
		},
		// 单个tab的左或有内边距（左右相同）
		gutter: {
			type: [String, Number],
			default: 30
		},
		// 导航栏的背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// 读取传入的数组对象的属性
		name: {
			type: String,
			default: 'name'
		},
		// 活动tab字体是否加粗
		bold: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			scrollLeft: 0, // 滚动scroll-view的左边滚动距离
			tabQueryInfo: [], // 存放对tab菜单查询后的节点信息
			componentWidth: 0, // 屏幕宽度，单位为px
			scrollBarLeft: 0 ,// 移动bar需要通过translateX()移动的距离
			parentLeft: 0, // 父元素(tabs组件)到屏幕左边的距离
			id: this.$u.guid(), // id值
			currentIndex: this.current,
		};
	},
	watch: {
		// 监听tab的变化，重新计算tab菜单的布局信息，因为实际使用中菜单可能是通过
		// 后台获取的（如新闻app顶部的菜单），获取返回需要一定时间，所以list变化时，重新获取布局信息
		list(n, o) {
			// 用$nextTick等待视图更新完毕后再计算tab的局部信息，否则可能因为tab还没生成就获取，就会有问题
			this.$nextTick(() => {
				// 微信小程序有BUG，初始化的时候也会触发此watch，H5，APP无此问题
				// 这个初始触发，会造成monuted生命周期中的getTabRect一起，连续触发两次，造成bug
				// 初始时o值为空数组，以此判断
				// #ifdef MP-WEIXIN
				o.length && this.getTabRect();
				// #endif
				// #ifndef MP-WEIXIN
				this.getTabRect();
				// #endif
			});
		},
		current: {
			immediate: true,
			handler(nVal) {
				// 视图更新后再执行移动操作
				this.$nextTick(() => {
					this.currentIndex = nVal;
					this.scrollByIndex();
				});
			}
		},
	},
	computed: {
		// 移动bar的样式
		tabBarStyle() {
			return {
				width: this.barWidth + 'rpx',
				transform: `translate(${this.scrollBarLeft}px, -100%)`,
				'transition-duration': `${this.duration}s`,
				'background-color': this.activeColor,
				height: this.barHeight + 'rpx',
				// 设置一个很大的值，它会自动取能用的最大值，不用高度的一半，是因为高度可能是单数，会有小数出现
				'border-radius': `${this.barHeight / 2}px`
			};
		},
		// tab的样式
		tabItemStyle() {
			return (index) => {
				let style = {
					height: this.height + 'rpx',
					'line-height': this.height + 'rpx',
					'font-size': this.fontSize + 'rpx',
					'transition-duration': `${this.duration}s`,
					padding: this.isScroll ? `0 ${this.gutter}rpx` : '',
				};
				// 字体加粗
				if (index == this.currentIndex && this.bold) style.fontWeight = 'bold';
				if(index == this.currentIndex) {
					style.color = this.activeColor;
				} else {
					style.color = this.inactiveColor;
				}
				return style;
			}
		}
	},
	methods: {
		// 点击某一个tab菜单
		clickTab(index) {
			// 发送事件给父组件
			this.$emit('change', index);
		},
		// 查询tab的布局信息
		getTabRect() {
			// 创建节点查询
			let query = uni.createSelectorQuery().in(this);
			// 历遍所有tab，这里是执行了查询，最终使用exec()会一次性返回查询的数组结果
			for (let i = 0; i < this.list.length; i++) {
				// 只要size和rect两个参数
				query.select(`#u-tab-item-${i}`).fields({
					size: true,
					rect: true
				});
			}
			// 执行查询，一次性获取多个结果
			query.exec(
				function(res) {
					this.tabQueryInfo = res;
					// 初始化滚动条和移动bar的位置
					this.scrollByIndex();
				}.bind(this)
			);
		},
		// 滚动scroll-view，让活动的tab处于屏幕的中间位置
		scrollByIndex() {
			// 当前活动tab的布局信息，有tab菜单的width和left(为元素左边界到父元素左边界的距离)等信息
			let tabInfo = this.tabQueryInfo[this.currentIndex];
			if (!tabInfo) return;
			// 活动tab的宽度
			let tabWidth = tabInfo.width;
			// 活动item的左边到tabs组件左边的距离，用item的left减去tabs的left
			let offsetLeft = tabInfo.left - this.parentLeft;
			// 将活动的tabs-item移动到屏幕正中间，实际上是对scroll-view的移动
			let scrollLeft = offsetLeft - (this.componentWidth - tabWidth) / 2;
			this.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
			// 当前活动item的中点点到左边的距离减去滑块宽度的一半，即可得到滑块所需的移动距离
			let left = tabInfo.left + tabInfo.width / 2 - this.parentLeft;
			// 计算当前活跃item到组件左边的距离
			this.scrollBarLeft = left - uni.upx2px(this.barWidth) / 2;
		}
	},
	async mounted() {
		// 获取tabs组件的尺寸信息
		let tabRect = await this.$uGetRect('#' + this.id);
		// tabs组件距离屏幕左边的宽度
		this.parentLeft = tabRect.left;
		// tabs组件的宽度
		this.componentWidth = tabRect.width;
		this.getTabRect();
	}
};
</script>

<style lang="scss">
view,
scroll-view {
	box-sizing: border-box;
}

::-webkit-scrollbar,
::-webkit-scrollbar,
::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
}

.u-scroll-box {
	position: relative;
}

/* #ifdef H5 */
// 通过样式穿透，隐藏H5下，scroll-view下的滚动条
scroll-view /deep/ ::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
}
/* #endif */

.u-scroll-view {
	width: 100%;
	white-space: nowrap;
	position: relative;
}

.u-tab-item {
	position: relative;
	display: inline-block;
	text-align: center;
	transition-property: background-color, color;
}

.u-tab-bar {
	position: absolute;
	bottom: 0;
}

.u-tabs-scorll-flex {
	display: flex;
	justify-content: space-between;
}
</style>
