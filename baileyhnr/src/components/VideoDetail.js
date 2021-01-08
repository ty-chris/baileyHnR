import React from 'react';
import ReactPlayer from 'react-player/youtube';

import CircularProgress from '@material-ui/core/CircularProgress';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <CircularProgress />;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <ReactPlayer
                url={videoSrc}
                height="100%"
                width="100%"
                controls
            />
        </div>
    );
}

export default VideoDetail;
