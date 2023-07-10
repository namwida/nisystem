import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import {
  BsBroadcastPin,
  BsDatabaseLock,
  BsShieldShaded,
  BsSliders,
  BsSubtract,
} from "react-icons/bs";

export default function SwitchCisco() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="안전하고 지속 가능한 하이브리드 업무 수요 충족"
        p1="탁월한 경험을 제공하고 인재와 혁신을 유도하여 경쟁 우위를 확보하십시오. 시스코의 기존 스위치 제품 및 신제품으로 이 모두가 가능합니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="제품 특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsSliders />
            </div>
            <div>
              <h3>맞춤형 옵션 선택</h3>
              <p>
                비즈니스에 적합한 스위치를 통해 업무를 보다 빠르고 스마트하며
                안전하게 수행할 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsDatabaseLock />
            </div>
            <div>
              <h3>인사이트에 기반한 보호</h3>
              <p>
                내장형 보안 기능 및 사전 예방적인 운영을 통해 끊임없이 진화하는
                위협에 한발 앞서갈 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsSubtract />
            </div>
            <div>
              <h3>미래에 대한 대비</h3>
              <p>
                ASIC부터 OS까지 미래의 요구 사항과 전체 스택에 걸친 모델 기반
                프로그램 가능성에 맞게 유연하게 확장할 수 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
