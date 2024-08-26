import React, { useRef, useState, useEffect } from 'react';
import '../../Style/Penguin.scss';

function Penguin() {
  const sceneRef = useRef(null);
  const penguinRef = useRef(null);
  const [isMovingRight, setIsMovingRight] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sceneRef.current) {
        addSnow();
      }
    }, 200); // Ajoute un flocon toutes les 200ms

    return () => clearInterval(interval); // Nettoyage à la démontage du composant
  }, []);

  const addSnow = () => {
    if (!sceneRef.current) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random().toString();
    snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 5}px`;
    
    sceneRef.current.appendChild(snowflake);

    // Remove snowflake after animation completes
    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  };
  const [speechBubblePosition, setSpeechBubblePosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (isSpeaking) {
      console.log("Speech bubble should be visible");
      const timer = setTimeout(() => {
        setIsSpeaking(false);
        console.log("Speech bubble should disappear");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSpeaking]);

  const handlePenguinClick = () => {
    console.log("Penguin clicked");
    if (!isSpeaking) {
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    const handleAnimationIteration = () => {
      setIsMovingRight(prev => !prev);
    };

    const penguinElement = penguinRef.current;
    if (penguinElement) {
      penguinElement.addEventListener('animationiteration', handleAnimationIteration);
    }

    return () => {
      if (penguinElement) {
        penguinElement.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, []);

  return (
    <div ref={sceneRef} className="scene">
      <h2>Penguin Waddle</h2>
      <div className="banquise"></div>
      <div className="iceberg"></div>
      <div className="iceberg"></div>
      <div 
        ref={penguinRef}
        className={`penguin ${isMovingRight ? 'moving-right' : 'moving-left'}`} 
        onClick={handlePenguinClick}
      >
        <div className="eye"></div>
        <div className="beak"></div>
        <div className="feet front"></div>
        <div className="feet back"></div>
        {isSpeaking && (
  <div className="speech-bubble">
    <span>Hi!</span>
  </div>
)}
      </div>
    </div>
  );
}

export default Penguin;