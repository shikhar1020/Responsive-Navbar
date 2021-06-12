import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Information } from "./pages/Information";
import { Home } from "./pages/Home";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/friends" exact component={Friends} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/information" exact component={Information} />
      </Switch>
    </Router>
  );
}

export default App;
