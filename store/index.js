import vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persistedstate";
import getters from "./getters.js";
vue.use(Vuex);
import user from "./modules/user.js";

const persistedStatePaths = ["user.count"];

export default new Vuex.Store({
  modules: {
    user,
  },
  getters,
  plugins: [
    VuexPersistence({
      paths: persistedStatePaths,
    }),
  ],
});
