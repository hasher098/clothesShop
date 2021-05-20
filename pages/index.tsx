import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import ListOfProducts from "../components/listOfProducts/ListOfProducts";
import { server } from "../config/index";
import Link from "next/link";
export default function Home({ products }: any) {
  return (
    <>
      <Layout></Layout>
      <Link href="/clothes">
        <a>
          <button>Ubranka</button>
        </a>
      </Link>
    </>
  );
}
