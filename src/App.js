import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <ContactMe />
        </Route>
        <Route path='/resume'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
