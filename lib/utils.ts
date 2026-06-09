export function generatePublicCode(length = 6) {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let value = '';

  for (let index = 0; index < length; index += 1) {
    value += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return value;
}

export function formatPhoneForWhatsapp(phone: string) {
  return phone.replace(/[^0-9]/g, '');
}
