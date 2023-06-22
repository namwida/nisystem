import { Link } from "react-router-dom";
import styles from "./Reference2.module.css";

export default function Reference2() {
  return (
    <section className={styles.home_reference2}>
      <div className={`${styles.inner} inner`}>
        <div className={styles.title_box}>
          <p>17년 이상의 전문가가 진행한</p>
          <h1>엔아이시스템의 구축사례</h1>
          <Link to="/about/history" className={styles.more_btn}>
            <p>더보기</p>
            <span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                aria-hidden="true"
                focusable="false"
                class=""
              >
                <g clip-rule="evenodd" fill-rule="evenodd">
                  <path d="m19.7273 12-6.3637-6.3636 1.2728-1.2728 7.6364 7.6364-7.6364 7.6364-1.2728-1.2728z"></path>
                  <path d="m20 12.9h-18v-1.8h18z"></path>
                </g>
              </svg>
            </span>
          </Link>
        </div>
        <ul className={styles.content_box}>
          <li>
            <div className={styles.image_box}>
              <img
                src={`${process.env.PUBLIC_URL}/images/main/main_reference_jeju.svg`}
                alt="제주항공 로고"
              />
            </div>
            <div className={styles.text_box}>
              <p>제주항공</p>
              <p>AWS, Azure Multi-Cloud 구축, 연동 및 유지보수</p>
            </div>
          </li>
          <li>
            <div className={styles.image_box}>
              <img
                src={`${process.env.PUBLIC_URL}/images/main/main_reference_jeju.svg`}
                alt="제주항공 로고"
              />
            </div>
            <div className={styles.text_box}>
              <p>이스타항공</p>
              <p>AWS, Azure Multi-Cloud 구축, 연동 및 유지보수</p>
            </div>
          </li>
          <li>
            <div className={styles.image_box}>
              <img
                src={`${process.env.PUBLIC_URL}/images/main/main_reference_jeju.svg`}
                alt="제주항공 로고"
              />
            </div>
            <div className={styles.text_box}>
              <p>뽀로로 시스템</p>
              <p>AWS, Azure Multi-Cloud 구축, 연동 및 유지보수</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
