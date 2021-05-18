import styles from "./Cart.module.css";
import ProductType from "../../types/ProductType";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, changeQuantity } from "../../libs/actions/cartAction";
import { cartContentSelector } from "../../libs/selectors/cartSelector";
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const cartContent = useSelector(cartContentSelector);
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const defaultOption = options[0];
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartContent) {
      setCartProducts(cartContent);
    }
  }, [cartContent]);

  const handleChange = (details, quantity) => {
    dispatch(changeQuantity(details, quantity));
  };
  const handleDelete = (details) => {
    dispatch(deleteItem(details));
  };
  return (
    <div>
      Koszyk:
      {cartProducts &&
        cartProducts.map((item) => (
          <div key={item.product.id} className={styles.cartProduct}>
            Item: {item.product.title}
            <button
              onClick={() => {
                handleDelete(item);
              }}
            >
              Kasuj to
            </button>
            Quantity:
            <Dropdown
              options={options}
              onChange={(event) => {
                handleChange(item, Number(event.value));
              }}
              value={item.quantity.toString()}
              placeholder="Select an option"
            />
          </div>
        ))}
    </div>
  );
};

export default Cart;
