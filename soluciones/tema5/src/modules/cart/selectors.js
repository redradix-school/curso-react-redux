import { createSelector } from 'reselect';

// extraer el carrito del estado
const cartItems = state => state.cart;
// extraer el catálogo del estado
// En una app grande este selector estaría en el módulo catálogo
const catalogItems = state => state.catalog.data;

// Combina el estado del carrito y del catálogo para
// generar un Array de { ...product, quantity }
const cartProducts = createSelector(
  cartItems,
  catalogItems,
  function mapItems(cart, catalog){
    return Object.keys(cart).map(productId => {
      const quantity = cart[productId],
            product = catalog.find(p => p.id.toString() === productId);
      return {
        ...product,
        ...{ quantity }
      }
    });
  }
);

// Reduce sobre los productos del carrito para
// calcular el total del carrito
const cartTotal = createSelector(
  cartProducts,
  function calculateTotal(products){
    return products.reduce((acc, item) => {
      return acc + (item.quantity * item.price);
    }, 0).toFixed(2);
  }
);

// Selector para el estado del carrito completo
// Devuelve en forma de props los productos del carrito
// y el total
export const cartState = createSelector(
  cartProducts,
  cartTotal,
  (items, total) => {
    return {
      items,
      total
    }
  }
)