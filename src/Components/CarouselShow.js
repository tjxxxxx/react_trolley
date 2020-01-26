import React, { useState, useEffect } from "react";
import Products from "../mock/Products";
import { Carousel } from "react-bootstrap";
// import { store } from "../store/index";
import { getList } from "../store/action";
import { useSelector, useDispatch } from "react-redux";
function CarouselShow() {
  const [goods, setGoods] = useState([]);
  const products = useSelector(state => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(store.getState());
    console.log(products);
    // store.dispatch(getList(Products));
    dispatch(getList(Products));
    // setGoods(store.getState().products.productList);
    setGoods(products.productList);
    // console.log(store.getState().products.productList);
    console.log(products.productList);
  }, [goods]);
  const carouselList = goods.map((item, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        width="300px"
        height="400rem"
        src={require("../Pictures/product.jpg")}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{item.name}</h3>
        <p>Price:{item.price}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <Carousel> {carouselList};</Carousel>
    </>
  );
}

export default CarouselShow;
