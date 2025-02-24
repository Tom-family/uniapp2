<template>
	<view>
		<view class="tabbar-page" v-if="isShow">
			<view class="tabbar-item" v-for="(item,index) in tabbarList" :key="index" @click="tapTabbar(item)"
				:class="{active:tabbarIndex==item.id}">
				<img :src="tabbarIndex==item.id?item.img:item.img_active" alt="">
				<view class="title">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabbarIndex: {
				default: 1
			}
		},
		data() {
			return {
				showTabbar: ['/pages/home/home', '/pages/other/other', '/pages/my/my'],
				isShow: false,
				tabbarList: [{
						id: 1,
						title: '首页',
						url: '/pages/home/home',
						img: require('@/static/image/tabbar/home.svg'),
						img_active: require('@/static/image/tabbar/home_active.svg')
					},
					{
						id: 2,
						title: '其他',
						url: '/pages/other/other',
						img: require('@/static/image/tabbar/home.svg'),
						img_active: require('@/static/image/tabbar/home_active.svg')
					},
					{
						id: 3,
						title: '我的',
						url: '/pages/my/my',
						img: require('@/static/image/tabbar/home.svg'),
						img_active: require('@/static/image/tabbar/home_active.svg')
					},
				]
			}
		},
		methods: {
			tapTabbar(data) {
				uni.switchTab({
					url: data.url
				})
			},
		},
		mounted() {},
		watch: {
			'$route': {
				handler: function(to, from) {
					this.isShow = this.showTabbar.includes(to.path)
				},
				immediate: true // 在初始化时立即调用 handler
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabbar-page {
		height: 120rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;

		.tabbar-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				width: 50rpx;
			}

			.title {
				margin-top: 6rpx;
				font-size: 28rpx;
				color: #000;
			}
		}

		.active {
			.title {
				color: #1afa29;
			}
		}
	}
</style>