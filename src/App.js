import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage'

import "./scss/index.scss";
import NotFound from "./components/pages/NotFound"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
  }

export default App
