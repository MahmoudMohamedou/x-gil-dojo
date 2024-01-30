import { canvas, props } from "../main";
import { rotateRectangle } from "../utils/rotate-rects";

export const handleDoubleClick = (event) => {
    console.log("DOUBLE_CLICK")
    const { rectangles, rectsToBeDelete } = props
    var mouseX = event.clientX - canvas.getBoundingClientRect().left; // Mouse X position relative to canvas
    var mouseY = event.clientY - canvas.getBoundingClientRect().top; // Mouse Y position relative to canvas

    rectangles.forEach((rect, index) => {
        // Check if the click occurred inside the boundaries of any rectangle
        if (
            mouseX >= rect.x &&
            mouseX <= rect.x + rect.width &&
            mouseY >= rect.y &&
            mouseY <= rect.y + rect.height
        ) {
            const findRect = rectangles.find((f) => f.id === rect.id);
            if (findRect) {
                rectsToBeDelete.push(findRect.id);
                rotateRectangle(rect);
            }
        }
    });
}