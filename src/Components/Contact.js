import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // Nouveau state pour le statut

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    emailjs.sendForm('service_sjdm5jr', 'template_xumzn5i', e.target, 'jOjrGiOcvPXOCC-Yb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitMessage('Message envoyé avec succès !');
        setSubmitStatus('success');
        setFormData({ from_name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setSubmitMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contactez moi !</h2>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
      {submitMessage && (
        <p className={`submit-message ${submitStatus}`}>{submitMessage}</p>
      )}
    </form>
  );
}

export default Contact;