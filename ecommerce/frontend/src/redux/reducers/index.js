import { combineReducers } from "redux";
import {
  cartreducer,
  productsReducer,
  selectedProductsReducer,
} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartItem: cartreducer,
});
export default reducers;
