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
        destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야에서"
        destription_add="여러 기업들과 Partnership을 맺고 사업을 진행하고 있습니다."
      />
      <main className={styles.about_partner}>
        <SectionTitle title="벤더사" />
        <Vendor />
        <SectionTitle title="협력사" />
        <Client />
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

function Client() {
  return (
    <section className="inner">
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/china.svg`}
            alt="중국 국기"
          />
          <p>서진 심천</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_01.svg`}
            alt="서진 심천 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
            alt="베트남 국기"
          />
          <p>서진 오토</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_01.svg`}
            alt="서진 오토 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
            alt="베트남 국기"
          />
          <p>서진시스템 비나</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_01.svg`}
            alt="서진시스템 비나 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
            alt="베트남 국기"
          />
          <p>서진 비나</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_01.svg`}
            alt="서진 비나 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
            alt="베트남 국기"
          />
          <p>텍슨 베트남</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_02.svg`}
            alt="텍슨 베트남 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/usa.svg`}
            alt="미국 국기"
          />
          <p>텍슨 USA</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_02.svg`}
            alt="텍슨 USA 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/vietnam.svg`}
            alt="베트남 국기"
          />
          <p>텍슨 비나</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_02.svg`}
            alt="텍슨 비나 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src={`${process.env.PUBLIC_URL}/images/china.svg`}
            alt="중국 국기"
          />
          <p>텍슨 차이나</p>
        </dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_02.svg`}
            alt="텍슨 차이나 로고"
          />
        </dd>
      </dl>
    </section>
  );
}
