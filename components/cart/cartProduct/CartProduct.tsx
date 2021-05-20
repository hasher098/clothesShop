import { useState, useEffect } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import styles from "./CartProduct.module.css";
import Image from "next/image";
const CartProduct = (props) => {
  console.log(props);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Image
            width="300"
            height="300"
            src={props.data.image}
            priority={true}
            loading="eager"
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default CartProduct;
