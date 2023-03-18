import { useLayoutEffect, useRef, useState } from "react";

function useTest() {
  const labelRef = useRef();
  return labelRef;
}

function useTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  const labelRef = useRef();
  //   return labelRef;
  const refObj = useRef();

  useLayoutEffect(() => {
    if (showTooltip) {
      const width1 = labelRef.current.getBoundingClientRect().width;
      const width2 = refObj.current.getBoundingClientRect().width;

      refObj.current.style.left = `${-(width2 - width1) / 2}px`;
    }
  }, [showTooltip]);

  return [showTooltip, setShowTooltip, labelRef, refObj];
}

export { useTest, useTooltip };
