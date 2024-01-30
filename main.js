import { handleClickButton } from "./events/button-click.event";
import { handleDoubleClick } from "./events/dblclick.event";
import { handleMouseDown } from "./events/mouse-down.event";
import { handleMouseLeave } from "./events/mouse-leave.event";
import { handleMouseMove } from "./events/mouse-move.event";
import { handleMouseUp } from "./events/mouse-up.event";

export const canvas = document.getElementById("myCanvas");
export const ctx = canvas.getContext("2d");
const repaintButton = document.getElementById("repaint");

const canvasOffSet = canvas.getBoundingClientRect();
const canvasOffSetX = canvasOffSet.top;
const canvasOffSetY = canvasOffSet.left;
/* TO BE USED IN OTHERS FILES */
export const props = {
  nextId: 1,
  activeRotations: 0,
  rectangles: [],
  rectsToBeDelete: [],
  startX: 0,
  startY: 0,
  isDrawing: false,
  randomColor: "",
  tempRect: undefined,
  canvasOffSet,
  canvasOffSetX,
  canvasOffSetY
}

canvas.addEventListener("mousedown", handleMouseDown);

canvas.addEventListener("mousemove", handleMouseMove);

canvas.addEventListener("mouseup", handleMouseUp);

canvas.addEventListener("mouseleave", handleMouseLeave);

canvas.addEventListener("dblclick", handleDoubleClick);

repaintButton.addEventListener("click", handleClickButton);
