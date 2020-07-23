import React, { useEffect, useRef } from 'react';
import './App.css'
import useWebAnimations, { bounce, rubberBand } from "@wellyshen/use-web-animations";
import Header from './Components/Header'
import Navbar from './Components/navbar'
import MainSection from './Components/MainSection'
import Footer from './Components/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  backgroundImage: {
    backgroundImage: "url('./images/cropped_image.png')",
    display: 'fixed',
    justifyContent: 'center',
    backgroundSize: 'cover',
    margin: 'auto',
    // // maxWidth: '100%',
    // // maxHeight: '100%',
    height: '50vh',
    flex: 3,
    position:'relative'

  },

  

}));

function App() {
  const classes = useStyles();

  const { ref, playState, getAnimation } = useWebAnimations

    ({
      keyframes: [{ transform: "translateX(500px)" }, { transform: "translate(100%,0)" },
      ],
      timing: {
        duration: 3000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
      },

    });
  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={12}>

          <Paper className={classes.paper}><Navbar /></Paper>
        </Grid>
        <Grid item xs={12}> 
      
          <Paper className={classes.backgroundImage} ><Header /></Paper>

        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      <Footer/>
    </div>

  );
}

export default App;

