import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import styles from "./Software.module.css";
import BusinessTabMenu from "../../../../components/Business/TapMenu.module.css/TapMenu";
import BusinessTabMenu2 from "../../../../components/Business/TabMenu2/TabMenu2";

export default function Software() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="EST Security"
        destription="다양한 보안 위협에 확실한 솔루션을 제시합니다."
      />
      <BusinessTabMenu2>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/est/asm"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            ASM
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/est/secure"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            시큐어 디스크
          </NavLink>
        </li>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/est/internet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            인터넷 디스크
          </NavLink>
        </li>
      </BusinessTabMenu2>
      <Outlet />
    </Layout>
  );
}
