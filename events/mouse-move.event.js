import { props } from "../main";
import { drawSimpleRects } from "../utils/draw-rects-simple";

export const handleMouseMove = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const {
    canvasOffSetX,
    canvasOffSetY,
    rectangles,
    startX,
    startY,
    randomColor,
    nextId,
    isDrawing,
  } = props;

  if (!isDrawing) return;

  const newMouseX = e.clientX - canvasOffSetX;
  const newMouseY = e.clientY - canvasOffSetY;

  const rectWidth = Math.abs(newMouseX - startX);
  const rectHeight = Math.abs(newMouseY - startY);

  props.tempRect = {
    id: nextId,
    x: startX,
    y: startY,
    width: rectWidth,
    height: rectHeight,
    color: randomColor,
  };

  // draw the rectangle
  const newRectangles = [...rectangles, props.tempRect];
  drawSimpleRects(newRectangles);
};
