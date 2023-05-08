import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import PageTitle from "../../../components/PageTitle/PageTitle";
import styles from "./Location.module.css";

export default function AboutLocation() {
  return (
    <>
      <Header />
      <section className={styles.about_location}>
        <PageHeader
          title="오시는 길"
          destription="엔아이시스템의 주소와 연락처 정보를 안내해 드립니다."
        />
        <div className={`${styles.inner} inner`}>
          <PageTitle title="주소 및 연락처" />
          <p>경기도 의왕시 성고개로 53, A동 805호 (포일동, 에이스청계타워)</p>
          <p>전화: 1666-2869</p>
          <p>팩스: 050-7088-2588</p>
          <div className={styles.map_image}></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
