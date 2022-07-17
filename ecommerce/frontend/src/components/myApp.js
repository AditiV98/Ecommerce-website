// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import SignUp from "./SignUp/SignUp";
import Signin from "./SignIn/Signin";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
function MyApp() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="contact-us" element={<Contact></Contact>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="signup" element={<SignUp></SignUp>}></Route>
          <Route path="login" element={<Signin></Signin>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
