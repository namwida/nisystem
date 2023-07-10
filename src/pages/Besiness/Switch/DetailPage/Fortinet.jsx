import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import {
  BsMenuButtonWide,
  BsOctagonHalf,
  BsPcHorizontal,
  BsViewList,
  BsWindowFullscreen,
  BsXDiamond,
} from "react-icons/bs";

export default function SwitchFortinet() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="FortiSwitch는 안전하고 단순하며 확장 가능한 이더넷 솔루션을 제공"
        p1="Fortinet의 네트워킹 및 보안 융합은 이더넷은 FortiSwitch 및 FortiLink를 통해 보안 인프라의 확장을 지원합니다. FortiSwitch는 추가 라이선스 없이 NAC를 포함한 다양한 기능을 간단하게 배포하고 관리할 수 있습니다. 안전하고 단순한 확장형 이더넷 스위치로 구성된 폭넓은 포트폴리오는 캠퍼스, SD-Branch 및 데이터 센터에 적합합니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsOctagonHalf />
            </div>
            <div>
              <h3>보안 패브릭 통합</h3>
              <p>
                보안 패브릭 보호를 이더넷 액세스 계층으로 확장하는 FortiLink
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsPcHorizontal />
            </div>
            <div>
              <h3>제로 터치 프로비저닝</h3>
              <p>이더넷 포트 & 보안 정책의 자동 검색 및 구성</p>
            </div>
          </li>
          <li>
            <div>
              <BsMenuButtonWide />
            </div>
            <div>
              <h3>높은 확장성</h3>
              <p>
                1, 10, 100 & 다중 기가 이더넷 포트 & 데스크톱에서 데이터
                센터까지 최대 100개의 GE 업링크 확장
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsWindowFullscreen />
            </div>
            <div>
              <h3>탁월한 가시성</h3>
              <p>
                장치 감지 & 온보딩을 포함한 보안 & 네트워크 액세스의 단일 콘솔
                관리
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsViewList />
            </div>
            <div>
              <h3>POE 및 자동 프로비저닝</h3>
              <p>
                FortiLink NAC를 통한 차세대 802.3bt POE & 무료 IoT
                프로비저닝으로 네트워크 & IoT 장치에 전력 공급
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsXDiamond />
            </div>
            <div>
              <h3>가상 스태킹</h3>
              <p>
                FortiLink는 FortiGate 모델 기준으로 최대 300개의 스위치를
                관리하여 IDF 전반에 걸쳐 스태킹 가능
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
