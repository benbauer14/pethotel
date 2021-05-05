import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Pet from '../Pet/Pet';
import Owner from '../Owner/Owner';
import Nav from '../Nav/Nav';

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Switch>
          <Route
            exact
            path="/pet"
          >
            <Pet />
          </Route>

          <Route
            exact
            path="/owner"
          >
            <Owner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;