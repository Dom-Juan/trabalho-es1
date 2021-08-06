import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import dos componentes.
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Form from "./pages/form/form";

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToken: "",
      authed: "",
    };
  }

  //<PrivateRoute exact path="/adm" component={Adm} />
  //<Route exact path="/login/reset" component={Reset} />

  //<Route exact path="/dash" component={Dashboard} />
  //<Route exact path="/" component={Dashboard} />
  //<Route exact path="/admin" component={AdminPanel} />
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/form" component={Form} />
            <Route path="*" component={() => <h1>Page not Found</h1>} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}