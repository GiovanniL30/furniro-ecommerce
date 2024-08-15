export const computeDiscount = (amount, discount) => {
  return (amount - amount / discount).toFixed(0)
}
