import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SectionTitle2 from "../../../components/SectionTitle2/SectionTitle2";
import styles from "./Partner.module.css";

export default function Partner() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="벤더사/협력사"
        destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야의 기업들과 partnership을 맺고 있습니다."
      />
      <main className={styles.about_partner}>
        <SectionTitle title="벤더사" />
        <Vendor />
        <SectionTitle title="협력사" />
        <Company />
      </main>
    </Layout>
  );
}

function Vendor() {
  return (
    <section className="inner">
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
      <dl>
        <dt>아루바</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/aruba.svg`}
            alt="아루바 로고"
          />
        </dd>
      </dl>
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

function Company() {
  return (
    <section className="inner">
      <dl>
        <dt>
          <p>씨브이원</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/about_message_partner1.png`}
            alt="씨브이원 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <p>콘텐츠브릿지</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/about_message_partner2.png`}
            alt="콘텐츠브릿지 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <p>누라인프라</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/about_message_partner5.png`}
            alt="누라인프라 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <p>파이오링크</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/about_message_partner4.png`}
            alt="파이오링크 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <p>JS정보시스템</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/about_message_partner3.png`}
            alt="JS정보시스템 로고"
          />
        </dd>
      </dl>
    </section>
  );
}
