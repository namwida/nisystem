import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="NI System 로고"
          />
        </Link>
        <div className={styles.menu}>
          <div className={styles.list_1dep}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              회사소개
            </NavLink>
            <div className={styles.list_2dep}>
              <Link to="/about/company">엔아이시스템 소개</Link>
              <Link to="/about/message">인사말</Link>
              <Link to="/about/history">연혁</Link>
              <Link to="/about/client">고객사</Link>
              <Link to="/about/vendor">협력사</Link>
              <Link to="/about/location">오시는 길</Link>
            </div>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/business/firewall/fortinet"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              사업소개
            </NavLink>
            <div className={styles.list_2dep}>
              <Link to="/business/firewall/fortinet">Firewall</Link>
              <Link to="/business/switch">Switch</Link>
              <Link to="/business/ap">AP</Link>
              <Link to="/business/software">Software</Link>
              <Link to="/business/msp">MSP</Link>
              <Link to="/business/consulting">Consulting</Link>
              <Link to="/business/global">Global Service</Link>
            </div>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/costomer"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              고객문의
            </NavLink>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/employment"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              채용
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
