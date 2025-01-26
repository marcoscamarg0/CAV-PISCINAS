interface FormData {
  name: string;
  phone: string;
  email: string;
}

export const sendWhatsAppMessage = async (data: FormData) => {
  const WHATSAPP_NUMBER = '5561984847979';

  const message = `Novo contato:\n\n` +
    `Nome: ${data.name}\n` +
    `Telefone: ${data.phone}\n` +
    `Email: ${data.email}`;

  const whatsappLink = `https://wa.me/${5561984847979}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
};