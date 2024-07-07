import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import PropTypes from "prop-types";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

Sidebar.propTypes = {
  cities: PropTypes.array,
};

export default Sidebar;
