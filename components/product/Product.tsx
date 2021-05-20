import styles from "./Product.module.css";
import ProductType from "../../types/ProductType";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addShopping } from "../../libs/actions/cartAction";
import Link from "next/link";

const Product = (data) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addShopping(data.data));
  };
  return (
    <div className={styles.card}>
      <Container>
        <Row>
          <Col xs={12}>
            {data.data.image && (
              <Image src={data.data.image} width={200} height={200}></Image>
            )}
          </Col>
        </Row>
        <div className={styles.productInfo}>
          <Row>
            <Col xs={12}>
              <div>{data.data.title}</div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>{data.data.price}$</div>
            </Col>
          </Row>
        </div>
        <div className={styles.productInfo}>
          <button onClick={addToCart} className={styles.addProductButton}>
            Add
          </button>
        </div>

        <Link href={`/clothes/${encodeURIComponent(data.data.id)}`}>
          <p>Jazda</p>
        </Link>
      </Container>
    </div>
  );
};

export default Product;
