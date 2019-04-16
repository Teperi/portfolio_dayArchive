import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Cashbook, Diary, NoPage } from '../pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/diary' component={Diary} />
        <Route path='/cashbook' component={Cashbook} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
};

export default App;
