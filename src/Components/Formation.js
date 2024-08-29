import React from 'react';
import '../Style/Formation.scss';

const Formation = () => {
  const formations = [
    {
      period: '2024',
      school: 'CESI - Ecole d\'ingénieur',
      degree: 'Diplôme d\'Ingénieur Informatique',
      details: [
        {
          year: '2024',
          description: 'CESI - Option RA/RV',
          project: 'Développement d\'un jeu vidéo multijoueurs sur Unity en Réalité Virtuelle et Réalité Augmenté'
        }
      ]
    },
    {
      period: '2019',
      school: 'Lycée Camille-Saint-Saëns',
      degree: 'BAC Scientifique - Assez Bien',
      details: [
        {
          description: 'Option ISN (Informatique et Science du Numérique)'
        }
      ]
    }
  ];

  return (
    <section className="formation">
      <h2>Formation</h2>
      <div className="formation-timeline">
        {formations.map((formation, index) => (
          <div key={index} className="formation-item">
            <div className="formation-period">{formation.period}</div>
            <div className="formation-content">
              <h3>{formation.school}</h3>
              <h4>{formation.degree}</h4>
              {formation.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="formation-detail">
                  {detail.year && <span className="formation-year">{detail.year}: </span>}
                  <span>{detail.description}</span>
                  {detail.project && <p className="formation-project">{detail.project}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{clear: 'both'}}></div> {/* Clearfix */}
      </div>
    </section>
  );
};

export default Formation;