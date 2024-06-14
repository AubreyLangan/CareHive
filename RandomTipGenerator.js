import React, { useState } from "react";
import tipsData from "../Data/tipsData";
import './RandomTipGenerator.css';

const RandomTipGenerator = () => {
    const [tip, setTip] = useState('');

    const generateRandomTip = () => {
        const randomIndex = Math.floor(Math.random() * tipsData.length);
        setTip(tipsData[randomIndex]);
    };

    return (
        <div className="random-tip-generator">
            <h2>Parenting Tip</h2>
            {tip && <p className="tip">{tip}</p>}
            <button onClick={generateRandomTip}>Get a Random Tip</button>
        </div>
    );
};

export default RandomTipGenerator;