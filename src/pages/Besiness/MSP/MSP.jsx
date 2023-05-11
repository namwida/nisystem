
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import styles from "./MSP.module.css";

export default function MSP() {
  return (
    <>
      <Header />
      <main className={styles.besiness_msp}>
        <PageHeader
          title="MSP"
          destription="고성능 스마트기기의 증가와 영상 통화 등 고급 애플리케이션 보급으로"
          destription_add="기업은 빠르고 품질좋은 무선랜과 이를 위한 인프라를 필요로 합니다."
        />
        <div className={`${styles.inner} inner`}></div>
      </main>
      <Footer />
    </>
  );
}
