import React, { useState } from "react";
import styles from "./Colorpicker.module.css";

function ColorPicker() {

    const [color, setColor] = useState("#43ae2d");

    function handleColorChange(event) {
        setColor(event.target.value);
    }


    return (
        <div className={styles.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>

            <label htmlFor="">Select a color</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}
export default ColorPicker; 