import React from "react";
// 引入Route
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Header, Login, NotFound } from "./component/pages/page";

// import Header from './component/pages/Header';
let routers = [
  { id: 0, path: "/", component: Header, exact: true },
  { id: 1, path: "/login", component: Login, exact: true },
  { id: 2, path: "/notfound", component: NotFound, exact: true }
];

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
