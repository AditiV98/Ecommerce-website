import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartComponent from "./CartComponent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
// import { addToCart } from "../redux/actions/productsActions";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [totItem, setTotItem] = useState(0);
  console.log(price);
  // const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartItem.carts);
  console.log(getData);
  const totalI = () => {
    let totItem = 0;
    getData.map((e) => {
      totItem = e.qnty + totItem;
    });
    setTotItem(totItem);
  };
  useEffect(() => {
    totalI();
  }, [totalI]);
  const total = () => {
    let price = 0;
    getData.map((e, k) => {
      price = e.price * e.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <br></br>
      <Container>
        <br></br>

        <Box sx={{ flexGrow: 1 }}>
          <br></br>
          <Grid container spacing={6}>
            <Grid item xs={8}>
              <CartComponent />
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <h1>Cart Summary</h1>
                  <div>
                    <span>
                      <b>TOTAL ITEMS: </b>
                    </span>
                    <Button variant="outlined">{totItem} items</Button>
                  </div>
                  <br></br>
                  <div>
                    <span>
                      <b>TOTAL PRICE: </b>
                    </span>
                    <Button variant="outlined"> $ {price}</Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
