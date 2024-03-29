import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import { cartContentSelector } from "../../libs/selectors/cartSelector";
import CartProduct from "./cartProduct/CartProduct";
import CartSummary from "./cartSummary/CartSummary";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
      let price = 0;
      cartContent.forEach((item) => {
        price += item.totalPrice;
      });

      setTotalPrice(Number(price.toFixed(2)));
      setCartProducts(completeCart);
    }
  };
  useEffect(() => {
    if (cartContent) {
      fetchCart(cartContent);
    }
  }, [cartContent]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div>
            {cartProducts &&
              cartProducts.map((item) => (
                <CartProduct key={item.product.id} data={item}></CartProduct>
              ))}
          </div>
        </Col>
        {totalPrice != 0 && (
          <Col xs={12}>
            <CartSummary price={totalPrice}></CartSummary>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
