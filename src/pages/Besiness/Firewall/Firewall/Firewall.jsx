import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import styles from "./Firewall.module.css";
import BusinessTabMenu2 from "../../../../components/Business/TabMenu2/TabMenu2";
import BusinessCustomer from "../../BusinessCustomer/BusinessCustomer";

export default function Firewall() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="Firewall"
        destription="원격 사무실, 지사, 캠퍼스, 데이터 센터 및 클라우드 등 모든 위치에 확장할 수 있는 완벽한 컨버전스를 제공합니다."
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
      <BusinessCustomer />
    </Layout>
  );
}
