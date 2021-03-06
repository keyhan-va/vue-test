import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: require('./modules/auth').default,
        static: require('./modules/static').default,
        app: require('./modules/app').default,
        http: require('./modules/http').default,
        permission: require('./modules/permission').default,
    }
})
