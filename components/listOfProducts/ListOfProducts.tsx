import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Product from "../product/Product";
import styles from "./ListOfProducts.module.css";
const options = ["12", "16", "32", "48"];
const defaultOption = options[1];
const ListOfProducts = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(Number(options[0]));
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  // Logic for displaying current todos
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.products.slice(indexOfFirstItem, indexOfLastItem);

  //Logic for handling current page
  const handleNumberClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  //Logic for page numbers
  useEffect(() => {
    const pageNumbersArr: number[] = [];
    for (let i = 1; i <= Math.ceil(props.products.length / itemsPerPage); i++) {
      pageNumbersArr.push(i);
    }
    setCurrentPage(1);
    setPageNumbers(pageNumbersArr);
  }, [props.products, itemsPerPage]);

  return (
    <div className={styles.container}>
      <Container fluid>
        <Row>
          {currentItems &&
            currentItems.map((item) => {
              return (
                <Col key={item.id} xs={12} sm={6} md={3}>
                  <Product data={item}></Product>
                </Col>
              );
            })}
        </Row>
      </Container>
      <div className={styles.optionBar}>
        <ul className={styles.unorderedList}>
          <li
            className={styles.paginationItem}
            onClick={() => setCurrentPage(1)}
          >
            <BiFirstPage></BiFirstPage>
          </li>
          <li
            className={styles.paginationItem}
            onClick={() => {
              currentPage > 1 && setCurrentPage(currentPage - 1);
            }}
          >
            <GrFormPrevious></GrFormPrevious>
          </li>
          {pageNumbers.map((item) => (
            <li
              className={
                currentPage == item ? styles.chosenPage : styles.paginationItem
              }
              key={item}
              id={item.toString()}
              onClick={handleNumberClick}
            >
              {item}
            </li>
          ))}
          <li
            className={styles.paginationItem}
            onClick={() => {
              currentPage < pageNumbers[pageNumbers.length - 1] &&
                setCurrentPage(currentPage + 1);
            }}
          >
            <GrFormNext></GrFormNext>
          </li>
          <li
            className={styles.paginationItem}
            onClick={() => setCurrentPage(pageNumbers[pageNumbers.length - 1])}
          >
            <BiLastPage></BiLastPage>
          </li>
        </ul>
        Pokaż na stronie:
        <Dropdown
          options={options}
          onChange={(event) => {
            setItemPerPage(Number(event.value));
          }}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
};

export default ListOfProducts;
