import React, { useState } from 'react';

function ColourPicker() {
    const [colour, setColour] = useState('#000000');

    function handleChange(event) {
        setColour(event.target.value);
    }

    return (
        <div className="colour-picker-container">
            <h1>Colour Picker</h1>
            <div className="colour-display" style={{ backgroundColor: colour }}>
                <p>select a colour</p>
            </div>
            <label>select in</label>
            <input type="color" value={colour} onChange={handleChange} />
        </div>
    );
}

export default ColourPicker;