// Header.js
import React  from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const MyLayouts = props => {
  const classes = useStyles();

  return (
     <Grid container className={classes.root} spacing={2}>
	    <Grid item lg={12}>
        <Grid container justify="center" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
              {props.children}
	          </Paper>
            </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MyLayouts;