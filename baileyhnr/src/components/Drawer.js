import React from "react";

// Theme
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import {
  Subscriptions,
  ThumbUp,
  VideoLibrary,
  Whatshot,
  History,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" noWrap>
          Clipped drawer
        </Typography>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText primary="Trending" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbUp />
              </ListItemIcon>
              <ListItemText primary="Liked Videos" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
