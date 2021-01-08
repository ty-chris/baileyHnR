import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from "./AppBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import Slide from '@material-ui/core/Slide';

import Popup from "./Popup"

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    height: "100%",
    position: "fixed",
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    background: "pink",
  },
  window: {
    flexGrow: 1,
    margin: 'auto',
    width: "80%",
    height: "80%",
    postition: "justify",
    align: 'center',
  },
  header: {
    color: "#202124",
    fontFamily: 'Google Sans,Noto Sans Myanmar UI,arial,sans-serif',
    fontSize: '100px',
    fontWeight: 400,
    lineHeight: 1.3333,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("Rick Roll");

  console.log("videos", videos);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div style={{ minHeight: 4800 }}>
      <div className={classes.home} onClick={openDialog}>
        <AppBar />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
      <Dialog justify="center" fullScreen open={open} className={classes.window} TransitionComponent={Transition}>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <span className={classes.header}>To continue, please sign up.</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/login">
              <Button variant="contained" color="primary">
                By signing up, TrollTube accepts no liability for any damages and discomfort caused.
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Popup />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default Home;
