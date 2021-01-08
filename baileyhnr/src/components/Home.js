import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./AppBar";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";

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

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <div className={classes.home} onClick={openDialog}>
        <AppBar />
        Video List
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
      <Dialog open={open}>
        <Link to="/login">
          <Button variant="outlined" color="primary">
            Login to continue
          </Button>
        </Link>
      </Dialog>
    </div>
  );
};

export default Home;
