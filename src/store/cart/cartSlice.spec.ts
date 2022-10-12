import cartReducer, { addToCart, removeFromCart } from './cartSlice';

describe('Cart reducer', () => {
  const initialState = {
    items: [],
    total: 0,
    discount: 0,
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
      total: 0,
      discount: 0,
    });
  });

  it('should handle adding 1 GRAPE to cart', () => {
    const actual = cartReducer(initialState, addToCart({ name: 'grapes', price: 5, quantity: 1 }));
    expect(actual.total).toEqual(5);
  });

  it('should handle adding 1 APPLE to cart', () => {
    const actual = cartReducer(initialState, addToCart({ name: 'apple', price: 3, quantity: 1 }));
    expect(actual.total).toEqual(3);
  });

  it('should handle adding 1 PEACH to cart', () => {
    const actual = cartReducer(initialState, addToCart({ name: 'peach', price: 7, quantity: 1 }));
    expect(actual.total).toEqual(7);
  });

  it('should handle removing 1 GRAPE from cart', () => {
    const prevState = {
      items: [{ name: 'grapes', price: 5, quantity: 1 }],
      total: 5,
      discount: 0,
    };
    const actual = cartReducer(prevState, removeFromCart({ name: 'grapes', price: 5, quantity: 1 }));
    expect(actual.total).toEqual(0);
  });

  it('should handle removing 1 APPLE from cart', () => {
    const prevState = {
      items: [{ name: 'apple', price: 3, quantity: 1 }],
      total: 3,
      discount: 0,
    };
    const actual = cartReducer(prevState, removeFromCart({ name: 'apple', price: 3, quantity: 1 }));
    expect(actual.total).toEqual(0);
  });

  it('should handle removing 1 PEACH from cart', () => {
    const prevState = {
      items: [{ name: 'peach', price: 7, quantity: 1 }],
      total: 7,
      discount: 0,
    };
    const actual = cartReducer(prevState, removeFromCart({ name: 'peach', price: 7, quantity: 1 }));
    expect(actual.total).toEqual(0);
  });
});
