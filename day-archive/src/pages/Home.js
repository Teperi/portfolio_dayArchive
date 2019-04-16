import React from 'react';
import Home_illust from './Home_illust.svg';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

const Home = () => {
  return (
    <div>
      <img src={Home_illust} className='Main-img' alt='Main Illustration' />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </div>
  );
};

export default withRoot(withStyles(styles)(Home));
