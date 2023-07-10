import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsGlobe, BsJournalCheck, BsLayersHalf } from "react-icons/bs";

export default function SwitchZyxel() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="별도의 추가 장비 없이 차세대 네트워크 환경으로 빠른 확장이 가능"
        p1="단일 장애점(SPOF)이 없는 시스템 구성, IEEE 802.3at Poe 지원, 다양한 보안기능을 지원합니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="제품 특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsGlobe />
            </div>
            <div>
              <h3>네트워크 안정성</h3>
              <p>
                스태킹 기술은 링 구조로 구성 가능하기 때문에 특정 포트의 장애
                상황에도 정상적인 스태킹 구성을 유지하여 안정성 있는 네트워크
                서비스를 제공합니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsLayersHalf />
            </div>
            <div>
              <h3>고급 라우팅 기술</h3>
              <p>
                XGS4600 시리즈는 RIP, RIPv2, OSPF 및 ECMP 등 최대 통신속도를
                지원할 수 있는 최신 IP라우팅을 기술을 적용하였습니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsJournalCheck />
            </div>
            <div>
              <h3>편리한 스위치 접근 관리</h3>
              <p>
                네트워크 관리자는 단일 IP 주소로 편리하게 여러 스위치를 관리할
                수 있어 추가 관리에 필요한 시간과 유지보수 비용을 절감할 수
                있습니다.
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
