import React, { useState } from 'react';
import '../Style/Presentation.scss';
import profileImage from '../Images/Profile.jpg';

const Presentation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="presentation">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-description">
        <h1>Héléna Oursel</h1>
        <p>
          Bonjour, je suis un développeur passionné avec une expertise en Front-End et JavaScript.
          J'aime créer des applications web modernes et intuitives qui résolvent des problèmes réels.
          Avec une solide formation en informatique et plusieurs années d'expérience dans l'industrie,
          je suis toujours à la recherche d'opportunités pour grandir professionnellement.
        </p>
        <p>
          En dehors du code, j'aime le cinéma, le dessin et les jeux vidéos.
          Je crois en l'apprentissage continu et je suis toujours ouvert à de nouvelles technologies et méthodologies.
        </p>
      </div>
    </div>
  );
};

export default Presentation;