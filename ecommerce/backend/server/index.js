const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5500;

app.use(cors());

const ProductsRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");
const OrderRoute = require("./routes/orderRoute");
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/api/", ProductsRoute);
app.use("/api/", UserRoute);
app.use("/api/", OrderRoute);

app.listen(PORT, () => console.log("server connected"));
