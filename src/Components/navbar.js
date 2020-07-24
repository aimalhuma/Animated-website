import React from 'react'

import useWebAnimations ,{bounce,rubberBand}from "@wellyshen/use-web-animations";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TouchAppIcon from '@material-ui/icons/TouchApp'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  iconbtn:{
    color: 'white',
    '&:hover': {
      transform: 'scale(1.3)',
      color:'white',
      backgroundColor: "blueviolet"
  },
  }
}));
const Navbar = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const { ref, playState, getAnimation } = useWebAnimations({...bounce})
  return (
    <nav class="product-filter" >
        <h1 align="left">Build Your Website</h1>
        <div class="sort">
          <div class="collection-sort">
          <Typography className={classes.root}>
          <Link >
          <IconButton   aria-label="upload picture" component="span">
            <ShoppingCartIcon fontSize="large" className={classes.iconbtn} />
          </IconButton>
          </Link>
        <Link>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <LibraryAddIcon fontSize="large" className={classes.iconbtn}/>
          </IconButton>
           </Link>
        <Link>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <TouchAppIcon fontSize="large" className={classes.iconbtn}/>
          </IconButton>
           </Link>
</Typography>
          </div>
        </div>
      </nav>
  )
}

export default Navbar

