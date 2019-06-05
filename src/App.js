import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import HomePage from "./container/HomePage/HomePage";
import RegisterPage from "./container/RegisterPage/RegisterPage";
import SignInPage from "./container/SignPage/SignInPage";
import UserHomePage from "./container/HomePage/UserHomePage/UserHomePage";
import NotFoundPage from "./container/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Provider store={store}>
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/register" component={ RegisterPage } />
                <Route path="/signin" component={ SignInPage } />
                <Route path="/u/:username" component={ UserHomePage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </Provider>
    );
}

export default App;
