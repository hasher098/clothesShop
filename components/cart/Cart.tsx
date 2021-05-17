import styles from "./Product.module.css";
import ProductType from "../../types/ProductType";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../libs/actions/cartAction";
import { cartContentSelector } from "../../libs/selectors/cartSelector";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const cartContent = useSelector(cartContentSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartContent) {
      setCartProducts(cartContent);
    }
  }, [cartContent]);

  const handleDelete = (details) => {
    dispatch(deleteItem(details));
  };
  return (
    <div>
      {cartProducts &&
        cartProducts.map((item) => (
          <div key={item.product.id}>
            Item: {item.product.title}
            Quantity: {item.quantity}
            <button
              onClick={() => {
                handleDelete(item);
              }}
            >
              Kasuj to
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
