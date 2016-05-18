export const SET_ROUTE = 'SET_ROUTE';
function setRoute(route){
  return {
    type: SET_ROUTE,
    route
  }
}

export function goToCart(){
  return setRoute('cart');
}

export function goToCatalog(){
  return setRoute('catalog');
}

export function goToCheckout(){
  return setRoute('checkout');
}

export function goToThankYou(){
  return setRoute('thankyou');
}