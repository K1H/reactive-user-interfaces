import React, { Component } from 'react';
import{ BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import homepage from "./homepage"
import characterpage from "./characterpage"

class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Route exact path = "/" component={homepage}/>
          <Route path = "/people/:id" component={characterpage}/>
        </div>
      </Router>
    );
  }
}

export default App;
