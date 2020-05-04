import React from "react";
import "./App.scss";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={["/new", "/edit"]} component={UserForm} />
          <Route component={UserList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
