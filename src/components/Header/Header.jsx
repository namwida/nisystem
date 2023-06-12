import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="NI System 로고"
          />
        </Link>
        <div className={styles.menu}>
          <div className={styles.list_1dep}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "gnb_selected" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "gnb_selected" : "")}
            >
              회사소개
            </NavLink>
            <div className={styles.list_2dep}>
              <Link to="/about/company">엔아이시스템 소개</Link>
              <Link to="/about/message">인사말</Link>
              <Link to="/about/history">연혁</Link>
              <Link to="/about/client">고객사</Link>
              <Link to="/about/partner">벤더사/협력사</Link>
              <Link to="/about/location">찾아오시는 길</Link>
            </div>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/business/firewall/fortinet"
              className={({ isActive }) => (isActive ? "gnb_selected" : "")}
            >
              사업소개
            </NavLink>
            <div className={styles.list_2dep}>
              <Link to="/business/firewall/fortinet">Firewall</Link>
              <Link to="/business/switch/cisco">Switch</Link>
              <Link to="/business/ap/cisco">AP</Link>
              <Link to="/business/est/asm">EST Security</Link>
              <Link to="/business/msp">MSP</Link>
              <Link to="/business/consulting">Consulting</Link>
            </div>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/customer"
              className={({ isActive }) => (isActive ? "gnb_selected" : "")}
            >
              고객문의
            </NavLink>
          </div>
          <div className={styles.list_1dep}>
            <NavLink
              to="/employment"
              className={({ isActive }) => (isActive ? "gnb_selected" : "")}
            >
              채용
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
