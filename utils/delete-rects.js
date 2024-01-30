import { props } from "../main";
import { drawSimpleRects } from "./draw-rects-simple";

export const deleteAllRectAfterRotation = () => {
    const { rectangles, rectsToBeDelete } = props

    const newRectangles = rectangles.filter((f) => !rectsToBeDelete.includes(f.id));
    // reset all rectangles
    rectangles.splice(0);
    // add non deleted rects
    rectangles.push(...newRectangles)
    rectsToBeDelete.splice(0); // re-initialize rects to be deleted
    drawSimpleRects()// Redraw the canvas without the deleted rectangle
}