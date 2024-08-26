import React from 'react';
import '../Style/Experience.scss';

const Experience = () => {
  const experiences = [
    {
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-08-31'),
      title: 'Stage - Développeur Front-End',
      company: 'France-Cadenas',
      description: 'Développement du nouveau site web pour FRANCE-CADENAS (prestashop, html, css, js/jquery, smarty, php)'
    },
    {
      startDate: new Date('2022-09-01'),
      endDate: new Date('2023-01-31'),
      title: 'Stage - Développeur Front-End',
      company: 'Active Drone Security Solutions',
      description: "Développement d'interface type Web pour un logiciel de détection de drone. (html, css, jquery, php, sql)"
    },
    {
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-04-30'),
      title: 'Stage - Développeur Full-Stack',
      company: 'RecrutWeb',
      description: "Développement d'un site web de Recrutement en ligne. (html, css, jquery, php, sql)"
    },
    {
      startDate: new Date('2020-01-01'),
      endDate: new Date('2021-04-30'),
      title: 'Stage - Développeur Full-Stack',
      company: 'Gribouillenet',
      description: "Développement d'un site web e-commerce (html, css, jquery, php, sql)"
    }
  ];

  return (
    <section className="experience">
      <h2>Expérience Professionnelle</h2>
      <div className="experience-details">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="date">
              {`${exp.startDate.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })} - 
              ${exp.endDate.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}`}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;