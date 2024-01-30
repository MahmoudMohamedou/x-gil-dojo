import { props } from "../main";

export const handleMouseLeave = () => {
  props.isDrawing = false;
  props.randomColor = "";
};
