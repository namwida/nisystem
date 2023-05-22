import { AiOutlineMoneyCollect } from "react-icons/ai";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import BusinessComponent from "../../../../components/Business/Component/Component";
import Model from "../../../../components/Business/Model/Model";
import BusinessModelBest from "../../../../components/Business/Model/Best/Best";
import BusinessModelDatasheet from "../../../../components/Business/Model/Datasheet/Datasheet";

export default function APZyxel() {
  return (
    <main>
      <SectionTitle title="개요" />
      <BusinessOutline
        h3="APZyxel APZyxel APZyxel APZyxel"
        p1="Fortinet은 원격 사무실, 지사, 캠퍼스, 데이터 센터 및 클라우드 등 모든
            위치로 확장할 수 있는 완벽한 컨버전스를 제공하는 보안 네트워킹의
            선구자입니다."
        p2="FortiGate는 FortiOS Everywhere의 핵심으로, 컨테이너 방화벽, 가상 방화벽 및 어플라이언스를 포함한 다양한 폼 팩터에서 심도 깊은 가시성과 보안을 제공합니다."
      />
      <SectionTitle title="특장점" />
      <BusinessAdvantages>
        <li>
          <AiOutlineMoneyCollect size="70" color="#0079cc" />
          <h3>HDD&RAM</h3>
          <p>
            서버 내 하드디스크의 사용량 및 현재 가용중인 메모리를 한눈에
            파악하며, 보다 원활한 시스템관리를 지원합니다.
          </p>
        </li>
        <li>
          <AiOutlineMoneyCollect size="70" color="#0079cc" />
          <h3>Load average</h3>
          <p>
            시스템 부하상태를 나타내는 로드에버리지를 실시간으로 측정해 언제든
            시스템의 부하량을 모니터링 합니다.
          </p>
        </li>
        <li>
          <AiOutlineMoneyCollect size="70" color="#0079cc" />
          <h3>CPU&Ping</h3>
          <p>
            CPU의 사용량 및 가용량을 체크합니다. 또한 PING체크를 통하여 서비스의
            네트워크 환경을 체크합니다.
          </p>
        </li>
      </BusinessAdvantages>
      <SectionTitle title="성능 및 주요기능" />
      <BusinessComponent>
        <div>
          <h3>네트워크 전반의 가시성을 향상하여 위협 탐지 강화</h3>
          <div>
            <ul>
              <li>
                클라이언트 간, 서버 간, 클라이언트-서버간 트래픽을 비롯한 모든
                네트워크 상호작용을 통해 가시성을 확보하여 내부 위협과 외부
                위협을 모두 탐지
              </li>
              <li>
                강화된 보안 분석을 수행하고 심층적인 컨텍스트를 확보하여 공격을
                의미할 수 있는 다양한 이상 행동 탐지
              </li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/images/rout.png`} alt="" />
          </div>
        </div>
        <div>
          <h3>네트워크 전반의 가시성을 향상하여 위협 탐지 강화</h3>
          <div>
            <ul>
              <li>
                클라이언트 간, 서버 간, 클라이언트-서버간 트래픽을 비롯한 모든
                네트워크 상호작용을 통해 가시성을 확보하여 내부 위협과 외부
                위협을 모두 탐지
              </li>
              <li>
                강화된 보안 분석을 수행하고 심층적인 컨텍스트를 확보하여 공격을
                의미할 수 있는 다양한 이상 행동 탐지
              </li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/images/rout.png`} alt="" />
          </div>
        </div>
        <div>
          <h3>지속적인 네트워크 트래픽 분석</h3>
          <div>
            <ul>
              <li>
                네트워크 활동에 대한 감사 기록을 통해 심층적인 포렌식 조사 지원
              </li>
              <li>
                전체 네트워크에서 위협 탐지, 사고 대응, 포렌식 가속화 및 향상
              </li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/images/rout.png`} alt="" />
          </div>
        </div>
      </BusinessComponent>
      <SectionTitle title="모델 및 사용" />
      <Model>
        <thead>
          <tr>
            <th>모델명</th>
            <th>이미지</th>
            <th>방화벽</th>
            <th>위협보호</th>
            <th>인터페이스</th>
            <th>인터페이스</th>
            <th>인터페이스</th>
            <th>인터페이스</th>
            <th>데이터시트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <BusinessModelBest />
              FortiGate 200F
            </th>
            <td>
              <img
                src={`${process.env.PUBLIC_URL}/images/fortinet.jpg`}
                alt=""
              />
            </td>
            <td>20Gbps</td>
            <td>1.2Gbps</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>
              <BusinessModelDatasheet />
            </td>
          </tr>
          <tr>
            <th>FortiGate 80F</th>
            <td>
              <img
                src={`${process.env.PUBLIC_URL}/images/fortinet.jpg`}
                alt=""
              />
            </td>
            <td>20Gbps</td>
            <td>1.2Gbps</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>
              <BusinessModelDatasheet />
            </td>
          </tr>
          <tr>
            <th>
              <BusinessModelBest />
              FortiGate 70F
            </th>
            <td>
              <img
                src={`${process.env.PUBLIC_URL}/images/fortinet.jpg`}
                alt=""
              />
            </td>
            <td>20Gbps</td>
            <td>1.2Gbps</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>복수의 GE RJ45, GE SFP 슬롯</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </Model>
    </main>
  );
}
