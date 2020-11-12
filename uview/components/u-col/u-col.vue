<template>
	<view class="u-col" :class="[
		'u-col-' + span
	]" :style="{
		padding: `0 ${Number(gutter)/2 + 'rpx'}`,
		marginLeft: 100 / 12 * offset + '%',
		flex: `0 0 ${100 / 12 * span}%`
	}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			// 占父容器宽度的多少等分，总分为12份
			span: {
				type: [Number, String],
				default: 12
			},
			// 指定栅格左侧的间隔数(总12栏)
			offset: {
				type: [Number, String],
				default: 0
			},
		},
		inject: ['gutter'],
	}
</script>

<style lang="scss">
	.u-col {
		/* #ifdef MP-WEIXIN */
		float: left;
		/* #endif */
	}
	
	.u-col-0 {
		width: 0;
	}
	
	.u-col-1 {
		width: calc(100%/12);
	}
	
	.u-col-2 {
		width: calc(100%/12 * 2);
	}
	
	.u-col-3 {
		width: calc(100%/12 * 3);
	}
	
	.u-col-4 {
		width: calc(100%/12 * 4);
	}
	
	.u-col-5 {
		width: calc(100%/12 * 5);
	}
	
	.u-col-6 {
		width: calc(100%/12 * 6);
	}
	
	.u-col-7 {
		width: calc(100%/12 * 7);
	}
	
	.u-col-8 {
		width: calc(100%/12 * 8);
	}
	
	.u-col-9 {
		width: calc(100%/12 * 9);
	}
	
	.u-col-10 {
		width: calc(100%/12 * 10);
	}
	
	.u-col-11 {
		width: calc(100%/12 * 11);
	}
	
	.u-col-12 {
		width: calc(100%/12 * 12);
	}
</style>
