import styles from "./CartSummary.module.css";

import Image from "next/image";
import { Container, Row, Col, Collapse, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { useEffect, useState } from "react";

const Product = (data) => {
  const [delievery, setDelievery] = useState("10");
  const [payment, setPayment] = useState("blik");
  return (
    <Container className={styles.container}>
      <Row>
        <Col className={styles.summary} xs={12}>
          <h6>Podsumowanie:</h6>
        </Col>
      </Row>
      <Row>
        <Col className={styles.delievery} xs={12}>
          Rodzaj dostawy:
          <Form>
            <div key={`radio`}>
              <Form.Check
                inline
                label="Kurier Przedpłata: 20 zł"
                name="group1"
                type={"radio"}
                id={`default-radio-1`}
                onClick={() => {
                  setDelievery("20");
                }}
              />
              <Form.Check
                inline
                label="Kurier Za pobraniem: 22 zł"
                name="group1"
                type={"radio"}
                id={`default-radio-2`}
                onClick={() => {
                  setDelievery("22");
                }}
              />
              <Form.Check
                inline
                name="group1"
                label="Paczkomat: 10zł"
                type={"radio"}
                id={`default-radio-3`}
                onClick={() => {
                  setDelievery("10");
                }}
              />
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className={styles.delievery} xs={12}>
          Forma płatności:
          <Form>
            <div key={`radio`}>
              <Form.Check
                inline
                label="Karta"
                name="group1"
                type={"radio"}
                id={`default-radio-4`}
                onClick={() => {
                  setPayment("karta");
                }}
              />
              <Form.Check
                inline
                label="Blik"
                name="group1"
                type={"radio"}
                id={`default-radio-5`}
                onClick={() => {
                  setPayment("blik");
                }}
              />
              <Form.Check
                inline
                name="group1"
                label="Za pobraniem"
                type={"radio"}
                id={`default-radio-6`}
                onClick={() => {
                  setPayment("pobranie");
                }}
              />
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={9}></Col>
        <Col xs={12} md={3} className={styles.totalPrice}>
          <h6>Zakupy razem :${data.price} </h6>
          <h6>Dostawa :${delievery} </h6>
          <h6>Płatność :{payment}</h6>
          <h6>Suma : ${Number(data.price) + Number(delievery)}</h6>
          <button>Zamów</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
