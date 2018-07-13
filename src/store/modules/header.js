//header.js
export default {
  // 相当于data
  state: {
    count: 10,
    show: false
  },
  // 相当于计算属性
  getters: {
    not_show(state) {
      return !state.show;
    }
  },
  // 相当于同步方法
  mutations: {
    Count(state, n) {
      state.count += n
    }
  },
  // 相当于异步方法
  actions: {
    Acount(context) {
      context.commit('Count', 20)
    }
  }
}
