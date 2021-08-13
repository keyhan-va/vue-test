export default {
    namespaced: true,
    state: {
        permissions: [ 
            'support','dailyreport','taskprofile'
        ],
        isSet: true
    },
    getters: {
        getPermissions(state) {
            return state.permissions;
        }
    },
    mutations: {
        setPermissions(state, value) {
            return new Promise(async (resolve, reject) => {
                state.permissions = await value.map((permission) => {
                    return permission.name
                })
                resolve(state.permissions);
            }).then(() => {
                state.isSet = true;
            });

        }
    }
}