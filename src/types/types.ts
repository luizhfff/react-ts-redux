export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  total: number;
  discount: number;
};
