import React from "react";
import ReactPlayer from "react-player/youtube";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  player: {
    position: "absolute",
    top: 5,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

const VideoDetail = ({ video }) => {
  const classes = useStyles();

  if (!video) {
    return <CircularProgress />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <ReactPlayer
        className={classes.player}
        url={videoSrc}
        height="100%"
        width="100%"
        playing
      />
    </div>
  );
};

export default VideoDetail;
