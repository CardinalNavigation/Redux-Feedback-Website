import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../FeelingComponent/Feeling'
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='App'>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
      </div>
    </Router>
  );
}

export default App;
