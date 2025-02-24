<template>
  <view>
    <text>{{ count }}</text>
    <button @click="add">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
    <tabbar :tabbarIndex="1"></tabbar>
  </view>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["count"]),
  },
  onLoad() {},
  methods: {
    ...mapMutations("user", ["increment"]),
    // 提交 mutation 修改 Vuex 状态
    add() {
      this.increment();
    },
    incrementAsync() {
      setTimeout(() => {
        uni.showToast({
          title: "请求成功",
          icon: "success",
          duration: 2000,
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* 页面样式 */
</style>
