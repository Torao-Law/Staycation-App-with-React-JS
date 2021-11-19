import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'assets/scss/style.scss';
import landingPage from "pages/landingPage";
import detailPage from "pages/detailPage";
import example from "pages/Example"
import Checkout from 'pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage}></Route>
        <Route exact path="/properties/:id" component={detailPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/example" component={example}></Route>
      </Router>
    </div>
  );
}

export default App;
