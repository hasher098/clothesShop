import styles from "./Layout.module.css";
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
        <p>Clothes Shop</p>
      </div>
      <div className={styles.rightPart}>
        <AiOutlineSearch className={styles.icon}></AiOutlineSearch>
        <AiOutlineShoppingCart className={styles.icon}></AiOutlineShoppingCart>
        <AiOutlineUser className={styles.icon}></AiOutlineUser>
      </div>
    </div>
  );
};

export default Layout;
