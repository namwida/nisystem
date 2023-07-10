import styles from "./Consulting.module.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BusinessService from "../../../components/Business/Service/Service";
import Layout from "../../../components/Layout/Layout";
import Description from "../../../components/Business/Description/Description";
import {
  BsClipboard2Pulse,
  BsFileEarmarkRuled,
  BsPersonCheck,
  BsPersonWorkspace,
} from "react-icons/bs";
import SectionTitle3 from "../../../components/SectionTitle3/SectionTitle3";
import BusinessCustomer from "../BusinessCustomer/BusinessCustomer";

export default function Consulting() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="Consulting"
        destription="고성능 스마트기기의 증가와 영상 통화 등 고급 애플리케이션 보급으로"
        destription_add="기업은 빠르고 품질좋은 무선랜과 이를 위한 인프라를 필요로 합니다."
      />
      <main className={styles.besiness_consulting}>
        <div className={`${styles.inner}`}>
          <main>
            <SectionTitle3 title="주요 서비스" />
            <BusinessService>
              <ul className={styles.service}>
                <li>
                  <h3>IDC 인프라 컨설팅</h3>
                  <p>
                    최고의 IDC 구축 전문가가 수행하는 IDC인프라 설계/구축/운영
                    컨설팅
                  </p>
                </li>
                <li>
                  <h3>네트워크 컨설팅</h3>
                  <p>
                    대규모 네트워크 구축 경험이 있는 전문가들이 수행하는
                    네트워크설계/구축/운영컨설팅
                  </p>
                </li>
              </ul>
            </BusinessService>
            <Process />
            <BusinessCustomer />
          </main>
        </div>
      </main>
    </Layout>
  );
}

function Process() {
  return (
    <section className={styles.business_service_process}>
      <SectionTitle3 title="이용절차" />
      <div className="inner">
        <ul>
          <li>
            <div className={styles.image_box}>
              <BsClipboard2Pulse />
            </div>
            <h3>Step1. 환경분석, 컨설팅</h3>
          </li>
          <li>
            <div className={styles.image_box}>
              <BsPersonCheck />
            </div>
            <h3>Step2. 상품안내, 제안</h3>
          </li>
          <li>
            <div className={styles.image_box}>
              <BsPersonWorkspace />
            </div>
            <h3>Step3. 인프라 설계 및 구성</h3>
          </li>
          <li>
            <div className={styles.image_box}>
              <BsFileEarmarkRuled />
            </div>
            <h3>Step4. 요구사항 견적산출</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
