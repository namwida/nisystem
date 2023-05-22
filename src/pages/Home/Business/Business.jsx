import { Link } from "react-router-dom";
import styles from "./Business.module.css";

export default function HomeBusiness() {
  return (
    <section className={styles.home_business}>
      <div className={`${styles.inner} inner`}>
        <ul>
          <li>
            <div className={styles.description}>
              <div>
                <h2>Firewall</h2>
                <p>
                  업계 최고의 위협 보호 및 암호 해독 기능을 제공하며
                  <br /> 통합 보안 네트워킹을 제공합니다.
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
            </div>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/main/business_firewall.svg`}
              alt="firewall"
            />
          </li>
          <li>
            <div className={styles.description}>
              <div>
                <h2>Switch</h2>
                <p>
                  안전하고 지속 가능한 하이브리드 업부 수요를 충족하며
                  <br />
                  탁월한 경험을 제공합니다.
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
            </div>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/main/business_switch.svg`}
              alt="NI System 로고"
            />
          </li>
          <li>
            <div className={styles.description}>
              <div>
                <h2>MSP</h2>
                <p>
                  전문인력 및 IT 자원을 활용하여 전반적인 고객사의
                  <br />
                  IT 시스템을 체계적으로 운용, 관리해드립니다.
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
            </div>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/main/business_consulting_2.svg`}
              alt="NI System 로고"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
