const initialState = {
    isLogin: false,
    cred: null
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "Login":
            const s = {
                isLogin: action.isLogin,
                cred: action.cred
            };
            console.log(s);
            return s;
            // return {
            //     isLogin: true,
            //     cred: action.cred
            // };
        case "Logout":
            return {
                isLogin: false,
                cred: null
            };
        default:
            return state
    }
}

export default rootReducer;