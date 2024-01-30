import { canvas, ctx, props } from "../main";
import { drawTitle } from "./draw-title";

export const drawRectangles = () => {
  const { rectangles } = props;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* ADD TITLE */

  drawTitle();

  rectangles.forEach((rect) => {
    ctx.save(); // Save the current transformation matrix
    ctx.translate(rect.x + rect.width / 2, rect.y + rect.height / 2); // Translate to the center of the rectangle
    ctx.rotate((rect.rotation * Math.PI) / 180); // Apply rotation
    ctx.fillStyle = rect.color; // Set the fill color
    ctx.fillRect(-rect.width / 2, -rect.height / 2, rect.width, rect.height); // Draw the rectangle
    ctx.restore(); // Restore the transformation matrix
  });
};
