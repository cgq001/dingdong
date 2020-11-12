<script>
	import 'static/css/icon/iconfont.css'
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/* @import  "static/css/icon/iconfont.css"; */
	/*每个页面公共css */
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	 }
	 page{
		 width: 100%;
		 height: 100%;
		 background: #F5F5F5;
	 }
</style>
