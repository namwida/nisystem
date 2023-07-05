import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import styles from "./Switch.module.css";
import BusinessTabMenu from "../../../../components/Business/TapMenu.module.css/TapMenu";
import BusinessTabMenu2 from "../../../../components/Business/TabMenu2/TabMenu2";
import BusinessCustomer from "../../BusinessCustomer/BusinessCustomer";

export default function Switch() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="Switch"
        destription="진화하는 환경과 새로운 수요에 맞추기 위해서는 네트워크의 변화가 필요합니다."
        destription_add="스위치도 마찬가지입니다."
      />
      <BusinessTabMenu2>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/switch/cisco"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cisco
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/switch/extreme"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Extreme
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/switch/fortinet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Fortinet
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/switch/zyxel"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Zyxel
          </NavLink>
        </li>
      </BusinessTabMenu2>
      <Outlet />
      <BusinessCustomer />
    </Layout>
  );
}
