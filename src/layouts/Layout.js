import React from "react";
import { Route, Switch } from "react-router-dom";

function Layout(props) {
  const { routes } = props;

  return (
    <>
      <div>
        <LoadRoutes routes={routes} />
      </div>
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
export default Layout;
