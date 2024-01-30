import { props } from "../main";
import { drawSimpleRects } from "./draw-rects-simple";

export const resetCanvas = () => {
  const { rectangles } = props;
  rectangles.splice(0);
  // redraw
  drawSimpleRects();
};
