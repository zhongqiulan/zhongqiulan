import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import HeadeStore from './modules/header'//引入刚才的heade.js
import contentStore from './modules/content'
export default new Vuex.Store({
    modules: {
        Header: HeadeStore,
        Content:contentStore
    }
})