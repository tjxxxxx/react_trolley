import React, { useState, useEffect } from "react";
import Products from "../mock/Products";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { store } from "../store/index";
import { getList, addCart } from "../store/action";
import { useSelector, useDispatch } from "react-redux";
// import { INIT_LIST, ADD_TO_CART } from "../store/types";
// const styleSheet = {
//   text: {
//     display: "flex"
//   },
//   card: {
//     width: "18rem"
//   }
// };
function ShowProduct(props) {
  const [goods, setGoods] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    console.log(products);
    // store.dispatch(getList(Products));
    dispatch(getList(Products));
    // store.dispatch(asyncTest);
    // setGoods(store.getState().products.productList);
    setGoods(products.productList);
    console.log(products.productList);
  }, [goods]);

  const list = goods.map((product, index) => (
    <div key={index} style={{ margin: "20px" }}>
      <Col xs={12} md={4} lg={4}></Col>
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
    // store.dispatch(addCart(index));
    dispatch(addCart(index));
    console.log(index);
    // console.log(store.getState());
    console.log(products);
  }

  return (
    <div style={{ width: "auto", marginLeft: "auto", marginRight: "auto" }}>
      <Row>{list}</Row>
    </div>
  );
}
export default ShowProduct;
