import React from 'react'
import { AppBar,Typography } from '@material-ui/core'
import memories from '../../images/photo.jpg';

import useStyles from './style'

function Navbar() {

    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Recollections</Typography>
        <img className={classes.image} src={memories} alt="icon" height="90" width={100} />
      </AppBar>
  )
}

export default Navbar