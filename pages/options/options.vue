<template>
	<view class="options">
		<view class="cu-form-group margin-top">
			<textarea maxlength="256" @input="textareaAInput" placeholder="请输入反馈意见"></textarea>
		</view>
		<view class="padding">
			<button class="cu-btn block bg-blue margin-tb-sm lg">提交意见</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			textareaAInput:function(){
				
			}
		}
	}
</script>

<style>
.options{
	width: 100%;
	height: 100%;
/* 	background: #FFFFFF; */
}
</style>
