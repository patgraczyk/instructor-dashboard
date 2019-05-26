import React, { Component } from 'react'
import {AppBar, Toolbar, Typography, Badge, Divider, Drawer, List, ListItem,ListItemText} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
      marginLeft: 0,
    },
  }));

export default function Dashboard() {

    
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();


    function handleDrawerOpen() {
        setOpen(true);
      }
    
      function handleDrawerClose() {
        setOpen(false);
      }
    return(
    <div>
        <AppBar position="absolute">
            <Toolbar >

            <IconButton
                edge="start"
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerOpen}> 
                className={clsx(classes.menuButton, open && classes.hide)}
            <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
                Instructor Dashboard
            </Typography>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
        variant="permanent">
        <div>
          <IconButton
            onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        {['Dashboard', 'Orders', 'Customers', 'Reports'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>{['Dashboard', 'Orders', 'Customers', 'Reports'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}</List>
      </Drawer>
    </div>
    )
}


    // end of class bracket 




