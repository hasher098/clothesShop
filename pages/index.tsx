import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import ListOfProducts from "../components/listOfProducts/ListOfProducts";
import { server } from "../config/index";
export default function Home({ products }: any) {
  return (
    <>
      <Layout></Layout>
      <ListOfProducts products={products}></ListOfProducts>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api`);
  const products = await res.json();
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
    },
  };
};
