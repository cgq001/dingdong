<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
			    success: function (res) {
			        
					if(res.platform === 'ios' || res.platform === 'android'){
						
						
					}else{
						uni.showModal({
						    title: '温馨提示',
						    content: '请在手机上查看',
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
			    }
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import 'vant/lib/index.css';
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
