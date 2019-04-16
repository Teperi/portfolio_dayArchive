import React from 'react';
import Main_illust from './Main_illust.svg';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 1000,
    marginTop: 50,
    margin: 'auto'
  },
  media: {
    objectFit: 'contain'
  }
});

const Main = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          component='img'
          alt='Main Illustration'
          className={classes.media}
          image={Main_illust}
          height='500'
        />
        <CardContent>
          <Typography gutterBottom variant='h4'>
            당신의 하루를 기록하세요.
          </Typography>
          <Typography component='p'>
            하루를 기록하는 가장 좋은 방법 dayArchive 에서 함께 하세요.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withRoot(withStyles(styles)(Main));
