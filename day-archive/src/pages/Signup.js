import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Paper from '@material-ui/core/Paper';
import Typo from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
    maxWidth: 500,
    textAlign: 'center'
  },
  textField: {
    flexBasis: 200
  }
});

class Signup extends React.Component {
  state = {
    id: '',
    password: '',
    passwordconfirm: '',
    idValidate: false,
    showPassword: false
  };

  handleChange = (id, password) => event => {
    this.setState({
      [id]: event.target.value,
      [password]: event.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typo component='h4' variant='h4'>
            회원 가입
          </Typo>
          <TextField
            fullWidth
            required
            error={this.state.idValidate}
            id='outlined-id'
            label='ID'
            className={classes.textField}
            value={this.state.id}
            onChange={this.handleChange('id')}
            margin='normal'
            variant='outlined'
          />
          <TextField
            fullWidth
            id='outlined-adornment-password'
            className={classes.textField}
            variant='outlined'
            margin='normal'
            type={this.state.showPassword ? 'text' : 'password'}
            label='Password'
            value={this.state.password}
            onChange={this.handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='Toggle password visibility'
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            id='outlined-adornment-password'
            className={classes.textField}
            variant='outlined'
            margin='normal'
            type={this.state.showPassword ? 'text' : 'password'}
            label='Password'
            value={this.state.passwordconfirm}
            onChange={this.handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='Toggle password visibility'
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Paper>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Signup));
