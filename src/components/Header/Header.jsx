import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const pathname = useLocation().pathname;
  console.log("pathname", pathname);
  console.log(pathname.includes("about"));
  const [hamToggle, setHamToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState({
    company: false,
    business: false,
  });
  const clickedHamToggle = () => {
    setHamToggle((prev) => !prev);
  };
  const clickedMenuToggle = (name) => {
    setMenuToggle({
      ...menuToggle,
      company: false,
      business: false,
      [name]: !menuToggle[name],
    });
  };
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="NI System 로고"
          />
        </Link>
        <div className={styles.menu_pc}>
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
              to="/business"
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
        <div
          className={`${styles.ham_btn} ${hamToggle ? styles.ham_active : ""}`}
          onClick={clickedHamToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`${styles.menu_mobile} ${
          hamToggle ? styles.ham_active : ""
        }`}
      >
        <ul>
          <li className={menuToggle.company ? styles.munu_active : ""}>
            <Link
              to="#"
              className={pathname.includes("/about") ? styles.path_active : ""}
              onClick={() => clickedMenuToggle("company")}
            >
              회사소개
              <span className={styles.arrow}></span>
            </Link>
            <ul>
              <li>
                <a
                  href="/nisystem/about/company"
                  className={
                    pathname.includes("/about/company") ? styles.path_active : ""
                  }
                >
                  엔아이시스템 소개
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/about/message"
                  className={
                    pathname.includes("/about/message") ? styles.path_active : ""
                  }
                >
                  인사말
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/about/history"
                  className={
                    pathname.includes("/about/history") ? styles.path_active : ""
                  }
                >
                  연혁
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/about/client"
                  className={
                    pathname.includes("/about/client") ? styles.path_active : ""
                  }
                >
                  고객사
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/about/partner"
                  className={
                    pathname.includes("/about/partner") ? styles.path_active : ""
                  }
                >
                  벤더사/협력사
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/about/location"
                  className={
                    pathname.includes("/about/location") ? styles.path_active : ""
                  }
                >
                  찾아오시는 길
                </a>
              </li>
            </ul>
          </li>
          <li className={menuToggle.business ? styles.munu_active : ""}>
            <Link
              to="#"
              className={pathname.includes("/business") ? styles.path_active : ""}
              onClick={() => clickedMenuToggle("business")}
            >
              사업소개
              <span className={styles.arrow}></span>
            </Link>
            <ul>
              <li>
                <a
                  href="/nisystem/business/firewall/fortinet"
                  className={
                    pathname.includes("/business/firewall") ? styles.path_active : ""
                  }
                >
                  Firewall
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/business/switch/cisco"
                  className={
                    pathname.includes("/business/switch") ? styles.path_active : ""
                  }
                >
                  Switch
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/business/ap/cisco"
                  className={
                    pathname.includes("/business/ap") ? styles.path_active : ""
                  }
                >
                  AP
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/business/est/asm"
                  className={
                    pathname.includes("/business/est") ? styles.path_active : ""
                  }
                >
                  EST Security
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/business/msp"
                  className={
                    pathname.includes("/business/msp") ? styles.path_active : ""
                  }
                >
                  MSP
                </a>
              </li>
              <li>
                <a
                  href="/nisystem/business/consulting"
                  className={
                    pathname.includes("/business/consulting")
                      ? styles.path_active
                      : ""
                  }
                >
                  Consulting
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/nisystem/customer">고객문의</a>
          </li>
          <li>
            <a href="/nisystem/employment">채용</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
