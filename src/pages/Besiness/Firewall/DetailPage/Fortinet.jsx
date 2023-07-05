import styles from "./Fortinet.module.css";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";

export default function FirewallFortinet() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="FortiGate는 하이브리드 메시 방화벽에 대한 통합 관리를 갖춘 유일한 NGFW(차세대 방화벽)입니다."
        p1="FortiGate는 원격 사무실, 지사, 캠퍼스, 데이터 센터 및 클라우드 등 모든 위치에 확장할 수 있는 완벽한 컨버전스를 제공합니다. Fortinet는 복잡한 하이브리드 환경에서 통합 관리 및 일관된 보안을 위해 FortiManager를 통해 항상 하이브리드 메시 방화벽의 개념을 제공해 왔습니다. Fortinet FortiOS 운영 체제는 다양한 폼 팩터에서 심도 깊은 가시성과 보안을 제공합니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="제품 특장점" />
        <ul className="inner">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/business/firewall/icon-benefits-fortios.svg`}
              alt="컨버전스 특수문자"
            />
            <div>
              <h3>컨버전스</h3>
              <p>
                하나의 단일 운영 체제는 모든 폼 팩터와 에지에 걸쳐 통합 네트워킹
                및 보안을 제공합니다.
              </p>
            </div>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/business/firewall/icon-asic.svg`}
              alt="가속화 특수문자"
            />
            <div>
              <h3>가속화</h3>
              <p>
                특허받은 ASIC 아키텍처로 성능 향상, ROI 향상, 전력 소비 감소
              </p>
            </div>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/business/firewall/icon-labs-green.svg`}
              alt="ai/ml 특수문자"
            />
            <div>
              <h3>AI/ML 보안</h3>
              <p>
                FortiGuard 글로벌 위협 인텔리전스는 알려진 위협과 알려지지 않은
                위협에 대한 자동 보호 기능을 제공합니다.
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
