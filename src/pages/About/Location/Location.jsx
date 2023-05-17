import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Location.module.css";

export default function AboutLocation() {
  return (
    <Layout>
      <PageHeader
        title="오시는 길"
        destription="엔아이시스템의 주소와 연락처 정보를 안내해 드립니다."
      />
      <main className={styles.about_location}>
        <SectionTitle title="주소 및 연락처" />
        <section className="inner">
          <p><span>주소.</span> 경기도 의왕시 성고개로 53, A동 805호 (포일동, 에이스청계타워)</p>
          <p><span>전화.</span> 1666-2869</p>
          <p><span>팩스.</span> 050-7088-2588</p>
          <div className={styles.map_image}></div>
        </section>
      </main>
    </Layout>
  );
}
