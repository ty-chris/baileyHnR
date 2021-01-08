import React from "react";

// Theme
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const VideoItem = ({ video }) => {
  console.log("video", video);

  return (
    <div>
      <Card style={{ height: "100%", marginLeft: "5%" }}>
        <CardActionArea>
          {video.snippet.thumbnails.medium.url ? (
            <CardMedia
              style={{ height: 0, paddingTop: "56.25%" }}
              image={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          ) : (
            <LinearProgress color="secondary" />
          )}
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2" noWrap>
              {video.snippet.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default VideoItem;
