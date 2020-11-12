<template>
	<view class="water-fill">
		<template v-if="waterList.length != 0">
			<view class="water-wrapper">
				<view class="water-box">
					<view class="water-sub" v-for="(items,index) in waterList" :key="index">
						<view class="water-item" v-for="(item,idx) in items" :key="idx">
							<view class="water-top">
								<image class="top-cover" :src="item.cover"  mode="widthFix"></image>
								<h3 class="top-title">{{item.title}}</h3>
								
							</view>
							<view class="water-item-title">
								{{item.title}}
							</view>
							<view class="water-bottom">
								<view class="water-bottom-item">
									<view class="water-bottom-item-left">
										<text>¥</text>
										<text>129.9</text>
									</view>
									<view class="water-bottom-item-right">
										<text>¥</text>
										<text>129.9</text>
									</view>
								</view>
								<view class="water-bottom-items">
									<view>
										<text class="cuIcon-add"></text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		<view class="water-none" v-if="waterList.length == 0">
			<image class="no-data" src="/static/icon_nodatas.png" mode="widthFix"></image>
			<text class="no-word">暂无数据</text>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue';
	export default {
		
		name: 'waterFill',
		data() {
			return {
				waterList: []
			}
		},
		methods: {
			// 将数组拆分成可使用状态,减少代码
			groupCut(array, subGroupLength) {
				let index = 0;
				let newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
			handleLoad(arr) {
				// 如果arr存在,即在父组件刷新的值  若不存在就是下拉请求刷新
				if (arr) {
					let length = arr.length;
					this.waterList = this.groupCut(arr, length / 2)
				} else {
					console.log('写请求数据接口，将数据赋值给waterList')
				}
			},
		},
	}
</script>

<style lang="less" scoped>
	.water-fill {
		.water-wrapper {
			.water-box {
				display: flex;
				width: 100%;
				box-sizing: border-box;
				font-size: 0;
				justify-content: space-between;
				background-color: #f5f8f9;
				padding: 15px 10px;

				.water-sub {
					display: flex;
					width: 49%;
					overflow: hidden;
					flex-direction: column;

					.water-item {
						width: 100%;
						border-radius: 12upx;
						overflow: hidden;
						background-color: #FFFFFF;
						margin-bottom: 20upx;
						.water-item-title{
							width: 100%;
							font-size: 22upx;
							line-height: 30upx;
							color: #333333;
							text-align: justify;
							// margin: 20upx;
							padding: 0 20rpx 10rpx;
							box-sizing: border-box;
							// .n-ellipsis(1);
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							color: #A4A3A7;
							margin-bottom: 10rpx;
						}
						.water-top {
							.top-cover {
								width: 100%;
							}

							.top-title {
								font-size: 28upx;
								font-weight: 600;
								line-height: 40upx;
								color: #333333;
								text-align: justify;
								margin: 10upx;
								.n-ellipsis(2);
							}
						}

						.water-bottom {
							display: flex;
							justify-content: space-between;
							margin: 0 20upx 20upx 20upx;
							font-size: 24upx;

							.water-bottom-item {
								flex: 1;
								height: 45rpx;
								line-height: 45rpx;
								display: flex;
								justify-content: flex-start;
								.water-bottom-item-left{
									font-size: 30rpx;
									color: #FF0C22;
									font-weight: 600;
									margin-right: 10rpx;
									text:nth-child(1){
										font-size: 20rpx;
										margin-right: 5rpx;
									}
								}
								.water-bottom-item-right{
									font-size: 24rpx;
									color: #A4A3A7;
									text-decoration: line-through;
								}
							}
							.water-bottom-items{
								width: 45rpx;
								height: 45rpx;
								background: #60DA62;
								border-radius: 5rpx;
								font-size: 40rpx;
								color: #FFFFFF;
								text-align: center;
								line-height: 45rpx;
							}
						}
					}
				}
			}
		}

		.water-none {
			position: fixed;
			top: 0;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.no-data {
				width: 200upx;
				height: 200upx;
			}

			.no-word {
				padding-top: 40upx;
				font-size: 24upx;
				color: #999;
			}
		}
	}


	//多行文本省略
	.n-ellipsis(@n) {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: @n;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		word-break: break-all;
	}
</style>
