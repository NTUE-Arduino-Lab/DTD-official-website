// import React, { useReducer } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../layouts/Home';
import NewsPage from '../layouts/News';

// import { StateContext, DispatchContext } from '../context/index';
// import { initialAppState, appReducer } from '../reducer/index';

const Routes = () => {
  // const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    // <DispatchContext.Provider value={dispatch}>
    //   <StateContext.Provider value={state}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/news" component={NewsPage} />
      </Switch>
    </Router>
    //   </StateContext.Provider>
    // </DispatchContext.Provider>
  );
};

export default Routes;
