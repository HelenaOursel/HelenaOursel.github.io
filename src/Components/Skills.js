import React from 'react';
import '../Style/Skills.scss';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS/SASS/SCSS', icon: 'css3-alt' },
    { name: 'JavaScript/jQuery', icon: 'js' },
    { name: 'PHP', icon: 'php' },
    { name: 'SQL', icon: 'database' },
    { name: 'Vue.js', icon: 'vuejs' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Prestashop', icon: 'cart-shopping' },
    { name: 'Unity/C#/XR', icon: 'gamepad' },
    { name: 'Git/Github', icon: 'github' }
  ];

  const languageSkills = [
    { name: 'Français', level: 'Langue maternelle', icon: 'flag' },
    { name: 'Anglais', level: 'Niveau C1 (TOEIC: 980)', icon: 'flag-usa' }
  ];

  const getIconClass = (icon) => {
    switch (icon) {
      case 'database':
      case 'cart-shopping':
      case 'gamepad':
        return `fa-solid fa-${icon}`;
      case 'github':
        return `fa-brands fa-github`;
      default:
        return `fa-brands fa-${icon}`;
    }
  };

  return (
    <section className="skills">
      <h2>Compétences Techniques</h2>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={getIconClass(skill.icon)}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <h2>Langues</h2>
      <div className="language-skills">
        {languageSkills.map((language, index) => (
          <div key={index} className="language-item">
            <i className={`fa-solid fa-${language.icon}`}></i>
            <span>{language.name}</span>
            <span className="language-level">{language.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;