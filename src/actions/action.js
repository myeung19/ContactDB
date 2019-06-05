export function login(isLogin, cred) {
    return {
        type: "Login",
        isLogin,
        cred
    };
}

export function logout(isLogin) {
    return {
        type: "Logout",
        isLogin
    };
}