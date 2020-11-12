<template>
	<view class="u-tr">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		inject: ['uTable', 'uTd'],
		provide() {
			return {
				uTr: this,
			};
		},
		created() {
			if(this.uTd && this.uTd.tr) {
				this.uTd.tr.push(this);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-tr {
		display: flex;
	}
</style>
