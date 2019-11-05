import React from "react";
// 引入Route
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Header, Login, NotFound } from "./component/pages/page";

// import Header from './component/pages/Header';
let routers = [
  { id: 0, path: "/", Com: Header, exact: true },
  { id: 1, path: "/login", Com: Login, exact: true },
  { id: 2, path: "/notfound", Com: NotFound, exact: true }
];

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
