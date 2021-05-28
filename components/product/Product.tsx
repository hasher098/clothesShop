import styles from "./Product.module.css";
import ProductType from "../../types/ProductType";
import Image from "next/image";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addShopping } from "../../libs/actions/cartAction";
import Link from "next/link";
import { useEffect, useState } from "react";

const Product = (data) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageClass, setImageClass] = useState("styles.imageHidden");
  console.log(data);
  const handleLoad = () => {};
  return (
    <div className={styles.card}>
      <Link href={`/clothes/${encodeURIComponent(data.data.id)}`}>
        <Container style={{ padding: "0px" }}>
          <div className={styles.cardDetails}>
            <Col xs={12} style={{ padding: "0px" }}>
              <div className={imageClass}>
                <Image
                  onLoad={() => {
                    setImageClass("styles.imageVisible");
                    setIsLoading(false);
                  }}
                  src={data.data.image}
                  width={300}
                  height={300}
                  priority={true}
                  loading="eager"
                ></Image>
              </div>
            </Col>

            <Col className={styles.productInfo}>
              <div className={styles.title}>{data.data.title}</div>

              <div className={styles.price}>{data.data.price}</div>
            </Col>
          </div>
        </Container>
      </Link>
    </div>
  );
};

export default Product;
