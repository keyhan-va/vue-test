export default {
    namespaced: true,
    state: {
        services: {},
        requests: {},
        routes: [
            {
                name: 'auth.login',
                url: 'auth/login'
            },
            {
                name: 'auth.reset',
                url: 'auth/reset'
            },
            {
                name: 'auth.otp',
                url: 'auth/otp'
            }
        ]
    },
    actions: {

    },

}