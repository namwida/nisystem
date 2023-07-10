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
        destription="복잡한 하이브리드 환경에서 통합 관리 및 일관된 보안을 제공합니다."
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
