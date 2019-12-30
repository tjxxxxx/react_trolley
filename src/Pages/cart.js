import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { deleteCart, addOne, deleteOne, isChecked } from "../store/action";
import { store } from "../store/index";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";

function Cart(props) {
  const [cartList, setCarList] = useState(store.getState().products.countList);
  const [totalPrice, setTotalPrice] = useState((0 * 1).toFixed(2));
  // const [isCheck, setCheck] = useState(false);
  // const [singlePrice, setSinglePrice] = useState();
  // const [list,setList]=useState(store.getState().cartList);
  // const [count, setCount] = useState(store.getState().products.count);
  console.log(cartList);
  useEffect(() => {
    setCarList(store.getState().products.countList);
    handTotalPrice();
  }, [cartList]);
  const cart = cartList.map((item, index) => {
    return (
      <div key={index} style={{ display: "flex", justifyContent: "center" }}>
        <Row>
          <input
            type="checkbox"
            checked={item.isChecked}
            onChange={event => handleChecked(index, event)}
            style={{ marginTop: "6rem", marginRight: "4rem" }}
          ></input>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Product Name: {item.name}</Card.Title>
              <Card.Text>Product Price: {item.price}</Card.Text>
              <Row>
                <Col>
                  <FontAwesomeIcon onClick={() => handleAdd(index)} icon={faPlusSquare}></FontAwesomeIcon>
                </Col>
                <Col> count:{item.count}</Col>
                <Col>
                  <FontAwesomeIcon onClick={() => handleMinus(index)} icon={faMinusSquare}></FontAwesomeIcon>
                </Col>
              </Row>
              <Card.Text style={{ display: "flex", justifyContent: "flex-end" }}>
                Total: {item.total}
                {/* {() => {
              singleTotal(index);
            }} */}
              </Card.Text>

              <Button variant="primary" onClick={() => hanleDelete(index)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  });

  function handleChecked(index, event) {
    console.log(event.target.checked);
    console.log(index);
    store.dispatch(isChecked(index, event.target.checked));
    console.log(store.getState().products.countList);
    // setCheck(store.getState().products.countList[index].isChecked);
    setCarList(store.getState().products.countList);
  }
  function hanleDelete(index) {
    console.log(index);
    store.dispatch(deleteCart(index));
    setCarList(store.getState().products.countList);
  }
  function handleAdd(index) {
    console.log(index);
    store.dispatch(addOne(index));
    setCarList(store.getState().products.countList);
  }
  function handleMinus(index) {
    console.log(index);
    store.dispatch(deleteOne(index));
    setCarList(store.getState().products.countList);
  }
  function handTotalPrice() {
    var totalMount = 0.0;
    for (var i = 0; i < cartList.length; i++) {
      if (cartList[i].isChecked) {
        totalMount = totalMount + cartList[i].count * cartList[i].price;
      }
    }

    setTotalPrice(totalMount.toFixed(2));
    console.log(totalPrice);
  }

  return (
    <Container>
      {cartList.length == 0 ? "Nothing in cart" : ""}
      {cart}
      Total Price: {totalPrice}
    </Container>
  );
}
export default Cart;
