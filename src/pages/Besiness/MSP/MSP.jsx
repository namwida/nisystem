import styles from "./MSP.module.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BusinessService from "../../../components/Business/Service/Service";
import Layout from "../../../components/Layout/Layout";
import Description from "../../../components/Business/Description/Description";

export default function MSP() {
  return (
    <Layout>
      <PageHeader
        gnbname="business"
        title="MSP"
        destription="고성능 스마트기기의 증가와 영상 통화 등 고급 애플리케이션 보급으로"
        destription_add="기업은 빠르고 품질좋은 무선랜과 이를 위한 인프라를 필요로 합니다."
      />
      <main className={styles.besiness_msp}>
        <div className={`${styles.inner}`}>
          <main>
            <SectionTitle title="주요 서비스" />
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
            <SectionTitle title="특장점" />
            <Description>
              <li>
                <h3>ONE-STOP 통합서비스</h3>
                <ul>
                  <li>
                    IDC, NW, 운영, 유지보수, 보안 등 사업 전반을 책임지는 통합
                    서비스 제공
                  </li>
                </ul>
              </li>
              <li>
                <h3>고객 맞춤형 서비스</h3>
                <ul>
                  <li>
                    고객사 환경에 맞는 최적의 IT 아웃소싱 체계를 다양한 서비스
                    형태로 선택가능
                  </li>
                </ul>
              </li>
              <li>
                <h3>전문인력 24HX365D 감시</h3>
                <ul>
                  <li>검증된 전문 인력들이 IDC 상주</li>
                  <li>1:1 전담 모니터링 및 기술 지원</li>
                </ul>
              </li>
              <li>
                <h3>검증된 운영 노하우</h3>
                <ul>
                  <li>17년간의 운영 노하우와 다양한 운영 레퍼런스 보유</li>
                  <li>국내 뿐만 아니라 해외에 위치한 기업까지 가능</li>
                </ul>
              </li>
            </Description>
          </main>
        </div>
      </main>
    </Layout>
  );
}
