import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./container/HomePage/HomePage";
import RegisterPage from "./container/RegisterPage/RegisterPage";
import SignInPage from "./container/SignPage/SignInPage";

function App() {
    return (
        <div className="App">
            <Route path="/" exact component={ HomePage } />
            <Route path="/register" exact component={ RegisterPage } />
            <Route path="/signin" exact component={ SignInPage } />
        </div>
    );
}

export default App;
