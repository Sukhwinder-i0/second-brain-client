import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// Layout Component
export const App = () => (<></>);

// Mount the Router
render(
  () => (
    <Router>
          <Route path="/" component={Dashboard} />
          <Route path="/authentication" component={Auth} />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
