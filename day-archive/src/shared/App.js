import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Cashbook, Diary, NoPage, MediaControlCard, ComplexGrid } from '../pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/diary' component={Diary} />
        <Route path='/cashbook' component={Cashbook} />
        <Route path='/media' component={MediaControlCard} />
        <Route path='/ComplexGrid' component={ComplexGrid} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
};

export default App;
