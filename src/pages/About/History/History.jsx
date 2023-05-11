import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./History.module.css";

export default function AboutHistory() {
  return (
    <Layout>
      <PageHeader
        title="연혁"
        destription="전문성을 바탕으로 최적화 컨설팅을 진행하며 최고의 서비스를 제공합니다. "
      />
      <main className={styles.about_history}>
        <SectionTitle title="회사 연혁" />
        <CompanyHistory />
        <SectionTitle title="대표 연혁" />
        <CEOHistory />
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
          <dt>12월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>06월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2021</p>
        <dl className={styles.month}>
          <dt>12월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>06월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={`${styles.month} ${styles.last}`}>
          <dt>03월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
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
          <dt>12월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>06월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2018</p>
        <dl className={styles.month}>
          <dt>01월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2017</p>
        <dl className={styles.month}>
          <dt>11월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>09월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>02월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2016</p>
        <dl className={styles.month}>
          <dt>12월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>05월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2015</p>
        <dl className={styles.month}>
          <dt>02월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2014</p>
        <dl className={styles.month}>
          <dt>11월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>10월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>05월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2013</p>
        <dl className={styles.month}>
          <dt>08월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
      <li>
        <p className={styles.year}>2012</p>
        <dl className={styles.month}>
          <dt>09월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>07월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={styles.month}>
          <dt>03월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
        <dl className={`${styles.month} ${styles.last}`}>
          <dt>01월</dt>
          <div>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
            <dd>한일튜브㈜ Network Switch 납품</dd>
          </div>
        </dl>
      </li>
    </ul>
  );
}
