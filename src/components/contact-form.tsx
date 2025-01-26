import React, { useState } from 'react';
import { sendWhatsAppMessage } from './whatsapp-service';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendWhatsAppMessage(formData);
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl sm:text-2xl mb-4">Junte-se à nossa lista!</h3>
      <p className="mb-6 text-sm sm:text-base">
        Vamos discutir juntos o pool dos seus sonhos.
      </p>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 sm:p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Número de telefone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-2 sm:p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 sm:p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Enviar agora
        </button>
      </div>
    </form>
  );
};

export default ContactForm;