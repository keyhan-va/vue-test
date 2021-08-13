import router from "@/router/routes";

class AuthRepository {

    static setupApiToken(api_token) {
        localStorage.setItem('credentials', JSON.stringify(api_token))
    }

    static removeApiToken() {
        localStorage.removeItem('credentials');
    }

    static getToken() {
        return localStorage.getItem('credentials')
    }

    static isLoggedIn() {
        return localStorage.getItem('credentials') !== null
    }

    static unAuthenticated() {
        localStorage.removeItem('credentials')
    }

    static coordinateAuthPath() {
        console.log("router",router.currentRoute);
        if ( router.currentRoute.name === 'auth.login') {
           router.push({
                path: '/admin/home'
            });
        }
    }
}

export default AuthRepository;
