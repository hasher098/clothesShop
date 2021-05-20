import { useRouter } from "next/router";
import Link from "next/link";
import { products } from "../../mock/products";
const ProductDetail = ({ res }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(res);
  return (
    <Link href="/clothes">
      <div>
        Id:{res.id}
        Title:{res.title}
        Price:{res.price}
      </div>
    </Link>
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
