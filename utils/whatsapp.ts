export const sendWhatsAppOrder = ( item: string, discount: string) => {
  const message = `Hello, I want to order *${item}* with ${discount}.`;
  const phone ='9269965604';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const sendWhatsAppOrdernavbar = () => {
  const message = `Hello, I want to order.`;
  const phone ='9269965604';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};