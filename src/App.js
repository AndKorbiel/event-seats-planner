import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './views/About';
import HomePage from './views/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
