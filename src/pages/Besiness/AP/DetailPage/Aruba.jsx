import { AiOutlineMoneyCollect } from "react-icons/ai";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import BusinessComponent from "../../../../components/Business/Component/Component";
import Model from "../../../../components/Business/Model/Model";
import BusinessModelBest from "../../../../components/Business/Model/Best/Best";
import BusinessModelDatasheet from "../../../../components/Business/Model/Datasheet/Datasheet";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsCloudPlus, BsCodeSquare, BsColumnsGap, BsDeviceSsd } from "react-icons/bs";

export default function APAruba() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="Wi-Fi 6를 지원하는 고성능 보안 엔터프라이즈 무선 LAN"
        p1="보안, 안정성, 성능을 저해하지 않고 이 모든 목표를 달성합니다. 
        Wi-Fi 6 자격증 및 이전 Wi-Fi 세대와의 상호운용성이 특징입니다. 모든 사용자와 디바이스 전반에 걸쳐 향상된 성능 및 용량, 더 큰 AIOps 가시성을 제공합니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsCloudPlus />
            </div>
            <div>
              <h3>클라우드 관리형 네트워크의 편의성</h3>
              <p>
                Aruba ESP 및 Aruba Central을 사용해 효율성, 확장성, 안정성을
                높여 보세요. IT는 클라우드 네이티브 기능과 중앙집중식 관리에
                힘입어 유선, 무선, WAN 아키텍처 전반에 걸친 가시성을 단일 창에서
                확보할 수 있습니다
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsCodeSquare />
            </div>
            <div>
              <h3>AI 기반의 네트워크 운영</h3>
              <p>
                AIOps로 네트워크 운영의 효율성 및 효과를 향상하세요. Aruba
                AIOps는 기계 학습을 적용해 문제를 미리 파악하고, 교정 조치를
                권장하며, 서비스 보증을 제공합니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsDeviceSsd />
            </div>
            <div>
              <h3>지능형 에지를 위한 보안</h3>
              <p>
                아루바의 제로 트러스트 보안 모델은 역할 기반의 정책 시행 방화벽
                및 동적 세분화로 위험을 줄여 줍니다. Wi-Fi 6 표준을 지원하여 더
                나은 사용자 및 게스트 암호화를 제공합니다.
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
