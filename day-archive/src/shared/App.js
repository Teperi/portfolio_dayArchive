import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Cashbook, Diary, NoPage } from '../pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/diary' component={Diary} />
        <Route path='/cashbook' component={Cashbook} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
};

export default App;
