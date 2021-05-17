import styles from "./Product.module.css";
import ProductType from "../../types/ProductType";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const Product = (data) => {
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
        <Row>
          <Col xs={12}>
            <div>{data.data.title}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {" "}
            <div>{data.data.price}$</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
