import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  removeFromCart,
  addToCart,
  removeOne,
} from "../redux/actions/productsActions";
const CartComponent = () => {
  const items = useSelector((state) => state.cartItem.carts);
  const dispatch = useDispatch();
  const remove = (e) => {
    // console.log(e);
    dispatch(removeFromCart(e));
  };
  const rmvOne = (e) => {
    dispatch(removeOne(e));
  };
  const send = (e) => {
    // console.log(e);
    dispatch(addToCart(e));
  };
  const renderList = items.map((item) => {
    const { id, title, image, price, category, qnty } = item;
    return (
      <>
        <Grid container spacing={2} style={{ border: "1px solid black" }}>
          <Grid item xs={2}>
            <img src={image} alt={title} width="100" height="120" />
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">$ {price}</Typography>
            <Typography variant="body2">{category}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => remove(item)}
                >
                  Remove
                </Button>
                <br></br>
                <br></br>
                <Button
                  size="small"
                  variant="contained"
                  onClick={
                    item.qnty <= 1 ? () => remove(item) : () => rmvOne(item)
                  }
                >
                  -
                </Button>{" "}
                {qnty}{" "}
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => send(item)}
                >
                  +
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={6} md={8}></Grid> */}
        </Grid>
        <br></br>
      </>
      // <div className="four wide column" key={id}>
      //   <Link to={`/product/${id}`}>
      //     <div className="ui link cards">
      //       <div className="card">
      //         <div className="image">
      //           <img src={image} alt={title} />
      //         </div>
      //         <div className="content">
      //           <div className="header">{title}</div>
      //           <div className="meta price">$ {price}</div>
      //           <div className="meta">{category}</div>
      //         </div>
      //       </div>
      //     </div>
      //   </Link>
      // </div>
      // <Grid item xs={3} key={id}>
      //   {/* <Link to={`/product/${id}`}> */}
      //   <Card sx={{ height: "400px" }}>
      //     <div>
      //       <CardMedia
      //         component="img"
      //         image={image}
      //         alt={title}
      //         sx={{ display: "flex" }}
      //         height="210px"
      //       />
      //     </div>
      //     <CardContent>
      //       <Typography gutterBottom component="div">
      //         {title}
      //       </Typography>

      //       <Typography variant="body2">$ {price}</Typography>
      //       <Typography variant="body2">{category}</Typography>
      //     </CardContent>
      //     <CardActions>
      //       <Button size="small" onClick={() => remove(item)}>
      //         Remove
      //       </Button>
      //       <br></br>
      //       <br></br>
      //     </CardActions>
      //     <Button
      //       size="small"
      //       variant="contained"
      //       onClick={item.qnty <= 1 ? () => remove(item) : () => rmvOne(item)}
      //     >
      //       -
      //     </Button>{" "}
      //     {qnty}{" "}
      //     <Button size="small" variant="contained" onClick={() => send(item)}>
      //       +
      //     </Button>
      //   </Card>
      //   {/* </Link> */}
      // </Grid>
    );
  });
  return <>{renderList}</>;
};

export default CartComponent;
