import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Test1 from './Test1';
import Test2 from './Test2';
import Main from './Main';
import { ContextApi } from './ContextApi.jsx';

function App() {
  return (
    <div>
      <ContextApi>
        <Router>
          <Main />
          <Switch>
            <Route path="/test1" exact component={Test1}></Route>
            <Route path="/test2" exact component={Test2}></Route>
          </Switch>
        </Router>
      </ContextApi>
    </div>
  );
}

export default App;
