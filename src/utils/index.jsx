/* 
This function calculates total price of new order

@param {Array} products cartProduct: Array of Objets
@retuns {numer} Total price
*/
const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};

export { totalPrice };
