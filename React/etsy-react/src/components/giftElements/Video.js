import React from "react";
import LikeTheImage from "./LikeImage";
import PlayVideo from "./PlayVideo";
import PauseVideo from "./PauseVideo";
import PlayButton from "./PlayButton";

function Video(props) {
  // console.log(props);
  if (props.value === "Photo") {
    return (
      <div className="gift-img">
        <img src={props.url} />;
        <LikeTheImage />
      </div>
    );
  } else if (props.value === "Video") {
    return (
      <div className="gift-img">
        <video
          poster={props.url}
          className="video"
          loop={true}
          muted={true}
          type="video/mp4"
          src={props.video}
          onMouseOver={PlayVideo}
          onMouseLeave={PauseVideo}
        ></video>
        <LikeTheImage />
        <PlayButton value={props.value} />
      </div>
    );
  }
}

export default Video;
