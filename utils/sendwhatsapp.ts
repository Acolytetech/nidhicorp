interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function sendWhatsApp({ name, email, phone, message }: FormData) {
  const text = `*conatct form home page*%0A
  👤 Name: ${name}%0A
  📧 Email: ${email}%0A
  📞 Contact: ${phone}%0A
  💬 Message: ${message}`;

  // Replace with your WhatsApp number (with country code, no + sign)
  const phoneNumber = "9269965604";

  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
}
