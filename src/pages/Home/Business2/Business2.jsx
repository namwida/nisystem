import { Link } from "react-router-dom";
import styles from "./Business2.module.css";

export default function HomeBusiness2() {
  return (
    <section className={styles.home_business}>
      <div className={`${styles.inner} inner`}>
        <ul>
          <li>
            <Link to="/business/firewall/fortinet">
              <h2>Firewall</h2>
              <p>
                최고의 위협 보호,<br />암호 해독 기능 제공
              </p>
              <div className={styles.more_btn}>
                <div>
                  <span>자세히 보기</span>
                  <svg
                    width="30"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 2L39 8.5L32.5 15"
                      stroke="#333"
                      strokeMiterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/business/switch/cisco">
              <h2>Switch</h2>
              <p>
                하이브리드 업부와
                <br /> 탁월한 경험 제공
              </p>
              <div className={styles.more_btn}>
                <div>
                  <span>자세히 보기</span>
                  <svg
                    width="30"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 2L39 8.5L32.5 15"
                      stroke="#333"
                      strokeMiterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/business/ap/cisco">
              <h2>AP</h2>
              <p>
                더 빠른 속도와
                <br /> 네트워크 보안 적용
              </p>
              <div className={styles.more_btn}>
                <div>
                  <span>자세히 보기</span>
                  <svg
                    width="30"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 2L39 8.5L32.5 15"
                      stroke="#333"
                      strokeMiterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/business/msp">
              <h2>MSP</h2>
              <p>
                IT 시스템을
                <br /> 체계적으로 운용, 관리
              </p>
              <div className={styles.more_btn}>
                <div>
                  <span>자세히 보기</span>
                  <svg
                    width="30"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 2L39 8.5L32.5 15"
                      stroke="#333"
                      strokeMiterlimit="10"
                    />
                    <path d="M39 8.5H0" stroke="#333" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
