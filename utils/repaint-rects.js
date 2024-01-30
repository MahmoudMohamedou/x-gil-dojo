import { props } from "../main";
import { drawSimpleRects } from "./draw-rects-simple";
import { getRepaintRectIndexes } from "./find-repaint-indexes";
import { getRandomColor } from "./random-color";

export const repaintRect = () => {
    const { rectangles } = props;
    const [rectIndex1, rectIndex2] = getRepaintRectIndexes();

    if (rectIndex1 < 0 || rectIndex2 < 0) return;
    const randomColor = getRandomColor();

    rectangles[rectIndex1].color = randomColor;
    rectangles[rectIndex2].color = randomColor;

    // redraw with the new generated color
    drawSimpleRects();
}