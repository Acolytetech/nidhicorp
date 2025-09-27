export const sendWhatsAppOrder = (phone: string, item: string, discount: string) => {
  const message = `Hello, I want to order *${item}* with ${discount} discount.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
