import React, { useState, useEffect } from 'react';
import '../../Style/Neon.scss';

function Neon() {
    const [text, setText] = useState('Neon Text');
    const [flickeringIndices, setFlickeringIndices] = useState([]);

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newFlickeringIndices = [];
            for (let i = 0; i < text.length; i++) {
                if (Math.random() < 0.2) { // 20% chance for each letter to flicker
                    newFlickeringIndices.push(i);
                }
            }
            setFlickeringIndices(newFlickeringIndices);
        }, 2000); // Change flickering letters every 2 seconds

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className="neon-wrapper">
            <div>
                <h1 className="neon-text">
                    {text.split('').map((char, index) => (
                        <span key={index} className={flickeringIndices.includes(index) ? 'flicker' : ''}>
                            {char}
                        </span>
                    ))}
                </h1>        
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Enter your text"
                    className="neon-input"
                />
            </div>
        </div>
    );
}

export default Neon;