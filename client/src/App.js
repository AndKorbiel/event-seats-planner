import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './views/About';
import HomePage from './views/HomePage';
import GuestsListPage from './views/GuestsListPage';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { themeColors } from './styles/variables'
import './styles/App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.dark
    }
  }
})

function App() {
  return (
    <Router>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar position="sticky" background-color="dark">
            <Toolbar>
              <Typography variant="h6" noWrap>
                Event seats planner
            </Typography>
              <Tabs variant="fullWidth" centered value={false}>
                <Tab label="Home" component={Link} to="/" value={false} />
                <Tab label="About" component={Link} to="/about" value={false} />
                <Tab label="Guests list" component={Link} to="/list" value={false} />
              </Tabs>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/list" component={GuestsListPage}></Route>
          </Switch>
        </MuiThemeProvider>
      </div>
    </Router >
  );
}

export default App;
