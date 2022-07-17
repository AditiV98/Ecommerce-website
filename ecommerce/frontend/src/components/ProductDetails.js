import React, { useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productsActions";
import { Button } from "@mui/material";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { _id, image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (_id) => {
    const response = await axios
      .get(`http://localhost:5500/api/product/new/${_id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  const send = (e) => {
    // console.log(e);
    dispatch(addToCart(e));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);

    // return () => {
    //   dispatch(removeSelectedProduct());
    // };
  }, [productId]);
  return (
    <>
      <br></br>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img
                    className="ui fluid "
                    src={image}
                    width="300"
                    height="400"
                  />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  {/* <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div> */}
                  {/* <div className="visible content">Add to Cart</div> */}
                  <Button variant="contained" onClick={() => send(product)}>
                    Add to cart
                  </Button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
