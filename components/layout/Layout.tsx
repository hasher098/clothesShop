import styles from "./Layout.module.css";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Layout = (props: any) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftPart}>
        <AiOutlineMenu className={styles.icon}></AiOutlineMenu>
      </div>
      <div className={styles.centerPart}>
        <Link href="/clothes">
          <p>Clothes Shop</p>
        </Link>
      </div>
      <div className={styles.rightPart}>
        <Link href="/cart">
          <p>
            <AiOutlineSearch
              className={styles.icon}
              style={{ height: "100%" }}
            ></AiOutlineSearch>
          </p>
        </Link>
        <Link href="/cart">
          <p>
            <AiOutlineShoppingCart
              className={styles.icon}
              style={{ height: "100%" }}
            ></AiOutlineShoppingCart>
          </p>
        </Link>
        <Link href="/cart">
          <p>
            <AiOutlineUser
              className={styles.icon}
              style={{ height: "100%" }}
            ></AiOutlineUser>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
