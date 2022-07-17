import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const itemIndex = state.carts.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    // return {
    //   ...state,
    //   carts: [...state.carts, payload],
    // };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload.id),
      };

    case ActionTypes.REMOVE_ONE:
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === payload.id
      );

      if (state.carts[itemIndex_dec].qnty >= 1) {
        const dltItems = (state.carts[itemIndex_dec].qnty -= 1);
        console.log([...state.carts, dltItems]);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_dec].qnty === 1) {
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== payload.id),
        };
      }
    default:
      return state;
  }
};
