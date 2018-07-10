const formatPrice = (price, currency) => {
  if (price !== 0 && (!price || !currency)) return;
  let adjustedPrice = price;
  if (currency === '€') adjustedPrice = price * 0.85;
  if (currency === '£') adjustedPrice = price * 0.75;
  return currency + adjustedPrice.toFixed(2);
};

export default {
  formatPrice
}
