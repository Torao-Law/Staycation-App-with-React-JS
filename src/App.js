import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'assets/scss/style.scss';
import landingPage from "pages/landingPage";
import example from "pages/Example"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage}></Route>
        <Route exact path="/example" component={example}></Route>
      </Router>
    </div>
  );
}

export default App;
