import { props } from "../main";
import { deleteAllRectAfterRotation } from "./delete-rects";
import { drawRectangles } from "./draw-rects-rotation";

export const rotateRectangle = (rect) => {
  let start = null;
  props.activeRotations++;
  const rotate = (timestamp) => {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    rect.rotation = (progress / 10) % 360; // Rotate by 1 degree every 10 milliseconds
    drawRectangles();
    if (progress < 3600) {
      // Continue rotating for 3.6 seconds (3600 milliseconds)
      requestAnimationFrame(rotate);
    } else {
      rect.rotation = 0; // Reset rotation angle
      props.activeRotations--; // decrement active rotation
      if (props.activeRotations === 0) {
        deleteAllRectAfterRotation();
      }
    }
  };
  requestAnimationFrame(rotate);
};
