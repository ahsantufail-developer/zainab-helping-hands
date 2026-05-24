export const generateQRValue = (method, amount, cause) => {
  const numAmount = amount.toString().replace(/,/g, '');
  const ref = `ZHH${Date.now().toString().slice(-6)}`;
  
  if (method === 'jazzcash') {
    return `jazzcash://pay?account=03001234567&amount=${numAmount}&description=Zainab-Helping-Hands-${cause.replace(/\s+/g, '-')}&ref=${ref}`;
  }
  
  if (method === 'easypaisa') {
    return `easypaisa://pay?account=03001234567&amount=${numAmount}&description=Zainab-Helping-Hands-${cause.replace(/\s+/g, '-')}&ref=${ref}`;
  }
  
  return '';
};
