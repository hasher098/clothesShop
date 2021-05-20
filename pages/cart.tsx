import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import ListOfProducts from "../components/listOfProducts/ListOfProducts";
import Cart from "../components/cart/Cart";
import { products } from "../mock/products";
export default function Home({ products }: any) {
  return (
    <>
      <Layout></Layout>
      <Cart data={products}></Cart>
    </>
  );
}

export async function getStaticProps() {
  return { props: { products } };
}