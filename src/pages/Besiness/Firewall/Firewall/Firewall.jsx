import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import styles from "./Firewall.module.css";
import BusinessTabMenu from "../../../../components/Business/TapMenu.module.css/TapMenu";
import BusinessTabMenu2 from "../../../../components/Business/TabMenu2/TabMenu2";

export default function Firewall() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="Firewall"
        destription="고성능 스마트기기의 증가와 영상 통화 등 고급 애플리케이션 보급으로"
        destription_add="기업은 빠르고 품질좋은 무선랜과 이를 위한 인프라를 필요로 합니다."
      />
      <BusinessTabMenu2>
        <li className={styles.topmenu_list}>
          <NavLink
            to="/business/firewall/fortinet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            FortiNet
          </NavLink>
        </li>
      </BusinessTabMenu2>
      <Outlet />
    </Layout>
  );
}
