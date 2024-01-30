import { props } from "../main";


export const getRepaintRectIndexes = () => {
    const { rectangles } = props;
    let minDiffArea = -1;
    let rectIndex1 = -1;
    let rectIndex2 = -1;
    for (let i = 0; i < rectangles.length - 1; i++) {
        for (let j = i + 1; j < rectangles.length; j++) {
            const rect1 = rectangles[i];
            const rect2 = rectangles[j];
            const area1 = rect1.width * rect1.height;
            const area2 = rect2.width * rect2.height;
            const diffArea = Math.abs(area1 - area2);
            if (minDiffArea === -1 || (minDiffArea > diffArea)) {
                minDiffArea = diffArea;
                rectIndex1 = i;
                rectIndex2 = j;
            }
        }
    }

    return [rectIndex1, rectIndex2];
}