<template>
	<view class="map">
		<view class="map-head">
			{{msg}}
		</view>
		<view class="map-main">
			<view class="map-main-map">
				<map 
					style="width: 100%; height: 500rpx;" 
					:latitude="latitude" 
					:longitude="longitude" 
					:show-compass='true'
					:markers="covers"
					@markertap='clickMarkertap'>
				</map>
			</view>
			<view class="map-main-maplist">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
				    latitude: 39.909,
				    longitude: 116.39742,
				    // iconPath: '../../../static/location.png'
				}, {
				    latitude: 39.90,
				    longitude: 116.39,
				    // iconPath: '../../../static/location.png'
				}],
				msg: ''
			}
		},
		onLoad() {
			  // #ifdef MP-WEIXIN
			    uni.openSetting()
			    // #endif
			    
			    // App跳转系统的设置界面
			    // #ifdef APP-PLUS
			    uni.getSystemInfo({
			        success(res) {
			            if(res.platform=='ios'){ //IOS
			                plus.runtime.openURL("app-settings://");
			            } else if (res.platform=='android'){ //安卓
			                let main = plus.android.runtimeMainActivity();
			                let Intent = plus.android.importClass("android.content.Intent");
			                let mIntent = new Intent('android.settings.ACTION_SETTINGS');
			                main.startActivity(mIntent);
			            }
			        }
			    });
			    // #endif
		},
		methods: {
			clickMarkertap(e){
				this.msg = '点击了'
				console.log(e.detail)
			}
		}
	}
</script>

<style scoped>
.map{
	width: 100%;
	height: 100%;
/* 	background: #0081FF; */
}
.map-head{
	width: 100%;
	height: 80rpx;
	background: #FFFFFF;
}
.map-main{
	width: 100%;
	height: calc(100% - 80rpx);
	overflow: hidden;
}
.map-main-map{
	width: 100%;
	height: 500rpx;
}
.map-main-maplist{
	width: 100%;
	height: calc(100% - 500rpx);
	box-sizing: border-box;
	overflow: hidden;
}
</style>
