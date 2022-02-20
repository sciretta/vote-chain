import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Blockchain } from "./actions";
import { Closed } from "./views/Closed";
import { Register } from "./views/Register";
import { Vote } from "./views/Vote";

export default function App() {
  useEffect(() => {
    const blockchain = new Blockchain();
  }, []);

  return (
    <Router>
      <div>
        <header>
          <h1>vote-chain</h1>
          <nav>
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/vote">Vote</Link>
              </li>
              <li>
                <Link to="/closed">Closed</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/closed">
            <Closed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
