import React, { useEffect, useRef } from 'react';
import './App.css'
import useWebAnimations, { bounce, rubberBand } from "@wellyshen/use-web-animations";
import Header from './Components/Header'
import Navbar from './Components/navbar'
import MainSection from './Components/MainSection'
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from './Components/Footer'
import Cards from './Components/Cards/Cards'
import Card1 from './Components/Cards/Card1'
import Card2 from './Components/Cards/Card2'
import Card3 from './Components/Cards/Card3'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },

  backgroundImage: {
    backgroundImage: "url('./images/imag2.jpg')",
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center center ',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    // backgroundPosition:'fixed'
  },
  blogsection: {
    backgroundColor: 'blueviolet',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center center ',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    // backgroundPosition:'fixed'
  },


  //   cards:{
  // alignItems:'center',
  // padding: theme.spacing(10, 7),
  // direction:'row'
  //   },
  // aftercards:{
  // backgroundColor:red,
  //   }

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
      <Grid container  >
        <Grid item xs={12}>

          <Paper><Navbar /></Paper>
        </Grid>
        <Grid item xs={12}>

          <Paper className={classes.backgroundImage} ><Header /></Paper>

        </Grid>

        <Grid item xs={3}>
          <Paper className="cards" ><Cards /></Paper>


        </Grid>
        <Grid item xs={3}>
          <Paper className="cards"><Card1 /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="cards"><Card2 /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="cards"><Card3 /></Paper>
        </Grid>

      </Grid>


      {/* sec container */}
      <Grid container  >
        <Grid item xs={12}>


        </Grid>
        <Grid item xs={12}>
       
          <Paper className={classes.blogsection} ><MainSection/></Paper>
         
        </Grid>

        <Grid item xs={3}>
          
          <Paper className="cards" ><Cards /></Paper>
        

        </Grid>
      
        <Grid item xs={3}> 
         
          <Paper className="cards"><Card1 /></Paper>
        </Grid>
        <Grid item xs={3}>
       <Zoom>  <Paper className="cards"><Card2 /></Paper></Zoom> 
        </Grid>
        <Grid item xs={3}>
          <Paper className="cards"><Card3 /></Paper>
        </Grid>

      </Grid>
      <Footer />
    </div>

  );
}

export default App;

