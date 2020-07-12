import React from "react";
import "./App.css";
import "./i18n";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <Switch>
            <Route path="" component={Login} />
            <Route component={() => <h3>NOt found!</h3>} />
        </Switch>
    );
}

export default App;
