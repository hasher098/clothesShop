import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Tab,
  Tabs,
  TabContainer,
  TabContent,
} from "react-bootstrap";
import styles from "./CartProduct.module.css";
import Image from "next/image";
import { cartContentSelector } from "../../../libs/selectors/cartSelector";
import { addShopping } from "../../../libs/actions/cartAction";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteItem } from "../../../libs/actions/cartAction";

const CartProduct = (props) => {
  const [quantity, setQuantity] = useState(props.data.quantity);
  const [totalPrice, setTotalPrice] = useState("");
  const dispatch = useDispatch();

  const handleChange = (details, quantity) => {
    dispatch(changeQuantity(details, quantity));
  };

  const handleDelete = (details) => {
    dispatch(deleteItem(details));
  };

  useEffect(() => {
    const changedString = props.data.product.price.replace("$", "");
    const totalPrice = Number(changedString) * quantity;
    setTotalPrice(Number(totalPrice.toFixed(2)).toString());
  }, [quantity]);

  return (
    <Container className={styles.container}>
      <Row>
        <Link href={`/clothes/${encodeURIComponent(props.data.product.id)}`}>
          <Col md={2} className={styles.productImage}>
            <Image
              width="100"
              height="100"
              src={props.data.product.image}
              priority={true}
              loading="eager"
            ></Image>
          </Col>
        </Link>
        <Col className={styles.description} md={5}>
          <Row>
            <Col xs={6}>
              <h4>{props.data.product.title}</h4>
              <h6>{props.data.product.category}</h6>
            </Col>
            <Col xs={6} className={styles.priceBox}>
              <h6>Cena: {props.data.product.price}</h6>
            </Col>
          </Row>
        </Col>
        <Col md={3} className={styles.priceWrapper}>
          <span className={styles.addCartSpan}>
            <div className={styles.quantityInput}>
              <button
                onClick={() => {
                  if (quantity > 1) {
                    handleChange(props.data, quantity - 1);
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
                    handleChange(props.data, quantity + 1);
                    setQuantity(quantity + 1);
                  }
                }}
                className={styles.plusButton}
              >
                +
              </button>
            </div>
            <button
              className={styles.deleteFromCartButton}
              onClick={() => {
                handleDelete(props.data);
              }}
            >
              Usuń z koszyka
            </button>
          </span>
        </Col>
        <Col md={2} className={styles.priceBox}>
          <h6>Suma:${totalPrice} </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default CartProduct;
