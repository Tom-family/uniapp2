
<template>
	<view>
		{{message}}
	</view>
</template>
<script>
	export default {
		data(){
			return{
				message:'你好'
			}
		},
		onLaunch: function() {
			uni.hideTabBar()
		},
		onShow: function() {
			uni.hideTabBar()
		},
		onHide: function() {},
	}
</script>

<style lang="scss">
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body,
	uni-page-body {
		background-color: #f9f9f9;
	}
</style>