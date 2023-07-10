import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import styles from "./AP.module.css";
import BusinessTabMenu2 from "../../../../components/Business/TabMenu2/TabMenu2";
import BusinessCustomer from "../../BusinessCustomer/BusinessCustomer";

export default function AP() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="AP"
        destription="무선 네트워크를 업그레이드하고 더 빠른 속도와 강력한 보안을 경험하세요."
      />
      <BusinessTabMenu2>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/ap/cisco"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cisco
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/ap/fortinet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Fortinet
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/ap/zyxel"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Zyxel
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/ap/aruba"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Aruba
          </NavLink>
        </li>
      </BusinessTabMenu2>
      <Outlet />
      <BusinessCustomer />
    </Layout>
  );
}
