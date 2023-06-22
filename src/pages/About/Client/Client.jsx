import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Client.module.css";

export default function AboutClient() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="고객사"
        destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야의 기업들과 계약을 진행했습니다."
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
      <dl>
        <dt>텍슨</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/partner_logo_02.svg`}
            alt="텍슨 로고"
          />
        </dd>
      </dl>
      <dl>
        <dt>오로라월드</dt>
        <dd>
          <img
            src={`${process.env.PUBLIC_URL}/images/aurora.svg`}
            alt="오로라월드 로고"
          />
        </dd>
      </dl>
    </section>
  );
}

function OverseasSection() {
  return (
    <section className={`${styles.overseas} inner`}>
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
