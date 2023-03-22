import React from "react";

function PauseVideo(e) {
  e.target.pause();
  e.target.currentTime = 0;
}

export default PauseVideo