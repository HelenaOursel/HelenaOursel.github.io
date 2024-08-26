import React, { useState, useEffect } from 'react';
import '../../Style/TapingCarousel.scss';

const TapingCarousel = () => {
  const words = ['Creative', 'Innovative', 'Passionate', 'Dedicated'];
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentWord === words[currentIndex]) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      const nextWord = isDeleting
        ? words[currentIndex].substring(0, currentWord.length - 1)
        : words[currentIndex].substring(0, currentWord.length + 1);

      setCurrentWord(nextWord);
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting]);

  return (
    <div className="taping-carousel">
        <h2>Typing Effect</h2>
      <h3>I am <span className="typed-text">{currentWord}</span><span className="cursor">‎ </span></h3>
    </div>
  );
};

export default TapingCarousel;
