import styles from "./MSP.module.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BusinessService from "../../../components/Business/Service/Service";
import Layout from "../../../components/Layout/Layout";
import Description from "../../../components/Business/Description/Description";
import SectionTitle3 from "../../../components/SectionTitle3/SectionTitle3";
import BusinessCustomer from "../BusinessCustomer/BusinessCustomer";
import { BsHddStack, BsLayersHalf, BsMenuApp, BsPeople } from "react-icons/bs";
import BusinessAdvantages from "../../../components/Business/Advantages/Advantages";

export default function MSP() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="MSP"
        destription="엔아이시스템의 전문인력 및 IT 자원을 활용하여 전반적인 고객사의 IT 시스템을 체계적으로 운용, 관리해드립니다."
      />
      <main className={styles.besiness_msp}>
        <div className={`${styles.inner}`}>
          <main>
            <SectionTitle3 title="주요 서비스" />
            <BusinessService>
              <ul className={styles.service}>
                <li>
                  <h3>운용대행</h3>
                  <p>
                    고객의 서버, 네트워크, 보안, 백업, 소프트웨어,
                    운영엔지니어등의 IT시스템을 운영 대행함으로써 전문성과
                    안정성 보장
                  </p>
                </li>
                <li>
                  <h3>유지보수</h3>
                  <p>
                    서버 및 네트워크부터 DB, 기반시설까지 IT자원의 장애를 철저히
                    예방, 장애발생시 원인규명과 사후조치를 통해 빠른 복구를 보장
                  </p>
                </li>
                <li>
                  <h3>관제서비스</h3>
                  <p>
                    24시간 365일 모니터링 전담하는 전문 통합 관제 조직 운영,
                    장애시 실시간 장애처리 및 복구상황 확인, 보안/원격제어 관리
                    등 지원
                  </p>
                </li>
                <li>
                  <h3>이전대행</h3>
                  <p>
                    고객사의 IT시스템에 대한 이전계획수립, 백업, 전산장비의
                    해체, 운송, 조립, 설치 및 안정화 작업까지 전반적인 이전
                    업무를 대행
                  </p>
                </li>
              </ul>
            </BusinessService>
            <BusinessAdvantages>
              <SectionTitle3 title="특장점" />
              <ul className="inner">
                <li>
                  <div>
                    <BsLayersHalf />
                  </div>
                  <div>
                    <h3>ONE-STOP 통합서비스</h3>
                    <p>
                      IDC, NW, 운영, 유지보수, 보안 등 사업 전반을 책임지는 통합
                      서비스 제공
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <BsMenuApp />
                  </div>
                  <div>
                    <h3>전문인력 24HX365D 감시</h3>
                    <p>
                      검증된 전문 인력들이 IDC 상주, 1:1 전담 모니터링 및 기술
                      지원
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <BsPeople />
                  </div>
                  <div>
                    <h3>검증된 운영 노하우</h3>
                    <p>17년간의 운영 노하우와 다양한 운영 레퍼런스 보유</p>
                  </div>
                </li>
              </ul>
            </BusinessAdvantages>
            <BusinessCustomer />
          </main>
        </div>
      </main>
    </Layout>
  );
}
