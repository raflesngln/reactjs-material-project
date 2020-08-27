import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink,
  useParams
} from "react-router-dom";
import { connect } from "react-redux";
import { isAuthentication, successLogin,login_failed, logoutUserLogin } from './../redux/actions/userActions';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  paper: {
    height: '100%',
    width: '400px',
    padding:'50px 0px 15px 50px'
  },
  control: {
    padding: theme.spacing(2),
  },
  textField: {
    width: '80%',
  },
}));



const LoginPage=(props)=>{
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [logindata,setLogindata]=useState({username:'',password:''});

// const {isLogin,authKey,loading}=props.userLogin.userAuth;
  const handleChange=(e)=>{
    let nama=e.target.name
    let value=e.target.value
    setLogindata(prev=>({
      ...prev,
      [nama]:value
    }))

  }

  
  const cekLoginSubmit=()=>{
    const {username,password}=logindata;
    let avatar='powerranger.jpg';
    props.successLoginUser({username:username,userAvatar:avatar});

  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return(
    // <div style={{height:'300px',width:'100%',background:'red'}}>
    <Grid container className={classes.root} spacing={2}>
      <Grid item md={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid  item>
              <Paper className={classes.paper}>
                  <h1>Login Form</h1>
                  <p>Datas Login : {JSON.stringify(props.dataUserLogin)}</p>
                  <h5>LoginPage Page {JSON.stringify(logindata)}</h5>
                  <form method="post" onSubmit={cekLoginSubmit}>
                   
                   
                    <div>
                        <TextField
                          label="Username"
                          name="username"
                          id="standard-start-adornment"
                          value={logindata.username}
                          onChange={handleChange} required
                          className={clsx(classes.margin, classes.textField)}
                         
                        />
                        </div>

                    <Grid item xs={12}>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={logindata.password}
                            name="password"
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        
                      </Grid>
                    <div>

                    <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                     

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            style={{marginTop:'50px'}}
                            startIcon={<SaveIcon />}
                          >
                            LOGIN
                          </Button>
                    </Grid>
                     
                        </div>
                  </form>
              </Paper>
            </Grid>
        </Grid>
      </Grid>

      </Grid>
    // </div>
  )
}

const mapStateToProps = state => {
  return {
    dataUserLogin: state.userLogin.state
  };
};
// Membuat dispatch
const mapDispatchToProps = dispatch => ({
  isAuthentication: data => {
    dispatch(isAuthentication(data));
  },
  login_failed: data => {
    dispatch(login_failed(data));
  },
  successLoginUser: data => {
    dispatch(successLogin(data));
  },
  logoutUserLogin: data => {
    dispatch(logoutUserLogin(data));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
