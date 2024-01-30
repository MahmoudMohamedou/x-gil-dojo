import { props } from "../main";

export const handleMouseLeave = (e) => {
    console.log("MOUSE_LEAVE")
    props.isDrawing = false;
    props.randomColor = "";
};