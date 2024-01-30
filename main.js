import { handleClickRepaintButton } from "./events/click-repaint-button.event";
import { handleClickResetButton } from "./events/click-reset-button.event";
import { handleRectDoubleClick } from "./events/dblclick.-rect.event";
import { handleMouseDown } from "./events/mouse-down.event";
import { handleMouseLeave } from "./events/mouse-leave.event";
import { handleMouseMove } from "./events/mouse-move.event";
import { handleMouseUp } from "./events/mouse-up.event";
import { drawTitle } from "./utils/draw-title";

export const canvas = document.getElementById("myCanvas");
export const ctx = canvas.getContext("2d");

/* ADD TITLE */

drawTitle();
const repaintButton = document.getElementById("repaint");
const resetButton = document.getElementById("reset");

const canvasOffSet = canvas.getBoundingClientRect();
const canvasOffSetX = canvasOffSet.top;
const canvasOffSetY = canvasOffSet.left;
/* TO BE USED IN OTHERS FILES */
export const props = {
  nextId: 1, /* variable that track the next rect id */
  activeRotations: 0, /* variable that store the number of current active rotations */
  rectangles: [], /* variable that stores the drawed rectangles */
  rectsToBeDelete: [], /* variable that stores the ids of rectangles to be deleted */
  startX: 0, /* variable that get the start mouse X coordinates relatives to canvas */
  startY: 0, /* variable that get the start mouse Y coordinates relatives to canvas */
  isDrawing: false, /* variable that indicate if we are in drawing mode or not */
  randomColor: "", /* variable that store the color of a random rectangle */
  tempRect: undefined, /* variable that store the last rectangle version (just after mouseup) to be persisted on the screen */
  canvasOffSet,
  canvasOffSetX,
  canvasOffSetY
}

canvas.addEventListener("mousedown", handleMouseDown);

canvas.addEventListener("mousemove", handleMouseMove);

canvas.addEventListener("mouseup", handleMouseUp);

canvas.addEventListener("mouseleave", handleMouseLeave);

canvas.addEventListener("dblclick", handleRectDoubleClick);

repaintButton.addEventListener("click", handleClickRepaintButton);

resetButton.addEventListener("click", handleClickResetButton);
