import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsCloudCheck, BsGlobe, BsHddRack, BsLaptop } from "react-icons/bs";

export default function SwitchExtreme() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="Extreme의 범용 유선 포트폴리오로 위험 감소 및 운영 단순화"
        p1="계획, 설계, 구현 및 운영에서 유연한 파이낸싱, 고객 최고 등급 지원 및 라이프 사이클 서비스를 통해 네트워크를 단순화하고 최적화하십시오."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsLaptop />
            </div>
            <div>
              <h3>만능인</h3>
              <p>
                기술 종속을 피하면서 새로운 사용 사례를 허용하는 소프트웨어 선택
                가능 운영 체제와 함께 최신 엔터프라이즈급 Wi-Fi 6E 기술로
                민첩성을 높입니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsCloudCheck />
            </div>
            <div>
              <h3>원하는 방식으로 클라우드 관리</h3>
              <p>
                업계 최고의 스위치 및 라우터를 전체 유선 및 유선 네트워크의 배포
                및 모니터링을 간소화하는 로컬, 클라우드 및 하이브리드 관리
                옵션과 결합합니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsHddRack />
            </div>
            <div>
              <h3>자동화</h3>
              <p>
                사용자와 장치가 네트워크에 연결될 때 네트워크 서비스의 동적
                프로비저닝을 통해 운영을 자체 구성하고 자동화하는 패브릭
                네트워크로 적은 비용으로 더 많은 작업을 수행하십시오.
              </p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
    </main>
  );
}
