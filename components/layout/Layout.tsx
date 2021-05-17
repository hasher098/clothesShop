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
        <Link href="/">
          <p>Clothes Shop</p>
        </Link>
      </div>
      <div className={styles.rightPart}>
        <AiOutlineSearch className={styles.icon}></AiOutlineSearch>
        <Link href="/cart">
          <AiOutlineShoppingCart
            className={styles.icon}
          ></AiOutlineShoppingCart>
        </Link>

        <AiOutlineUser className={styles.icon}></AiOutlineUser>
      </div>
    </div>
  );
};

export default Layout;
