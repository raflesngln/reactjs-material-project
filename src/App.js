import React from "react";
import clsx from "clsx";
import "./style.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MyHeader from "./layouts/MyHeader";
import MyLayouts from "./layouts/MyLayouts";
import MyFooter from "./layouts/MyFooter";
import Home from "./page/Home";
import About from "./page/About";
import ReactDatatableComponent from "./page/ReactDatatableComponent";
import ReatcTable from "./page/ReactTable";
import MaterialTable from "./page/MaterialTable";
import MuidataTable from "./page/MuidataTable";
import DevExpressTable from "./page/DevExpressTable";
import LoginPage from "./auth/LoginPage";
import useStyles from "./layouts/AppStyle";

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
import { connect } from "react-redux";
import {
  isAuthentication,
  login_failed,
  logoutUserLogin
} from "./redux/actions/userActions";

function MiniDrawer(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    props.logoutuserAction({ name: "rafles" });
  };
  const { isLogin,authKey,username,loading } = props.dataUserLogin;
  // dataUserLogin


  // {
  //   isLogin==false ? <LoginPage/>:'trrftftf';
    
  // }

  return(
    <>
      {
        isLogin?  <MyHome stateUser={props.dataUserLogin} logoutUser={logoutUser}/>:<LoginPage />
      }
    </>
  )
 
}


const MyHome = (props) => {
  let history = useHistory();
  // let location = useLocation();
  // const { isLogin,authKey,username,loading } = props.dataUserLogin;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const handleLogOut=()=>{
  props.logoutUser();
  // console.log('asasass')
  // history.push('/login')
}

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className="topBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ATT GROUP 
          </Typography>
          <Button variant="contained" size="small" color="secondary" onClick={handleLogOut}>
          Logout
        </Button>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar} className="sidebarTop">
          <span>MYAPPLICATIONS</span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        
        <List>
          {Mymenus.map((val, index) => (
            <NavLink
              to={val.url}
              activeClassName="selectedLink"
              className="selectedLink"
            >
              <ListItem button key={val.title} className="sidebarMenuList">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={val.title} />
              </ListItem>
            </NavLink>
          ))}
        </List>

      </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
            <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/Register">
                <Register />
              </Route>
              <Route path="/ReactDatatableComponent">
                <ReactDatatableComponent />
              </Route>
              <Route path="/ReatcTable">
                <ReatcTable />
              </Route>
              <Route path="/MuidataTable">
                <MuidataTable />
              </Route>
              <Route path="/DevExpressTable">
                <DevExpressTable />
              </Route>
              <Route path="/MaterialTable">
                <MaterialTable />
              </Route>
            </Switch>
          </main>
    </div>
    </Router>
  );
};

const Mymenus = [
  { id: 1, title: "Home", url: "/", icon: "" },
  { id: 2, title: "About", url: "/About", icon: "" },
  {
    id: 3,
    title: "DatatableComponent",
    url: "/ReactDatatableComponent",
    icon: ""
  },
  { id: 4, title: "React-Table", url: "/ReatcTable", icon: "" },
  { id: 5, title: "MuidataTable", url: "/MuidataTable", icon: "" },
  { id: 6, title: "DevExpressTable", url: "/DevExpressTable", icon: "" },
  { id: 7, title: "Register", url: "/Register", icon: "" },
  { id: 8, title: "MaterialTable", url: "/MaterialTable", icon: "" },
  { id: 9, title: "DevExpressTable", url: "/DevExpressTable", icon: "" },
  { id: 10, title: "DevExpressTable", url: "/DevExpressTable", icon: "" },
  { id: 11, title: "DevExpressTable", url: "/DevExpressTable", icon: "" },
  { id: 12, title: "One", url: "/One", icon: "" },
  { id: 13, title: "Two", url: "/Twoo", icon: "" },
  { id: 14, title: "Three", url: "/Three", icon: "" },
  { id: 15, title: "Four", url: "/Four", icon: "" }
];


const One=()=><h1>ONE</h1>
const Two=()=><h1>Two</h1>
const Three=()=><h1>Three</h1>
const Four=()=><h1>Four</h1>
const UseFormik=()=><h1>UseFormik</h1>
const UseUpload=()=><h1>UseUpload</h1>
const ReportData=()=><h1>ReportData</h1>
const Settings=()=><h1>Settings</h1>
const Register=()=><h1>Register</h1>



const mapStateToProps = state => {
  return {
    dataUserLogin: state.userLogin
  };
};
// Membuat dispatch
const mapDispatchToProps = dispatch => ({
  isAuthentication: data => {
    dispatch(isAuthentication(data));
  },
  logoutuserAction: data => {
    dispatch(logoutUserLogin(data));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniDrawer,MyHome);
