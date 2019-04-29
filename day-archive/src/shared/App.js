import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Cashbook, Diary, NoPage, Signup, Signin, exTextfield } from '../pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/diary' component={Diary} />
        <Route path='/cashbook' component={Cashbook} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/test' component={exTextfield} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
};

export default App;
