import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { JOB_DIRECTORY } from "../utils/consts";

export const AppRouter = observer(() => {
   const { user } = useContext(Context);

   console.log(user.isAuth);

   return (
      <Switch>
         {user.isAuth &&
            authRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} component={Component} exact />
            ))}
         {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
         ))}
         <Redirect to={JOB_DIRECTORY} />
      </Switch>
   );
});
