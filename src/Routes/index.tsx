import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import { useUser } from "../Providers/UserProvider";

const Routes = () => {
  const { token } = useUser();
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        {token ? <Dashboard /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export default Routes;
