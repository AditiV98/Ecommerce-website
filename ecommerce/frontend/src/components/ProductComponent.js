import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { _id, title, image, price, category } = product;
    return (
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
      <Grid item xs={3} key={_id}>
        <Link to={`/product/${_id}`}>
          <Card sx={{ height: "380px" }}>
            <div>
              {/* <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ display: "flex" }}
               
              /> */}
              <img src={image} alt={title} width="250" height="250" />
            </div>
            <CardContent>
              <Typography gutterBottom component="div">
                {title}
              </Typography>

              <Typography variant="body2">$ {price}</Typography>
              <Typography variant="body2">{category}</Typography>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>
        </Link>
      </Grid>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
