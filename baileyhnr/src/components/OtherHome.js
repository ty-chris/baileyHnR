import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./AppBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
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

const OtherHome = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const [videos, search] = useVideos("Rick Roll");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div style={{ minHeight: 4800}}>
      <div className={classes.home} onClick={openDialog}>
        <AppBar />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </div>
  );
};

export default OtherHome;
