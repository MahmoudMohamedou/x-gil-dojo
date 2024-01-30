import { props } from "../main";
import { getRandomColor } from "../utils/random-color";

export const handleMouseDown = (e) => {
  console.log("MOUSE_DOWN");
  e.preventDefault();
  e.stopPropagation();

  const { canvasOffSetX, canvasOffSetY } = props;

  props.startX = e.clientX - canvasOffSetX;
  props.startY = e.clientY - canvasOffSetY;
  props.isDrawing = true;
  if (!props.randomColor) props.randomColor = getRandomColor();
};
