import React from "react";
import { Container } from "react-bootstrap";
import ShowProduct from "../Components/showProduct";
import CarouselShow from "../Components/CarouselShow";
function Show(props) {
  return (
    <div>
      <CarouselShow></CarouselShow>
      <Container style={{ textAlign: "center" }}>
        <div>
          <h1 style={{ color: "#343a40" }}> All Products</h1>
          <hr></hr>
          <ShowProduct></ShowProduct>
        </div>
      </Container>
    </div>
  );
}
export default Show;
