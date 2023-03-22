import React from "react";

const playButtonSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <polygon points="4 4 4 20 20 12 4 4"></polygon>
  </svg>
);

function playButton(data, idx) {
  if (data.urlType === "Video") {
    return <div className="play-btn">{playButtonSVG}</div>;
  } else {
    return "";
  }
}

export default playButton;
