import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { items } from '../data/items';
import { addToCart } from '../store/cart/cartSlice';

type Props = {};

const DisplayAvailableItems = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Grid container sx={{ mt: '2%' }}>
        {items &&
          items.map((item) => (
            <Grid key={item.name} container sx={{ mt: 2 }}>
              <Grid item xs={4} sm={4} md={4}>
                {item.name}
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                $ {item.price.toFixed(2)}
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => dispatch(addToCart({ name: item.name, price: item.price, quantity: 1 }))}>
                  Add
                </Button>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default DisplayAvailableItems;
