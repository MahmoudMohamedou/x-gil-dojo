import { ctx, props } from "../main";

export const handleMouseMove = (e) => {
    console.log("MOVE");
    e.preventDefault();
    e.stopPropagation();

    const { canvasOffSetX, canvasOffSetY, canvasOffSet, rectangles, startX, startY, randomColor, nextId, isDrawing } = props;

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

    ctx.clearRect(0, 0, canvasOffSet.width, canvasOffSet.height);
    const newRectangles = [...rectangles, props.tempRect];
    newRectangles.forEach((rect) => {
        ctx.fillStyle = rect.color; // Set the fill color
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height); // Draw each rectangle
    });
}