import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default function ImgMediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <ScrollAnimation animateIn='fadeIn'>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image="./images/imag6.jpg"
            title="Contemplative Reptile"
          /></ScrollAnimation>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Insights
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We’re obsessed with new ways to transform old paradigms,explore the latest industry trends,
            and celebrate the kind of future-forward thought leadership that can help
            you accelerate your brand and make impactful decisions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}