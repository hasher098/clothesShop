import { useEffect, useState } from "react";
import styles from "./ListOfProducts.module.css";
import Product from "../product/Product";
import ProductType from "../../types/ProductType";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BiLastPage, BiFirstPage } from "react-icons/bi";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const options = ["9", "15", "30"];
const defaultOption = options[0];
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
    setCurrentPage(event.target.id);
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
    <div>
      <ul>
        <li onClick={() => setCurrentPage(1)}>
          <BiFirstPage></BiFirstPage>
        </li>
        <li onClick={() => setCurrentPage(currentPage - 1)}>
          <GrFormPrevious></GrFormPrevious>
        </li>
        {pageNumbers.map((item) => (
          <li key={item} id={item.toString()} onClick={handleNumberClick}>
            {item}
          </li>
        ))}
        <li onClick={() => setCurrentPage(currentPage + 1)}>
          <GrFormNext></GrFormNext>
        </li>
        <li onClick={() => setCurrentPage(pageNumbers[pageNumbers.length - 1])}>
          <BiLastPage></BiLastPage>
        </li>
      </ul>
      <Dropdown
        options={options}
        onChange={(event) => {
          setItemPerPage(Number(event.value));
        }}
        value={defaultOption}
        placeholder="Select an option"
      />
      ;
      {currentItems &&
        currentItems.map((item) => {
          return <Product key={item.id} data={item}></Product>;
        })}
    </div>
  );
};

export default ListOfProducts;
