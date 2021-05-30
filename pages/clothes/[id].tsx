import Link from "next/link";
import { useRouter } from "next/router";
import ProductDetails from "../../components/cart/productDetails/ProductDetails";
import Layout from "../../components/layout/Layout";
import { products } from "../../mock/products";
const ProductDetail = ({ res }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout></Layout>
      <Link href="/">
        <ProductDetails data={res}></ProductDetails>
      </Link>
    </>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  const res = products;

  const paths = res.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = products[params.id - 1];
  return { props: { res } };
}
