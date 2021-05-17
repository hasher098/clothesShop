import styles from "./Product.module.css";
import ProductType from "../../types/ProductType";
import Image from "next/image";

const Product = (data) => {
  return (
    <div>
      <div>{data.data.title}</div>
      {data.data.image && (
        <Image src={data.data.image} width={200} height={200}></Image>
      )}
      <div>{data.data.price}</div>
    </div>
  );
};

export default Product;
