import { props } from "../main";

export const handleMouseLeave = () => {
  console.log("MOUSE_LEAVE");
  props.isDrawing = false;
  props.randomColor = "";
};
