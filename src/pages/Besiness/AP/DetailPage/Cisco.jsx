import { AiOutlineMoneyCollect } from "react-icons/ai";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import BusinessComponent from "../../../../components/Business/Component/Component";
import Model from "../../../../components/Business/Model/Model";
import BusinessModelBest from "../../../../components/Business/Model/Best/Best";
import BusinessModelDatasheet from "../../../../components/Business/Model/Datasheet/Datasheet";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsColumnsGap, BsDiagram3, BsDisplay, BsGlobe, BsJournalCheck, BsLayersHalf } from "react-icons/bs";

export default function APCisco() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="바로 지금 경험하는 무선 네트워크의 미래"
        p1="하이브리드 환경에서는 더 유능한 무선 솔루션이 필요합니다. 지금 더 빠른 속도와 네트워크 보안을 적용하고, 더 쉬운 관리를 시작하세요."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsColumnsGap />
            </div>
            <div>
              <h3>AI/ML 인텔리전스</h3>
              <p>
                인공 지능 및 머신러닝으로 실시간 인사이트를 확보함으로써
                네트워크를 최적화하고 효율성을 높일 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsDisplay />
            </div>
            <div>
              <h3>잠들지 않는 보안</h3>
              <p>​상시 네트워크 모니터링이 이루어지므로 안심하세요.</p>
            </div>
          </li>
          <li>
            <div>
              <BsDiagram3 />
            </div>
            <div>
              <h3>어떤 디바이스와도 연결</h3>
              <p>
                IoT 디바이스 분류, 세그멘테이션, 가시성, 관리 기능으로 완전한
                Wi-Fi 6/6E 연결을 경험하세요.
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
