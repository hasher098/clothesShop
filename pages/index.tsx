import Layout from "../components/layout/Layout";
import ListOfProducts from "../components/listOfProducts/ListOfProducts";
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
