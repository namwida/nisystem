import { Link } from "react-router-dom";
import styles from "./Customer.module.css";

export default function Customer() {
  return (
    <section className={styles.home_business}>
      <div className={`${styles.inner} inner`}>
        <div>
          <h1>
            빠르고 편하게
            <br />
            상담받아보세요!
          </h1>
          <Link to="/customer">고객문의 바로가기</Link>
        </div>
        <div className={styles.image_box}>
          <div>
            <p>견적요청</p>
            <p>원하시는 조건으로 견적서를 제공해드립니다.</p>
            <div className={styles.image}></div>
          </div>
          <div>
            <p>제품</p>
            <p>원하시는 제품의 정보를 안내해드립니다.</p>
            <div className={styles.image}></div>
          </div>
          <div>
            <p>컨설팅</p>
            <p>최적화된 제품 및 솔루션을 제공합니다.</p>
            <div className={styles.image}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
