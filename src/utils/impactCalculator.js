export const calculateImpact = (amount, isMonthly) => {
  if (!amount) return 'Enter an amount to see your impact';
  
  const numAmount = parseInt(amount.toString().replace(/,/g, ''), 10);
  if (isNaN(numAmount)) return 'Enter an amount to see your impact';

  const freq = isMonthly ? ' every month' : '';

  if (numAmount < 500) {
    const people = Math.floor(numAmount / 20) || 5;
    return `Provide clean drinking water for ${people} people${freq}`;
  } else if (numAmount < 1000) {
    const meals = Math.floor(numAmount / 160) || 3;
    return `Feed ${meals} hungry children hot nutritious meals${freq}`;
  } else if (numAmount < 2500) {
    const weeks = Math.floor(numAmount / 1000) || 1;
    return `Feed a child for ${weeks} week${weeks > 1 ? 's' : ''}${freq}`;
  } else if (numAmount < 5000) {
    return `Provide an emergency food grocery kit for a family${freq}`;
  } else if (numAmount < 10000) {
    return `Deliver a complete monthly rashan package to a family${freq}`;
  } else if (numAmount < 25000) {
    const families = Math.floor(numAmount / 5000);
    return `Support ${families} families with monthly food sponsorships${freq}`;
  } else if (numAmount < 50000) {
    return `Install a complete water hand pump (Sadaqah Jariyah)${freq}`;
  } else {
    const years = Math.floor(numAmount / 50000);
    return `Fully sponsor a widow family for ${years} year${years > 1 ? 's' : ''}${freq}`;
  }
};
