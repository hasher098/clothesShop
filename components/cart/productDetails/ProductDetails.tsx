import { useState, useEffect } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import styles from "./ProductDetails.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartContentSelector } from "../../../libs/selectors/cartSelector";
import { addShopping } from "../../../libs/actions/cartAction";
import Link from "next/link";
const ProductDetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const cartContent = useSelector(cartContentSelector);
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addShopping(props.data, quantity));
  };
  useEffect(() => {
    if (cartContent.find((x) => x.id == props.data.id)) {
      setInCart(true);
    }
  }, [cartContent]);
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
            <Col xs={6}>
              <h4>{props.data.price}</h4>
            </Col>
            <Col xs={6} className={styles.addCartCol}>
              {inCart && (
                <span className={styles.arleadyInCart}>
                  <Link href="/cart">Już w koszyku</Link>
                </span>
              )}
              {!inCart && (
                <span className={styles.addCartSpan}>
                  <div>
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
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className={styles.addToCartButton}
                  >
                    Dodaj do koszyka
                  </button>
                </span>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
