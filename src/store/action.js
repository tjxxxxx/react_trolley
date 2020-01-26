import { INIT_LIST, ADD_TO_CART, DELETE_CART, ADD_ONE, DELETE_ONE, IS_CHECKED } from "./types";

export const getList = data => {
  return {
    type: INIT_LIST,
    data: data
  };
};
export const addCart = index => {
  return {
    type: ADD_TO_CART,
    id: index
  };
};
export const deleteCart = index => {
  return {
    type: DELETE_CART,
    id: index
  };
};
export const addOne = index => {
  return {
    type: ADD_ONE,
    id: index
  };
};
export const deleteOne = index => {
  return {
    type: DELETE_ONE,
    id: index
  };
};
export const isChecked = (index, event) => {
  return {
    type: IS_CHECKED,
    id: index,
    event: event
  };
};
// export const asyncTest=()=>{
//   return dispatch=>{
//     fetch('url').then(res=>res.json()).then(data=>dispatch(getList(data)))
//   }
// }
