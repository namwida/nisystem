import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import styles from "./AP.module.css";
import BusinessTabMenu from "../../../../components/Business/TapMenu.module.css/TapMenu";

export default function AP() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="AP"
        destription="고성능 스마트기기의 증가와 영상 통화 등 고급 애플리케이션 보급으로"
        destription_add="기업은 빠르고 품질좋은 무선랜과 이를 위한 인프라를 필요로 합니다."
      />
      <BusinessTabMenu>
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
      </BusinessTabMenu>
      <Outlet />
    </Layout>
  );
}
