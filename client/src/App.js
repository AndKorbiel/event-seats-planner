import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './views/About';
import HomePage from './views/HomePage';
import GuestsListPage from './views/GuestsListPage';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Event seats planner
            </Typography>
            <Tabs variant="fullWidth" centered>
              <Tab label="Home" href="/" />
              <Tab label="About" href="/about" />
              <Tab label="Guests list" href="/list" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/list" component={GuestsListPage}></Route>
          </Switch>
        </Container>

      </div>
    </Router>
  );
}

export default App;
