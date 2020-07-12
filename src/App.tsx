import React from "react";
import "./App.css";
import "./i18n";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/404";

function App() {
    document.body.className ="app"
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default App;
