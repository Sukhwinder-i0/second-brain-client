import { Route, Router } from "@solidjs/router";
import Dashboard from "./pages/Dashboard.jsx";
import { Signup } from "./pages/auth/Signup.jsx";
import { Signin } from "./pages/auth/Signin.jsx";

const App = () => {
  return (
    <div>
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
    </Router>
    </div>
  );
};

export default App;
