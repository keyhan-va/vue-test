// import { kebabCase } from "lodash";

export default {
    namespaced: true,
    state: {
        account: '',
        check: true,
    },
    getters: {
        loggedIn(state) {
            return state.check;
        }
    },
    mutations: {
        logout(state) {
            state.account = null;
            localStorage.removeItem('token');
            state.check = false;
        },
        setAccount(state,account){
            state.account = account
        }

    },
    actions: {
        getAccount({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('api/users/9').then(response => {
                    commit('auth/setAccount', response.data.data, {root: true});
                    resolve();
                }).catch(e => {
                    reject(e);
                })
            });
        }
    }

}
