import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Message.module.css";

export default function AboutMessage() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="인사말"
        destription="엔아이시스템은 고객을 우선적으로 생각하는 기업입니다."
      />
      <main className={styles.about_message}>
        <SectionTitle title="엔아이시스템은 고객을 우선적으로 생각하는 기업입니다." />
        <section className={`${styles.contens_box} inner`}>
          <div className={styles.image}></div>
          <div className={styles.text_box}>
            <div className={styles.message}>
              <p>엔아이시스템의 홈페이지를 방문하신 고객 여러분, 반갑습니다.</p>
              <p>
                엔아이시스템은 네트워크 인프라 컨설팅, 구축 및 유지보수, 보안,
                무선, 소프트웨어 등을 주력 사업으로 '하이브리드 IT 네트워크
                기업'으로 거듭나고 있습니다.
              </p>
              <p>
                엔아이시스템의 임직원들은 네트워크 인프라 분야에서 최고 수준의
                전문가로 거듭나기 위해 새로운 기술을 연마하며 고객과 회사의
                가치를 높이기 위해 끊임없이 노력하고 있습니다.
              </p>
              <p>
                또한 국내 뿐만 아니라 베트남, 인도네시아, 필리핀 등의 해외로
                사업영역을 확장하며 도전하는 '글로벌 IT 네트워크 기업'으로
                거듭나고 있습니다.
              </p>
              <p>
                엔아이시스템의 모든 임직원은 고객을 우선으로 생각하며 신뢰와
                인정 받는 기업으로 성장해 나갈 것을 다시 한 번 약속드립니다.
              </p>
              <p>감사합니다.</p>
            </div>
            <p className={styles.signature}>(주)엔아이시스템 대표이사 이현봉</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
