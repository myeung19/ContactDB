import React from 'react';
import { Switch, Route } from "react-router-dom";
import GlobalContext from "./container/context/GlobalContext";
import HomePage from "./container/HomePage/HomePage";
import RegisterPage from "./container/RegisterPage/RegisterPage";
import SignInPage from "./container/SignPage/SignInPage";
import UserHomePage from "./container/HomePage/UserHomePage/UserHomePage";
import NotFoundPage from "./container/NotFoundPage/NotFoundPage";

const initialState = {
    isLogin: false,
    cred: {
        username: "",
        password: ""
    }
};

function App() {
    return (
        <GlobalContext.Provider value={ initialState }>
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/register" component={ RegisterPage } />
                <Route path="/signin" component={ SignInPage } />
                <Route path="/u/:username" component={ UserHomePage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </GlobalContext.Provider>
    );
}

export default App;
