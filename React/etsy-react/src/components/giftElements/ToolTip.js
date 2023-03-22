import React from "react";

export const Tooltip = setTimeout(createTooltip, 1000);

function createTooltip(giftElements) {
  giftElements.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop + 20;

      // console.log(e.pageX, e.pageY);

      const textElement = item.querySelector(".gift-name");
      textElement.style.left = `${x}px`;
      textElement.style.top = `${y}px`;
    });
  });
}

