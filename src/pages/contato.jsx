import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Todos os campos são obrigatórios!');
      return;
    }

    console.log('Formulário enviado:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setFormSubmitted(true);
    setFormError('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contato</h2>  
      {formSubmitted && <p className="success-message">Obrigado por entrar em contato!</p>}
      
      <form onSubmit={handleSubmit} className="contact-form">
        {formError && <p className="error-message">{formError}</p>}
        
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
