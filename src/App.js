import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./container/HomePage/HomePage";
import RegisterPage from "./container/RegisterPage/RegisterPage";

function App() {
    return (
        <div className="App">
            <Route path="/" exact component={ HomePage } />
            <Route path="/register" exact component={ RegisterPage } />
        </div>
    );
}

export default App;
