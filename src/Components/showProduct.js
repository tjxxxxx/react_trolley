import React, { useState, useEffect } from "react";
import Products from "../mock/Products";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { store } from "../store/index";
import { getList, addCart, addOne } from "../store/action";
// import { INIT_LIST, ADD_TO_CART } from "../store/types";
const styleSheet = {
  text: {
    display: "flex"
  },
  card: {
    width: "18rem"
  }
};
function ShowProduct(props) {
  const [goods, setGoods] = useState([]);
  // const [inCart, setInCart] = useState(false);
  // console.log(product);
  useEffect(() => {
    console.log(store.getState());
    store.dispatch(getList(Products));
    setGoods(store.getState().products.productList);

    console.log(store.getState().products.productList);
    // store.subscribe(handleStoreChange);
  }, [goods]);
  function handleStoreChange() {
    //  更新state的状态
  }

  const list = goods.map((product, index) => (
    <div key={index} style={{ margin: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text style={{ display: "flex", justifyContent: "space-around" }}>
            Price:{product.price}
            <FontAwesomeIcon
              onClick={() => {
                handlerClick(index);
              }}
              icon={faShoppingCart}
            ></FontAwesomeIcon>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));
  function handlerClick(index) {
    // console.log(inCart);
    // if (inCart == false) {
    store.dispatch(addCart(index));
    // setInCart(true);
    // } else {
    // store.dispatch(addOne());
    // }

    console.log(index);

    console.log(store.getState());
  }

  return <div style={{ width: "auto", marginLeft: "auto", marginRight: "auto" }}>{list}</div>;
}
export default ShowProduct;
