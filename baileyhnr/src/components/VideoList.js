import React from "react";
import VideoItem from "./VideoItem";

import Grid from "@material-ui/core/Grid";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          paddingLeft: 240,
          height: "100%",
          width: "100%",
        }}
        alignItems="stretch"
        display="flex"
      >
        {videos.map((video) => (
          <Grid
            key={video.id.videoId}
            item
            component="Card"
            xs={12}
            sm={6}
            lg={4}
            xl={3}
          >
            <VideoItem
              key={video.id.videoId}
              video={video}
              onVideoSelect={onVideoSelect}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoList;
