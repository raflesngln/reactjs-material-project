import React from 'react';
import clsx from 'clsx';
import './style.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MyHeader from './layouts/MyHeader'
import MyLayouts from './layouts/MyLayouts'
import MyFooter from './layouts/MyFooter'
import Home from './page/Home'
import About from './page/About'
import ReactDatatableComponent from './page/ReactDatatableComponent'
import ReatcTable from './page/ReactTable';
import MuidataTable from './page/MuidataTable';
import DevExpressTable from './page/DevExpressTable';
import Login from './auth/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink,
  useParams
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} 
      >
        <Toolbar className="topBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ATT GROUP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} className="sidebarTop">
         <span>MYAPPLICATIONS</span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Mymenus.map((val, index) => (
            <NavLink to={val.url} activeClassName="selectedLink" className="selectedLink" >
            <ListItem button key={val.title} className="sidebarMenuList">
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
          <Route path="/Login">
            <Login />
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

          
        </Switch>
      </main>
    </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

const Mymenus=[
    {id:1,title:'Home',url:'/',icon:''},
    {id:2,title:'About',url:'/About',icon:''},
    {id:3,title:'DatatableComponent',url:'/ReactDatatableComponent',icon:''},
    {id:4,title:'React-Table',url:'/ReatcTable',icon:''},
    {id:5,title:'MuidataTable',url:'/MuidataTable',icon:''},
    {id:6,title:'DevExpressTable',url:'/DevExpressTable',icon:''},
    {id:7,title:'Login',url:'/Login',icon:''},
    {id:8,title:'DevExpressTable',url:'/DevExpressTable',icon:''},
    {id:9,title:'DevExpressTable',url:'/DevExpressTable',icon:''},
    {id:10,title:'DevExpressTable',url:'/DevExpressTable',icon:''},
    {id:11,title:'DevExpressTable',url:'/DevExpressTable',icon:''},
     {id:12,title:'One',url:'/One',icon:''},
    {id:13,title:'Two',url:'/Twoo',icon:''},
    {id:14,title:'Three',url:'/Three',icon:''},
    {id:15,title:'Four',url:'/Four',icon:''},
];
