import React from "react";


import Home from "./Home";
import SignUp from "./SignUp";

import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div onClick = {this.openDialog}>
        <BrowserRouter>
            <Switch>
              <Route
                exact path="/"
                component={Home}
              />
              <Route
                path="/signup"
                component={SignUp}
              />
            </Switch>
           
        </BrowserRouter>
    </div>
  );
};

export default App;
