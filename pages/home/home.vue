<template>
	<view>
		<text>{{ count }}</text>
		<button @click="increment">Increment</button>
		<button @click="incrementAsync">Increment Async</button>
		<tabbar :tabbarIndex="1"></tabbar>
	</view>
</template>

<script>
	export default {
		computed: {
			// 通过 Vuex 的 getter 获取数据
			count() {
				return this.$store.state.user.count
			}
		},
		onLoad() {
			console.log(11)
		},
		methods: {
			// 提交 mutation 修改 Vuex 状态
			increment() {
				this.$store.commit('user/increment')
			},
			incrementAsync() {
				setTimeout(() => {
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						duration: 2000
					});
				}, 1000)
				// this.$store.dispatch('user/incrementAsync')
			}
		}
	}
</script>

<style scoped>
	/* 页面样式 */
</style>