import { canvas, ctx } from "../main";

export const drawTitle = () => {
  /* ADD TITLE TO THE CANVAS */

  ctx.font = "24px Helvetica, serif"; // Set font size
  ctx.fillStyle = "#ff00ff"; // Set text color #ff00ff
  ctx.textAlign = "center"; // Align text horizontally
  ctx.fillText("Draw Here", canvas.width / 2, 30);
};
