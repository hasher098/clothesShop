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

const Cart = ({ data }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const cartContent = useSelector(cartContentSelector);
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const defaultOption = options[0];
  const dispatch = useDispatch();

  const fetchCart = async (iDs) => {
    const res = await fetch(`/api/cart`);
    const cartItems = await res.json();

    if (cartItems) {
      let completeCart = [];
      iDs.map((i1) => {
        cartItems.map((c1) => {
          if (i1.id === c1.id) {
            completeCart.push({ product: c1, quantity: i1.quantity });
          }
        });
      });
      setCartProducts(completeCart);
      console.log(completeCart);
    }
  };
  useEffect(() => {
    if (cartContent) {
      fetchCart(cartContent);
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
            <Container>
              <Row>
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
              </Row>
            </Container>
          </div>
        ))}
    </div>
  );
};

export default Cart;
