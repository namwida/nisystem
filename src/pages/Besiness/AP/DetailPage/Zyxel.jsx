import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import {
  BsBroadcast,
  BsColumnsGap,
  BsHddStack,
  BsKey,
  BsShieldLock,
  BsTerminal,
} from "react-icons/bs";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";

export default function APZyxel() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="강력한 보안과 안정적인 무선 네트워크 서비스"
        p1="중소기업 대상의 네트워크·보안 장비 전문기업인 자이젤코리아는 각 산업분야별 구축사례가 다양하여 성공적인 무선 네트워크 구축을 할 수 있습니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsShieldLock />
            </div>
            <div>
              <h3>사용자 보안 위한 통합보안</h3>
              <p>
                카스퍼스키, 트렌드마이크로, 사이렌 등 글로벌 보안 기업의 엔진을
                통합보안 장비인 USG 시리즈에 탑재해 주 기적인 업데이트를 통해
                최신 보안 위협으로부터 빠르 고 정확한 실시간 보호 기능을 수행
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsBroadcast />
            </div>
            <div>
              <h3>무선 튜닝으로 신호 중첩·채널 간섭 최소화</h3>
              <p>
                ​주변 무선 네트워크 환경을 분석해 클라이언트의 위치에 따라
                안테나 패턴을 변경하는 고성능 AP와 한정된 공간 내에 설치되는 수
                많은 AP와 공유기로 인한 채널 중첩을 최소화하는 DCS(Dynamic
                Channel Selection) 기능을 제공
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsTerminal />
            </div>
            <div>
              <h3>긴밀한 현장 기술 지원 필수</h3>
              <p>
                실제 운용되고 있는 장비에서 지속적으로 방화 벽뿐 아니라 라우팅,
                NAT 등의 IP 및 경로에 대한 정책 적용 및 변경
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
