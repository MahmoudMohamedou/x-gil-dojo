import { canvas, ctx, props } from "../main";
import { drawTitle } from "./draw-title";

export const drawSimpleRects = (params) => {
  const { rectangles } = props;
  const rects = params ?? rectangles;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* ADD TITLE */
  drawTitle();
  //const newRectangles = [...rectangles, tempRect];
  rects.forEach((rect) => {
    ctx.fillStyle = rect.color; // Set the fill color
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height); // Draw each rectangle
  });
};
