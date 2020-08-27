import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import TableSceleton from './../modules/table_sceleton'
import firebase from './../config/firebase'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});




const About=()=>{
  const[loading,setLoading]=useState(true);
  const [user,setUser]=useState({email:'',password:''});
  // console.log(firebase);


  const loginUserAccount=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(res=>{
      console.log(JSON.stringify(res));
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    console.log(errorCode+ 'register akun'+errorMessage);
      // ...
    });
    // console.log('register akun');
  }

  const registerAccount=(e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res=>{
      console.log(JSON.stringify(res));
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    console.log(errorCode+ 'register akun'+errorMessage);
      // ...
    });
    // console.log('register akun');
  }

  const handleChange=(e)=>{
    e.preventDefault();

    let nama=e.target.name;
    let value=e.target.value;
    setUser(prev=>({
       ...prev,
       [nama]:value
    }))
  }

  return(
    <>
    <TableSceleton loading={loading} title="About Paging"/>
    <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      
      <div>
        <h1>FIREBASE</h1>
          <h5>{JSON.stringify(user)}</h5>
          <form >
            <input type="text" value={user.email} name="email" placeholder="email" onChange={handleChange}/>
            <input type="text" value={user.password} name="password" placeholder="password" onChange={handleChange}/>
            <button type="submit" onClick={registerAccount}>Register</button>
            <button type="submit" onClick={loginUserAccount}>loginUserAccount</button>
          </form>
      </div>
      
      {/* <Grid item xs>
        <TypographyDemo />
      </Grid> */}

        {/* <Switch>
        
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
        </Switch> */}
      </div>
    </>
  );
}

export default About



const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return(
  <div style={{height:'500px',width:'500px',backroundColor:'red'}}>
    <h3>Public Pagess</h3>
    </div>
    );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
