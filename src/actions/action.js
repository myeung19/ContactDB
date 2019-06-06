export function login(isLogin, cred) {
    return {
        type: "Login",
        isLogin,
        cred
    };
}

export function logout() {
    return {
        type: "Logout",
    };
}