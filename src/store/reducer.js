import { INIT_LIST, ADD_TO_CART, DELETE_CART, ADD_ONE, DELETE_ONE, IS_CHECKED } from "./types";
import { getList } from "./action";
import { Products } from "../mock/Products";

const defaultProductState = {
  productList: [],
  //   id='',
  cartList: [],
  countList: []
};

export const products = (state = defaultProductState, action) => {
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.productList = action.data;
    return newState;
  }
  if (action.type === ADD_TO_CART) {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.cartList.length > 0) {
      for (var i = 0; i < newState.cartList.length; i++) {
        if (JSON.stringify(newState.cartList).indexOf(JSON.stringify(newState.productList[action.id])) != -1) {
          if (JSON.stringify(newState.cartList[i]) == JSON.stringify(newState.productList[action.id])) {
            newState.countList[i] = {
              ...newState.countList[i],
              count: newState.countList[i].count + 1,
              total: ((newState.countList[i].count + 1) * newState.countList[i].price).toFixed(2),
              isChecked: false
            };
            return newState;
          }
        } else {
          newState.cartList.push(newState.productList[action.id]);
          newState.countList.push({
            ...newState.productList[action.id],
            count: 1,
            total: (newState.productList[action.id].price * 1).toFixed(2),
            isChecked: false
          });
          return newState;
        }
      }
    } else {
      newState.cartList.push(newState.productList[action.id]);
      newState.countList.push({
        ...newState.productList[action.id],
        count: 1,
        total: (newState.productList[action.id].price * 1).toFixed(2),
        isChecked: false
      });
      return newState;
    }
  }
  if (action.type === DELETE_CART) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.countList.splice(action.id, 1);
    newState.cartList.splice(action.id, 1);
    return newState;
  }
  if (action.type === ADD_ONE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.countList[action.id] = {
      ...newState.countList[action.id],
      count: newState.countList[action.id].count + 1,
      total: ((newState.countList[action.id].count + 1) * newState.countList[action.id].price).toFixed(2)
    };
    return newState;
  }
  if (action.type === DELETE_ONE) {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.countList[action.id].count > 1) {
      newState.countList[action.id] = {
        ...newState.countList[action.id],
        count: newState.countList[action.id].count - 1,
        total: ((newState.countList[action.id].count - 1) * newState.countList[action.id].price).toFixed(2)
      };
      return newState;
    } else {
      newState.countList.splice(action.id, 1);
      newState.cartList.splice(action.id, 1);
      return newState;
    }
  }
  if (action.type == IS_CHECKED) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.countList[action.id].isChecked = action.event;
    return newState;
  }

  return state;
};
