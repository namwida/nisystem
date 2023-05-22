import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Vendor.module.css";

export default function AboutVendor() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="협력사"
        destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야에서"
        destription_add="여러 기업들과 Partnership을 맺고 사업을 진행하고 있습니다."
      />
      <main className={styles.about_vendor}>
        <SectionTitle title="Firewall" />
        <Firewall />
        <SectionTitle title="Switch" />
        <Switch />
        <SectionTitle title="AP" />
        <AP />
        <SectionTitle title="Software" />
        <Software />
      </main>
    </Layout>
  );
}

function Firewall() {
  return (
    <section className={`${styles.firewall} inner`}>
      <dl>
        <dt>포티넷</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/fortinet.svg`}
            alt="포티넷 로고"
          />
        </dd>
      </dl>
    </section>
  );
}

function Switch() {
  return (
    <section className={`${styles.switch} inner`}>
      <dl>
        <dt>시스코</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/cisco.svg`}
            alt="시스코 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>익스트림</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/extreme.svg`}
            alt="익스트림 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>포티넷</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/fortinet.svg`}
            alt="포티넷 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>자이젤</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/zyxel.svg`}
            alt="자이젤 로고"
          />
        </dd>
      </dl>
    </section>
  );
}

function AP() {
  return (
    <section className={`${styles.ap} inner`}>
      <dl>
        <dt>시스코</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/cisco.svg`}
            alt="시스코 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>포티넷</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/fortinet.svg`}
            alt="포티넷 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>자이젤</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/zyxel.svg`}
            alt="자이젤 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>아루바</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/aruba.svg`}
            alt="아루바 로고"
          />
        </dd>
      </dl>
    </section>
  );
}

function Software() {
  return (
    <section className={`${styles.software} inner`}>
      <dl>
        <dt>이스트시큐리티</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/est.svg`}
            alt="이스트시큐리티 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>마이크로소프트 365</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/micro.svg`}
            alt="텍슨 로고"
          />
        </dd>
      </dl>
    </section>
  );
}
