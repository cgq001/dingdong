<script>
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
