import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Employment.module.css";

export default function Employment() {
  return (
    <Layout>
      <PageHeader
        gnbname="employment"
        title="채용"
        destription="엔아이시스템은 창의성과 도전정신을 갖춘 인재를 찾고 있습니다."
      />
      <main className={`${styles.employment} inner`}>
        <Title title="채용절차" />
        <Process2 />
        <Title title="복리후생" />
        <Benefit />
      </main>
    </Layout>
  );
}

function Title({ title }) {
  return (
    <h2 className={`${styles.title} inner`}>
      <span>{title}</span>
    </h2>
  );
}

function Process2() {
  return (
    <section className={`${styles.process} inner`}>
      <ol>
        <li>
          <p>01.</p>
          <p>채용공고</p>
          <p>충원사유 발생 시 수시로 채용공고를 게시</p>
        </li>
        <li>
          <p>02.</p>
          <p>서류전형</p>
          <p>
            해당 직무 및 분야에 대하여 지원자의 인성, 자질, 능력 및 경험 등을
            종합적으로 고려해 서류 전형을 실시
          </p>
        </li>
        <li>
          <p>03.</p>
          <p>면접</p>
          <p>
            서류전형 합격자에 한하여 실무진 면접을 진행하며, 면접을 통해 자질 및
            역량 등을 종합적으로 검증하는 절차
          </p>
        </li>
        <li>
          <p>04.</p>
          <p>최종합격</p>
          <p>
            합격통보는 면접 합격자에게만 개별적으로 연락하며, 연락을 통해
            입사일을 협의
          </p>
        </li>
      </ol>
    </section>
  );
}

function Benefit() {
  return (
    <section className={`${styles.benefit} inner`}>
      <dl>
        <dt>4대보험</dt>
        <dd className={styles.benefit_image}></dd>
        <dd>국민연금, 고용보험, 산재보험, 건강보험</dd>
      </dl>
      <dl>
        <dt>휴무/휴가</dt>
        <dd className={styles.benefit_image}></dd>
        <dd>주5일 근무, 연차, 경조휴가, 반차, 육아휴직</dd>
      </dl>
      <dl>
        <dt>보상/수당/지원</dt>
        <dd className={styles.benefit_image}></dd>
        <dd>퇴직금, 성과급, 교육비 지원</dd>
      </dl>
      <dl>
        <dt>생활편의</dt>
        <dd className={styles.benefit_image}></dd>
        <dd>건강검진, 석식제공</dd>
      </dl>
    </section>
  );
}
