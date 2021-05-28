import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import ListOfProducts from "../components/listOfProducts/ListOfProducts";
import { server } from "../config/index";
import { products } from "../mock/products";
export default function Home({ jsonProducts }: any) {
  return (
    <>
      <Layout></Layout>
      <ListOfProducts products={jsonProducts}></ListOfProducts>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const jsonProducts = products;

  return {
    props: {
      jsonProducts,
    },
  };
};
