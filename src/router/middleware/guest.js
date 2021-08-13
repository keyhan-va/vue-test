import AuthRepository from '@/repositories/AuthRepository'
export default function auth({next, store}) {
    if (!AuthRepository.isLoggedIn()) {
        return next()
    }

    return next()
}