import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';
// import DynamicPage from './DynamicPage';
// import NoMatch from './NoMatch';


const AsyncDynamicPage = importedComponent(
  () => {
    import(/* webpackChunkName: 'DynamicPage' */ './DynamicPage.js')
  },
  {
    LoadingComponent: Loading
  }
);

const AsyncNoMatch = importedComponent(
  () => {
    import(/* webpackChunkName: 'NoMatch' */ './NoMatch.js')
  },
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;