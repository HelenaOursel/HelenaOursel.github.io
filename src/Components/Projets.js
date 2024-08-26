import React from 'react';
import Penguin from './Projects/Penguin';
import Neon from './Projects/Neon';
import Buttons from './Projects/Buttons';
import TapingCarousel from './Projects/TapingCarousel'
import '../Style/Projets.scss';
// Importez d'autres projets selon vos besoins

const Projets = () => {
  return (
    <div className="Projets">
      <div className="projets-liste">
        <Penguin />
        <Neon />
        <Buttons />
        <TapingCarousel />
        {/* Ajoutez d'autres composants de projet ici */}
      </div>
    </div>
  );
};

export default Projets;