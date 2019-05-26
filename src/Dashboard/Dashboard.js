import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Badge, Divider, Drawer, List, ListItem,ListItemText, Grid, Paper, ListItemIcon, IconButton, CssBaseline} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import EuroSymbol from '@material-ui/icons/EuroSymbol'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import Chart from '../Components/Chart';
import OrdersTable from '../Components/OrdersTable'
import LineChart from '../Components/LineChart'
import Footer from './Footer'
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 10,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'right',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'row',
    marginLeft: '180px'
  },
}));

function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
      <div>

     {/* <div className={classes.root}> */}
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Instructor Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={23} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      > 
      <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Bookings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <EuroSymbol />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All reports', 'Reports 2019', 'Reports 2018'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<ListIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >  
      <div className={classes.drawerHeader}>
        {/* ORDERS TABLE DISPPLAY */}
        <Grid container spacing={7}>
            <Grid item xs>
              <Paper className={classes.paper}>
              <OrdersTable/>
              </Paper>  
            </Grid>
             {/* LINE CHART DISPLAY */}
             <Grid item xs>
             <Paper className={classes.paper}>
                  <LineChart/>
                </Paper>
            </Grid>
            {/* BAR CHART DISPLAY */}
            <Grid item xs>
            <Paper className={classes.paper}>
                  <Chart/>
                </Paper>
            </Grid>
        </Grid>
        </div>
        </main>
    <div>
      <Footer />
    </div>
</div>
  );
}

export default PersistentDrawerLeft;