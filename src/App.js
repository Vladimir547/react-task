import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from './pages/Counter';
import { User } from './pages/User';
import Preview  from './components/preview/Preview.jsx';

function App() {
  return (
    <Router>
      <div className="App">
      <aside className='menu-aside'>
        <div className="menu">
          <Link to="/">home</Link>
          <Link to="/counter">counter</Link>
        </div>
      </aside>
        <Switch>
          <Route exact path="/">
          <User /> 
          </Route>
          <Route path="/counter">
            <Counter /> 
          </Route>
          <Route path="/preview/:id">
            <Preview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
