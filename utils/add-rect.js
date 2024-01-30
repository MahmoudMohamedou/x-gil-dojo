import { props } from "../main";

export const addRect = () => {
    let { nextId, tempRect, rectangles } = props;
    if (!tempRect) return;
    const findRect = rectangles.find((f) => {
        return (
            f.id === nextId ||
            (f.x === tempRect.x &&
                f.y === tempRect.y &&
                f.width === tempRect.width &&
                f.height === tempRect.height &&
                f.color === tempRect.color)
        );
    });
    if (!findRect) {
        rectangles.push(tempRect);
        props.nextId++;
    }
}