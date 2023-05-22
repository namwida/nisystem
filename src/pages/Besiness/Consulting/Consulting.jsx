import styles from "./Consulting.module.css";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import BusinessAdvantages from "../../../components/Business/Advantages/Advantages";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BusinessService from "../../../components/Business/Service/Service";
import BusinessOutline from "../../../components/Business/Outline/Outline";
import Layout from "../../../components/Layout/Layout";

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
            <SectionTitle title="개요" />
            <BusinessOutline
              h3="Consulting Consulting Consulting Consulting"
              p1="Fortinet은 원격 사무실, 지사, 캠퍼스, 데이터 센터 및 클라우드 등 모든
                위치로 확장할 수 있는 완벽한 컨버전스를 제공하는 보안 네트워킹의
                선구자입니다."
              p2="FortiGate는 FortiOS Everywhere의 핵심으로, 컨테이너 방화벽, 가상 방화벽 및 어플라이언스를 포함한 다양한 폼 팩터에서 심도 깊은 가시성과 보안을 제공합니다."
            />
            <SectionTitle title="이용절차" />
            <Process />
            <SectionTitle title="주요 서비스" />
            <BusinessService>
              <ul>
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
            <SectionTitle title="특장점" />
            <BusinessAdvantages>
              <li>
                <AiOutlineMoneyCollect size="70" color="#0079cc" />
                <h3>맞춤형 서비스 제공</h3>
                <p>
                  고객사 환경에 맞는 최적의 IT 아웃 소싱 체계를 다양한 서비스
                  형태로 선택가능
                </p>
              </li>
              <li>
                <AiOutlineMoneyCollect size="70" color="#0079cc" />
                <h3>ONE-STOP 통합서비스</h3>
                <p>
                  IDC, NW, 운영, 유지보수, 보안 등 사업 전반을 책임지는 통합
                  서비스 제공
                </p>
              </li>
              <li>
                <AiOutlineMoneyCollect size="70" color="#0079cc" />
                <h3>전문인력 24HX365D 감시</h3>
                <p>
                  검증된 최정예 전문 인력들이 IDC 상주, 1:1 전담 모니터링 및
                  기술지원
                </p>
              </li>
              <li>
                <AiOutlineMoneyCollect size="70" color="#0079cc" />
                <h3>최상의 운영관리 서비스</h3>
                <p>
                  ITIL 기반 ITSM 체계 도입으로 글로벌수준의 선진화된 운영 관리
                  실현
                </p>
              </li>
              <li>
                <AiOutlineMoneyCollect size="70" color="#0079cc" />
                <h3>최고 인프라 기반 제공</h3>
                <p>
                  KT IDC 내 전산인프라, 네트워크, 시스템 등 안전성 높은
                  프리미엄급 인프라 제공
                </p>
              </li>
              <li>
                <AiOutlineMoneyCollect size="70" color="#0079cc" />
                <h3>신뢰할 수 있는 안정성</h3>
                <p>
                  17년 운영노하우와 다양한 운영 레퍼런스 보유, 업계 최고의
                  신뢰성과 안정성 제공
                </p>
              </li>
            </BusinessAdvantages>
          </main>
        </div>
      </main>
    </Layout>
  );
}

function Process() {
  return (
    <section className={styles.business_service_process}>
      <div className="inner">
        <ul>
          <li>
            <div className={styles.image_box}></div>
            <h3>Step1. 환경분석, 컨설팅</h3>
          </li>
          <li>
            <div className={styles.image_box}></div>
            <h3>Step2. 상품안내, 제안</h3>
          </li>
          <li>
            <div className={styles.image_box}></div>
            <h3>Step3. 인프라 설계 및 구성</h3>
          </li>
          <li>
            <div className={styles.image_box}></div>
            <h3>Step4. 요구사항 견적산출</h3>
          </li>
        </ul>
        <p>
          *컨설팅 서비스와 계약진행, 제품 발주 및 납품, 구축, MSP 서비스는
          별도로 이용 가능합니다.
        </p>
      </div>
    </section>
  );
}
