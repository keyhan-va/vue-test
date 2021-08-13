// import { kebabCase } from "lodash";

export default {
    namespaced: true,
    state: {
        account: {is_superAdmin: true},
        check: true,

        auth_url: "",
        service_id: "",
		identification_code: "",

    },
    getters: {
        loggedIn(state) {
            return state.check;
        },

        getauthUrl(state) {
            return state.auth_url
        },

        getserviceId(state) {
            return state.service_id
        },
		getIdentificationCode(state) {
            return state.identification_code
        },


    },
    mutations: {
        login(state, account) {
            state.account = account;
            // localStorage.setItem('token', account)
            state.check = true;
        },
        logout(state) {
            state.account = null;
            localStorage.removeItem('token');
            state.check = false;
        },


        setAuthUrl(state ,auth_url) {
            state.auth_url = auth_url;
        },

        setServiceId(state, service_id){
            state.service_id = service_id;
        },
		setIdentificationCode(state, identification_code){
			state.identification_code = identification_code;
		}

    },
    actions: {
        getAccount({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('api/users/1').then(response => {
                    console.log("response",response);
                    resolve();
                //     console.log("response",response.data.data.user);
                //     // commit('auth/setAccount', response.data.data.account, {root: true});
                //     // commit('static/setDefaultLang', response.data.data.language_key, {root: true});
                //     // commit('permission/setPermissions', response.data.data.permissions, {root: true});
                //     // commit('notification/updateNotifications', response.data.data.notifications, {root: true})
                //     resolve();
                }).catch(e => {
                    reject(e);
                })
            });
        }
    }

}
