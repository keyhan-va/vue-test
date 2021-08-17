export default {
    namespaced: true,
    state: {
        isLoaded: true,
    },
    actions: {
        boot({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:3000/statics').then(response => {
                    console.log(response.data[0].languages);
                    commit('static/setMenuItems', response.data[0].items, {root: true});
                    commit('static/setLanguages', response.data[0].languages, {root: true});
                    resolve();
                }).catch(e => {
                    reject(e);
                })

            });
        }
    }
}
