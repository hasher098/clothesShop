import { useState, useEffect } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import styles from "./CartProduct.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addShopping } from "../../../libs/actions/cartAction";
const CartProduct = (props) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addShopping(props.data, quantity));
  };
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={12} sm={6} className={styles.imageBox}>
          <Image
            width="300"
            height="300"
            src={props.data.image}
            priority={true}
            loading="eager"
          ></Image>
        </Col>
        <Col xs={12} sm={6} className={styles.description}>
          <Row className={styles.details}>
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            {/* {props.data.category} */}
          </Row>
          <Row className={styles.price}>
            <Col xs={12} md={6}>
              <h4>{props.data.price}</h4>
            </Col>
            <Col xs={12} md={6} className={styles.addCartCol}>
              <span className={styles.addCartSpan}>
                <Col xs={12}>
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className={styles.minusButton}
                  >
                    -
                  </button>
                  <input
                    className={styles.valueInput}
                    type="text"
                    value={quantity}
                    onChange={(event) => {
                      setQuantity(Number(event.target.value));
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      if (quantity < 9) {
                        setQuantity(quantity + 1);
                      }
                    }}
                    className={styles.plusButton}
                  >
                    +
                  </button>
                </Col>
                <Col xs={12}>
                  <button
                    onClick={handleAddToCart}
                    className={styles.addToCartButton}
                  >
                    Dodaj do koszyka
                  </button>
                </Col>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartProduct;
