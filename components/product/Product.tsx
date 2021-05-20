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
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addShopping(data.data));
  };

  //generate random image src

  const randomImage = () => {
    let randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    return `/cl${randomNumber}.jpg`;
  };

  const handleLoad = () => {};
  return (
    <div className={styles.card}>
      <Container style={{ padding: "0px" }}>
        <Link href={`/clothes/${encodeURIComponent(data.data.id)}`}>
          <div className={styles.cardDetails}>
            <Col xs={12} style={{ padding: "0px" }}>
              <div className={imageClass}>
                <Image
                  onLoad={() => {
                    setImageClass("styles.imageVisible");
                    setIsLoading(false);
                  }}
                  src={randomImage()}
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
        </Link>
      </Container>
    </div>
  );
};

export default Product;
