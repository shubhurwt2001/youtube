import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else {
    var src = `https://youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="row mt-2">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="video-container">
                <iframe src={src} allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body video-detail">
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
