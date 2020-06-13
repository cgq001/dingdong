<template>
	<view class="u-collapse-item">
		<view
			class="u-collapse-head"
			@tap.stop="headClick"
			hover-class="u-hover-class"
			:style="[headStyle]"
		>
			<view class="u-collapse-title u-line-1" 
				:style="[{ textAlign: align ? align : 'left' }, 
				isShow && activeStyle && !arrow ? activeStyle : '']"
			>
				{{ title }}
			</view>
			<view class="u-icon-wrap">
				<u-icon
					v-if="arrow"
					:color="arrowColor ? arrowColor : $u.color.tipsColor"
					:class="{ 'u-arrow-down-icon-active': isShow }"
					class="u-arrow-down-icon"
					name="arrow-down"
				></u-icon>
			</view>
		</view>
		<view
			class="u-collapse-body"
			:style="[{
				height: isShow ? height + 'px' : '0'
			}, bodyStyle]"
		>
			<view class="u-collapse-content" :id="elId"><slot></slot></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 标题
		title: {
			type: String,
			default: ''
		},
		// 标题的对齐方式
		align: {
			type: String,
			default: 'left'
		},
		// 是否可以点击收起
		disabled: {
			type: Boolean,
			default: false
		},
		// collapse显示与否
		open: {
			type: Boolean,
			default: false
		},
		// 唯一标识符
		name: {
			type: [Number, String],
			default: ''
		},
		//活动样式
		activeStyle: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	inject: ['uCollapse'],
	data() {
		return {
			isShow: false,
			elId: this.$u.guid(),
			height: 0, // body内容的高度
			headStyle: {}, // 头部样式，对象形式
			bodyStyle: {}, // 主体部分样式
			arrowColor: ''
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.queryRect();
		});
	},
	watch: {
		open(val) {
			this.isShow = val;
		}
	},
	computed: {
		arrow() {
			return this.uCollapse.arrow;
		}
	},
	created() {
		this.isShow = this.open;
		this.nameSync = this.name ? this.name : this.uCollapse.childrens.length;
		this.uCollapse.childrens.push(this);
		this.headStyle = this.uCollapse.headStyle;
		this.bodyStyle = this.uCollapse.bodyStyle;
		this.arrowColor = this.uCollapse.arrowColor;
	},
	methods: {
		// 点击collapsehead头部
		headClick() {
			if (this.disabled) return;
			if (this.uCollapse.accordion == true) {
				this.uCollapse.childrens.map(val => {
					// 自身不设置为false，因为后面有this.isShow = !this.isShow;处理了
					if (this != val) {
						val.isShow = false;
					}
				});
			}
			this.isShow = !this.isShow;
			// 只有在打开时才发出事件
			if (this.isShow) this.uCollapse.onChange();
			this.$forceUpdate();
		},
		// 查询内容高度
		queryRect() {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('#' + this.elId)
				.boundingClientRect(data => {
					if (!data.height) {
						setTimeout(() => {
							this.queryRect();
						}, 10);
						return;
					}
					this.height = data.height;
				})
				.exec();
		}
	}
};
</script>

<style lang="scss" scoped>
.u-collapse-head {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $u-main-color;
}

.u-collapse-title {
	flex: 1;
	overflow: hidden;
	margin-right: 14rpx;
	font-size: 30rpx;
	color: $u-main-color;
	line-height: 1;
	padding: 24rpx 0;
	text-align: left;
}

.u-arrow-down-icon {
	transition: all 0.3s;
	margin-right: 24rpx;
}

.u-arrow-down-icon-active {
	transform: rotate(180deg);
	transform-origin: center center;
}

.u-collapse-body {
	overflow: hidden;
	transition: all 0.3s;
}

.u-collapse-content {
	overflow: hidden;
	font-size: 28rpx;
	color: $u-tips-color;
	text-align: left;
}
</style>
