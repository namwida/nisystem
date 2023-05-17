import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Message.module.css";

export default function AboutMessage() {
  return (
    <Layout>
      <PageHeader
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
                이런 청춘이 둘 이런 마리아 별빛이 계십니다. 멀리 나는 된 같이
                아스라히 이름과 하나에 보고, 봅니다. 노새, 못 딴은 지나가는
                이름자 하나에 불러 계십니다. 다 밤을 덮어 내린 사람들의 이 위에
                있습니다.
              </p>
              <p>
                라이너 아직 내일 언덕 잠, 지나고 잔디가 이네들은 봅니다. 위에도
                노루, 내 걱정도 써 어머니, 별 까닭입니다. 벌레는 사랑과 파란
                같이 불러 다 까닭입니다.
              </p>
              <p>
                된 쓸쓸함과 프랑시스 아직 새겨지는 동경과 버리었습니다. 이름과,
                강아지, 언덕 까닭이요, 있습니다. 헤일 계집애들의 않은 별
                까닭입니다.
              </p>
              <p>
                된 쓸쓸함과 프랑시스 아직 새겨지는 동경과 버리었습니다. 이름과,
                강아지, 언덕 까닭이요, 있습니다. 헤일 계집애들의 않은 별
                까닭입니다.
              </p>
            </div>
            <p className={styles.signature}>(주)엔아이시스템 대표이사 이현봉</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
