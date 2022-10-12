import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CartItem } from '../types/types';
import { addToCart, removeFromCart } from '../store/cart/cartSlice';

type Props = {};

const DisplayCartItems = (props: Props) => {
  const items: CartItem[] = useSelector((state: RootState) => state.cart.items);
  const total: number = useSelector((state: RootState) => state.cart.total);
  const discount: number = useSelector((state: RootState) => state.cart.discount);
  const dispatch = useDispatch();

  const calcPrice = (qty: number, price: number) => {
    return (qty * price).toFixed(2);
  };
  return (
    <Box>
      <Grid container sx={{ mt: '5%' }}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4}>
            <Typography fontWeight={'bold'}>Item</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography fontWeight={'bold'}>Qty</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography fontWeight={'bold'}>Total</Typography>
          </Grid>
        </Grid>
        {items &&
          items.map((item) => (
            <Grid key={item.name} container sx={{ mt: 3 }}>
              <Grid item xs={4} sm={4} md={4}>
                <Typography>{item.name}</Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => dispatch(removeFromCart({ name: item.name, price: item.price, quantity: 1 }))}>
                  -
                </Button>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Typography>{item.quantity}</Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => dispatch(addToCart({ name: item.name, price: item.price, quantity: 1 }))}>
                  +
                </Button>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Typography>$ {calcPrice(item.quantity, item.price)}</Typography>
              </Grid>
            </Grid>
          ))}
        <Grid container sx={{ mt: '10%', textAlign: 'end' }}>
          <Grid item xs={6} sm={6} md={6}></Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography fontWeight={'bold'}>Subtotal = $ {total.toFixed(2)}</Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: '2%', textAlign: 'end' }}>
          <Grid item xs={6} sm={6} md={6}></Grid>
          <Grid item xs={6} sm={6} md={6}>
            {discount > 0 && (
              <Typography fontWeight={'bold'} color='blue'>
                Discount = $ {discount.toFixed(2)}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container sx={{ mt: '2%', textAlign: 'end' }}>
          <Grid item xs={6} sm={6} md={6}></Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography fontWeight={'bold'}>Total = $ {(total - discount).toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DisplayCartItems;
