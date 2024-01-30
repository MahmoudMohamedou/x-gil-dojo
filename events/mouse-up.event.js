import { props } from "../main";
import { addRect } from "../utils/add-rect";

export const handleMouseUp = (e) => {
    console.log("MOUSE_UP");
    props.isDrawing = false;
    props.randomColor = "";
    addRect(props.tempRect);
}
