import React from 'react';
import Projects from './Projects';
import Avatar from '../components/Avatar';
import NavBar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  workContainer: {
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 100, 
      paddingRight: 100
    },
    maxWidth: '100%', 
    margin: 'auto'
  },
  divider: {
    margin: 'auto',
    width: '90%',
    padding: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'lightblack'
  },
  moreProjects: {
    padding: 20
  }

}));

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <NavBar/>
      <Grid style={{marginTop: 50, marginBottom: 10}} item xs={12}>
        <Avatar />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{fontWeight: 'bold'}} variant="h3" align="center">
          Software Engineer
        </Typography>
        <Typography variant="h6" align="center">
          I am a problem solver who codes 
        </Typography>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid className={classes.workContainer} item container>
        <Projects/>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Grid className={classes.workContainer} item xs={12}>
        <Typography style={{fontWeight: 'bold'}} variant="h3" align="center">
          More Projects
        </Typography>
        <Typography variant="h4" align="left">
          Playlister 
        </Typography>
        <Typography variant="h6" align="left">
          I am a problem solver who codes 
        </Typography>
        <Typography variant="h6" align="left">
          I am a problem solver who codes 
        </Typography>
        <Typography variant="h6" align="left">
          I am a problem solver who codes 
        </Typography>
        <Typography variant="h6" align="left">
          I am a problem solver who codes 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Main;