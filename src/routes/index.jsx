import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import ListAnimais from "../pages/ListAnimais";
import Sobre from '../pages/Sobre';
import Criador from "../pages/Criador";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
         <Home />
          
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route path="/user">
          <Dashboard />
        </Route>

        <Route path="/foto">
          <ListAnimais />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/criador">
          <Criador />
        </Route>

      </Switch>
    </>
  );
};
export default Routers;
