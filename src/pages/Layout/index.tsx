import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.scss"
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
        <div className={styles.menu}>
            <NavLink className={styles["menu__home"]} to="./home">Home</NavLink>
            <NavLink className={styles["menu__evolution"]}to="./evolution">Pokemon & Evolution</NavLink>
        </div>

        <div className="main-content">
                <Outlet />
        </div>

        <Footer/>

        </>
    )
}

export default Layout;