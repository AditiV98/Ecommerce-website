import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5500/api/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products :", products);
  return (
    // <>
    //   <br></br>
    //   <div className="ui grid container">
    //     <ProductComponent />{" "}
    //   </div>
    // </>
    <>
      <br></br>
      <Container>
        <center>
          <h1>ALL PRODUCTS</h1>
        </center>
        <hr></hr>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <br></br>
          <Grid container spacing={6}>
            <ProductComponent />
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
