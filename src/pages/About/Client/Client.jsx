import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Client.module.css";

export default function AboutClient() {
  return (
    <Layout>
      <PageHeader
        title="고객사"
        destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야에서 여러 기업들과 Partnership을 맺고 사업을 진행하고 있습니다."
      />
      <main className={styles.about_client}>
        <SectionTitle title="국내" />
        <DomesticSection />
        <SectionTitle title="해외" />
        <OverseasSection />
      </main>
    </Layout>
  );
}

function DomesticSection() {
  return (
    <section className={`${styles.domestic} inner`}>
      <h3>항공사 / IT기업</h3>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
      </ul>
      <h3>공공기관 / 의료기관</h3>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
      </ul>
      <h3>통신사 / 제조업</h3>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
      </ul>
    </section>
  );
}

function OverseasSection() {
  return (
    <section className={`${styles.overseas} inner`}>
      <h3>IT기업</h3>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
            alt=""
          />
        </li>
      </ul>
    </section>
  );
}
