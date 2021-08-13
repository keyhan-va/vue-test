import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: require('./modules/auth').default,
        app: require('./modules/app').default,
        http: require('./modules/http').default,
        socket: require('./modules/socket').default,
        permission: require('./modules/permission').default,
    }
})
