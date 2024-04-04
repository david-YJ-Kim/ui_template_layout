import { BrowserRouter, Switch, Route } from "react-router-dom";
import SampleLayout from "./layout/SampleLayout";
import MainHomePage from "./layout/MainHomePage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mainHomePage">
          <MainHomePage />
        </Route>
        <Route path="/">
          <SampleLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
