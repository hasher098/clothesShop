import styles from "./CartSummary.module.css";

import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Collapse,
  Form,
  Button,
  Modal,
  Toast,
} from "react-bootstrap";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { useEffect, useState } from "react";

const Product = (data) => {
  const [delievery, setDelievery] = useState("");
  const [payment, setPayment] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setModalShow(false);
      setShow(true);
    }

    setValidated(true);
  };
  return (
    <>
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
                  label="Kurier Przedpłata: 20 $"
                  name="group1"
                  type={"radio"}
                  id={`default-radio-1`}
                  onClick={() => {
                    setDelievery("20");
                  }}
                />
                <Form.Check
                  inline
                  label="Kurier Za pobraniem: 22 $"
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
                  label="Paczkomat: 10$"
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
            <Button onClick={() => setModalShow(true)} variant="secondary">
              Podsumowanie
            </Button>
          </Col>
        </Row>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Podsumowanie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>Imie</Form.Label>
                <Form.Control
                  required
                  type="string"
                  placeholder="Wpisz imie"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Podaj imie
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  required
                  type="string"
                  placeholder="Wpisz nazwisko"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Podaj nazwisko
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Wpisz email"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Podaj poprawny e-mail
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="string"
                  placeholder="Miasto"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Podaj miasto
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formAdress">
                <Form.Label>Adres</Form.Label>
                <Form.Control
                  required
                  type="string"
                  placeholder="Wpisz Adres"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Podaj adres
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                onClick={() => {
                  setModalShow(false);
                }}
              >
                Cofnij
              </Button>
              <Button type="submit">Złóż Zamówienie</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
      <Toast
        className={styles.toastInfo}
        onClose={() => setShow(false)}
        show={show}
        delay={5000}
        autohide
      >
        <Toast.Body>Wysłano zamówienie!</Toast.Body>
      </Toast>
    </>
  );
};

export default Product;
