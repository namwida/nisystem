import { AiOutlineMoneyCollect } from "react-icons/ai";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import BusinessComponent from "../../../../components/Business/Component/Component";
import Model from "../../../../components/Business/Model/Model";
import BusinessModelBest from "../../../../components/Business/Model/Best/Best";
import BusinessModelDatasheet from "../../../../components/Business/Model/Datasheet/Datasheet";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsColumnsGap, BsFilePost, BsHdd, BsHddStack, BsIntersect } from "react-icons/bs";

export default function APFortinet() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="보안 무선 액세스 포인트"
        p1="사무실이나 야외에서 무선 액세스가 필요한 순간에 FortiAP는 고급 기술을 바탕으로 빠르고 안정적인 성능을 제공하여 사용자가 필요할 때 어디서나 유연하게 업무를 처리하도록 지원합니다. 심층 통합과 자동화를 통해 전체적인 가시성과 보안을 기본으로 제공하므로 중앙 집중식 관리, 제로 터치 배포, 통합 네트워크 액세스 제어와 같은 이점을 지닌 진정한 통합 플랫폼을 추가 비용 없이 이용하실 수 있습니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsHdd />
            </div>
            <div>
              <h3>빠르고 안정적인 무선 지원</h3>
              <p>
                802.11ax Wi-Fi 6 및 OFDMA 기술, 2x2, 4x4 및 8x8 MIMO 모델을 통해
                애플리케이션에 최적의 가성비 제공
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsIntersect />
            </div>
            <div>
              <h3>보안 확장</h3>
              <p>
                ​WIPS/WIDS를 사용하여 IPS 및 IDS 보호를 무선으로 확장, 비인가 AP
                탐지 및 마이그레이션으로 무단 액세스 차단
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsFilePost />
            </div>
            <div>
              <h3>성장 속도에 맞춰 간편하게 확장</h3>
              <p>
                중앙 집중식 관리와 제로 터치 배포 및 프로비저닝을 통해 배포,
                보고 및 유지관리 단순화
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
