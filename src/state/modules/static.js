export default {
    namespaced: true,
    state: {
        menuItems:[],
        languages:[],
    },
    getters: {},
    
    mutations: {
        setMenuItems(state,payload){
            state.menuItems = payload
        },
        setLanguages(state,payload){
            state.languages = payload
        }

    },

}
