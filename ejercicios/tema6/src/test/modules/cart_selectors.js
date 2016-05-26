import assert from 'assert';
import { cartState } from '../../modules/cart/selectors';

describe('Cart Selectors', () => {
  const mockState = {
    cart: { "1" : 2 },
    catalog: {
      data: [
      {
        id: 1,
        price: 10
      }]
    }
  };

  it('cartState should return an object with items and total', () => {
    let result = cartState(mockState);
    assert.equal(result.items.length, 1);
    assert.equal(result.items[0].price, 10);
    assert.equal(result.items[0].quantity, 2);
    assert.equal(result.total, (10*2).toFixed(2));
  })
});