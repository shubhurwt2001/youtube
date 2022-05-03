import React from "react";
import VideoItem from "./VideoItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const VideoList = ({ videos, onVideoSelect }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {videos.map((video, index) => {
        if (video.id.kind == "youtube#video") {
          return (
            <div key={index}>
              <VideoItem
                video={video}
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
              />
            </div>
          );
        }
      })}
    </Slider>
  );
};

export default VideoList;
