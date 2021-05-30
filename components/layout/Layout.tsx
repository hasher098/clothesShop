import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Layout.module.css";

const Layout = (props: any) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftPart}></div>
      <div className={styles.centerPart}>
        <Link href="/">
          <p>Clothes Shop</p>
        </Link>
      </div>
      <div className={styles.rightPart}>
        <Link href="/cart">
          <p>
            <AiOutlineShoppingCart
              className={styles.icon}
              style={{ height: "100%" }}
            ></AiOutlineShoppingCart>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
