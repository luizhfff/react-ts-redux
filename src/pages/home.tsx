import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DisplayAvailableItems from '../components/DisplayAvailableItems';
import DisplayCartItems from '../components/DisplayCartItems';
import { emptyCart } from '../store/cart/cartSlice';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ height: '100vh', width: '100vw', overflow: 'scroll' }}>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={10} md={10} sx={{ my: '2vh' }}></Grid>
        <Grid item xs={2} sm={2} md={2} sx={{ my: '2vh' }}>
          <Link to={'/'}>
            <Button variant='contained' onClick={() => dispatch(emptyCart())}>
              Empty Cart
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: '2%', my: '2%' }}>
        <Grid item xs={8} sm={8} md={8}>
          <Typography fontWeight={'bold'}>Available Items:</Typography>
          <DisplayAvailableItems />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Typography fontWeight={'bold'}>Cart:</Typography>
          <DisplayCartItems />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
