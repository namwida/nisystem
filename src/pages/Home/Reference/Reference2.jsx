import { Link } from "react-router-dom";
import styles from "./Reference2.module.css";

export default function Reference2() {
  return (
    <section className={styles.home_reference2}>
      <div className={`${styles.inner} inner`}>
        <div className={styles.title_box}>
          <h1>검증된 레퍼런스</h1>
          <p>
            전문성있는 서비스를 제공합니다. 엔아이시스템을 통해 구축된
            레퍼런스를 확인해보세요.
          </p>
          <Link to="/">
            <span>자세히 보기</span>
            <svg
              width="40"
              height="16"
              viewBox="0 0 40 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5 2L39 8.5L32.5 15"
                stroke="#333"
                stroke-miterlimit="10"
              />
              <path d="M39 8.5H0" stroke="#333" />
            </svg>
          </Link>
        </div>
        <ul className={styles.content_box}>
          <li>
            <div className={styles.image_box}>
              <img
                src={`${process.env.PUBLIC_URL}/images/jeju.svg`}
                alt="제주항공 로고"
              />
            </div>
            <div className={styles.text_box}>
              <p>제주항공</p>
              <p>어쩌고 저쩌고 네트워크 유지보수 계약 체결</p>
            </div>
          </li>
          <li>
            <div className={styles.image_box}>
              <img
                src={`${process.env.PUBLIC_URL}/images/jeju.svg`}
                alt="제주항공 로고"
              />
            </div>
            <div className={styles.text_box}>
              <p>제주항공</p>
              <p>어쩌고 저쩌고 네트워크 유지보수 계약 체결</p>
            </div>
          </li>
          <li>
            <div className={styles.image_box}>
              <img
                src={`${process.env.PUBLIC_URL}/images/jeju.svg`}
                alt="제주항공 로고"
              />
            </div>
            <div className={styles.text_box}>
              <p>제주항공</p>
              <p>어쩌고 저쩌고 네트워크 유지보수 계약 체결</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
