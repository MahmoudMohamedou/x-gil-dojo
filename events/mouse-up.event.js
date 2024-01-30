import { props } from "../main";
import { addRect } from "../utils/add-rect";

export const handleMouseUp = () => {
  props.isDrawing = false;
  props.randomColor = "";
  addRect(props.tempRect);
};
