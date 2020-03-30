import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: String
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        async setToken({ commit }, token) {
            commit('setToken', token);
        }
    },
    modules: {}
});
//# sourceMappingURL=index.js.map