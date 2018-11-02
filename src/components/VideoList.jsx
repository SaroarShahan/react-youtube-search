import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const VideoItem = props.videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="col-md-4">{VideoItem}</div>
    </React.Fragment>
  );
};

export default VideoList;
