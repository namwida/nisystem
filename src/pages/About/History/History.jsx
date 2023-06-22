import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./History.module.css";

export default function AboutHistory() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="연혁"
        destription="전문성을 바탕으로 최적화 컨설팅을 진행하며 최고의 서비스를 제공합니다."
      />
      <main className={styles.about_history}>
        <section>
          <SectionTitle title="회사 연혁" />
          <CompanyHistory />
          <SectionTitle title="대표 연혁" />
          <CEOHistory />
        </section>
      </main>
    </Layout>
  );
}

function CompanyHistory() {
  return (
    <ul className={`${styles.year_area} inner`}>
      <li>
        <p className={`${styles.year} ${styles.first}`}>2022</p>
        <dl className={styles.month}>
          <dt>00월</dt>
          <div>
            <dd>준비중</dd>
            <dd>준비중</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>00월</dt>
          <div>
            <dd>준비중</dd>
            <dd>준비중</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2021</p>
        <dl className={`${styles.month} ${styles.last}`}>
          <dt>12월</dt>
          <div>
            <dd>한일튜브(주) Network Switch 납품</dd>
            <dd>에듀베이션(주) 보안장비 유지보수</dd>
            <dd>한국자동차산업협회 컨설팅 및 유지보수</dd>
            <dd>(주)엔아이시스템 법인 설립</dd>
          </div>
        </dl>
      </li>
    </ul>
  );
}

function CEOHistory() {
  return (
    <ul className={`${styles.year_area} inner`}>
      <li>
        <p className={`${styles.year} ${styles.first}`}>2019</p>
        <dl className={styles.month}>
          <dt>10월</dt>
          <div>
            <dd>
              AWS DirectConnect / Azure ExpressRoute 컨설팅 및 설계 구축,
              Multi-Cloud 연동
            </dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>06월</dt>
          <div>
            <dd>NIPA GPU사업 네트워크 설계 구축 운용&유지보수</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2012</p>
        <dl className={styles.month}>
          <dt>02월</dt>
          <div>
            <dd>콘텐츠브릿지 MSP기술지원팀 팀장 수행</dd>
            <dd>KT-IDC(강남,분당,목동) 네트워크/서버 유지보수</dd>
            <dd>IDC BackBone Switch 교체 및 이중화 구축</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2010</p>
        <dl className={styles.month}>
          <dt>02월</dt>
          <div>
            <dd>이스타항공 네트워크 유지보수</dd>
            <dd>AWS, Azure Multi-Cloud 구축, 연동 및 유지보수</dd>
            <dd>호주 시드니(Navitaire) 구축, 연동 및 관리</dd>
            <dd>국내/해외 지점 신규 구축 지원</dd>
            <dd>타이이스타 네트워크 구축 지원</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2007</p>
        <dl className={`${styles.month} ${styles.last}`}>
          <dt>06월</dt>
          <div>
            <dd>기업 및 관공서 네트워크 유지보수</dd>
          </div>
        </dl>
      </li>
    </ul>
  );
}
