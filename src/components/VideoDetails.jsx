import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const id = video.id.videoId;
  const url = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="col-md-8">
      <div className="card">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="card-body">
          <h4 className="heading-md border-bottom pb-2 mb-4">
            {video.snippet.title}
          </h4>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
