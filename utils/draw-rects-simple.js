import { canvas, ctx, props } from "../main";

export const drawSimpleRects = () => {
    const { rectangles } = props;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //const newRectangles = [...rectangles, tempRect];
    rectangles.forEach((rect) => {
        ctx.fillStyle = rect.color; // Set the fill color
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height); // Draw each rectangle
    });
}