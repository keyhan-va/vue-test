export default {
    namespaced: true,
    state: {
        isLoaded: true,
        isLocked: localStorage.getItem('lock') !== null
    },
    actions: {
        boot() {
            return new Promise((resolve, reject) => {
                axios.get('api/users/1').then(response => {
                    resolve(response);
                }).catch(e => {
                    reject(e);
                })
            });
        }
    }
}
