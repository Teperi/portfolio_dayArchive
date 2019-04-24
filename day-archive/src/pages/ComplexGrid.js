import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Main_illust from './Main_illust.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    alignContent: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 1000
  },
  image: {
    maxWidth: 300
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='complex' src={Main_illust} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Standard license
                </Typography>
                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                <Typography color='textSecondary'>ID: 1030114</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ComplexGrid);
