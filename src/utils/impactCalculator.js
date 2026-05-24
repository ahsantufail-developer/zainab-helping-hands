export const calculateImpact = (amount, isMonthly) => {
  if (!amount) return 'Enter an amount to see your impact';
  
  const numAmount = parseInt(amount.replace(/,/g, ''), 10);
  if (isNaN(numAmount)) return 'Enter an amount to see your impact';

  const freq = isMonthly ? ' every month' : '';

  if (numAmount < 1500) {
    const days = Math.floor(numAmount / 150) || 1;
    return `Feed a child nutritious meals for ${days} days${freq}`;
  } else if (numAmount < 5000) {
    const weeks = Math.floor(numAmount / 1500);
    return `Provide ${weeks} week${weeks > 1 ? 's' : ''} of essential groceries${freq}`;
  } else if (numAmount < 10000) {
    return `Deliver a full monthly rashan package to a verified family${freq}`;
  } else {
    const packages = Math.floor(numAmount / 5000);
    return `Support ${packages} complete family packages${freq}`;
  }
};
