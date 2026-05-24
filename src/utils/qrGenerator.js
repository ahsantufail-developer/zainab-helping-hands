export const generateQRValue = (method, amount, cause) => {
  const numAmount = amount.toString().replace(/,/g, '');
  const ref = `ZHH${Date.now().toString().slice(-6)}`;
  
  if (method === 'easypaisa') {
    return `easypaisa://pay?account=03106496614&amount=${numAmount}&description=Zainab-Helping-Hands-${cause.replace(/\s+/g, '-')}&ref=${ref}`;
  }
  
  return '';
};

