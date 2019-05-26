import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Badge, Divider, Drawer, List, ListItem,ListItemText,Container, Table} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Chart from '../Components/Chart';
import OrdersTable from '../Components/OrdersTable'
import HighChart from '../Components/HighChart'
import Footer from './Footer'

const drawerWidth = 240;

const useStyles = makeStyles(theme=>({
  root: {
    display:'flex',
  },
  fixedHeight: {
    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

const styles = {
    Paper: {
        paddng:20, marginTop: 10, marginBottom:10
    }
}

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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div>
        {/* ORDERS TABLE DISPPLAY */}
        <Grid container spacing={7}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper>
              <OrdersTable/>
              </Paper>  
            </Grid>
             {/* LINE CHART DISPLAY */}
             <Grid item xs={12} md={8} lg={9}>
                <Paper>
                  <HighChart/>
                </Paper>
            </Grid>
            {/* BAR CHART DISPLAY */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper>
                  <Chart/>
                </Paper>
            </Grid>
            <Grid item xs>
            <Footer />
            </Grid>
        </Grid>
    </div>
    <div>
    </div>
    </div>
  );
}

export default PersistentDrawerLeft;