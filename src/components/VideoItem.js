import React from "react";
import "../style.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="card video-card mt-2 mb-2 w-100"
      onClick={() => onVideoSelect(video)}
    >
      <div className="shadow">
        <p>{video.snippet.title}</p>
      </div>
      <div className="card-body video-item">
        <img
          src={video.snippet.thumbnails.medium.url}
          className="w-100"
          alt=""
        />
        
      </div>
    </div>
  );
};

export default VideoItem;
