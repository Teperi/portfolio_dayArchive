import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Paper from '@material-ui/core/Paper';
import Typo from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 800,
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Signup extends React.Component {
  state = {
    id: ''
  };

  handleChange = id => event => {
    this.setState({
      [id]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TextField
            id='outlined-name'
            label='id'
            className={classes.textField}
            value={this.state.id}
            onChange={this.handleChange('id')}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='id'
            className={classes.textField}
            value={this.state.id}
            onChange={this.handleChange('id')}
            margin='normal'
            variant='outlined'
            placeholder='id를 입력하세요'
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Paper>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Signup));
