import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Firewall.module.css";

export default function Firewall() {
  return (
    <Layout>
      <PageHeader
        title="Firewall"
        destription="고성능 스마트기기의 증가와 영상 통화 등 고급 애플리케이션 보급으로"
        destription_add="기업은 빠르고 품질좋은 무선랜과 이를 위한 인프라를 필요로 합니다."
      />
      <TabMenu />
      <Outlet />
    </Layout>
  );
}

function TabMenu() {
  return (
    <nav className={styles.tab_menu}>
      <ul className="inner">
        <li>
          <NavLink
            to="/business/firewall/fortinet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            FortiNet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
