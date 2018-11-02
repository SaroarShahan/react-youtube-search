import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="card mb-3">
      <div className="card-body p-2 d-flex align-items-center">
        <div className="card__img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="card__content pl-3">
          <h1 className="heading-sm">
            <span
              className="SelectPointer"
              onClick={() => onVideoSelect(video)}
            >
              {video.snippet.title}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
