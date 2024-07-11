import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import './TextSizeControls.css';

const TextSizeControls = ({ increaseTextSize, decreaseTextSize }) => {
    const [fontSize, setFontSize] = useState(16);

    const handleIncreaseTextSize = () => {
        setFontSize(prevSize => Math.min(prevSize + 2, 24));
    };

    const habdleDecreaseTextSize = () => {
        setFontSize(prevSize => Math.max(prevSize - 2, 12));
    };

    return (
        <div className="text-size-controls" style={{ fontSize: `${fontSize}px` }}>
            <ButtonGroup aria-label="Text size controls">
                <Button variant="secondary" onClick={handleIncreaseTextSize}>A+</Button>
                <Button variant="secondary" onClick={habdleDecreaseTextSize}>A-</Button>
            </ButtonGroup>
        </div>
    );
};

export default TextSizeControls;