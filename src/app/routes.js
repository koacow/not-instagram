export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGN_UP: '/sign-up',
    PROFILE: '/:username',
    TO_PROFILE: (username) => `/${username}`
}