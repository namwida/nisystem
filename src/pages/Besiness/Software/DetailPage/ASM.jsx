import styles from "../Software/Software.module.css";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import Description from "../../../../components/Business/Description/Description";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";

export default function ASM() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="기업 통합 보안 관리의 중심, ASM"
        p1="ASM(ALYac Security Manager)은 관리자가 기업 내 알약 제품군이 설치된 PC에 대한 통합적인 보안 관리 및 자산관리, 보안 정책 적용을 수행하도록 하는 통합 중앙 관리 솔루션입니다."
      />
      <SectionTitle3 title="특장점" />
      <Description>
        <li>
          <h3>효율적인 사내 보안 통합 관리</h3>
          <ul>
            <li>
              ESTsecurity의 다양한 엔드포인트 제품과 ASM의 연동을 통한 통합 관리
              가능
            </li>
            <li>
              통합 관리 플랫폼(통합 콘솔) 사용으로 위협 발생 시 중앙에서 신속한
              조치 및 대응 가능
            </li>
            <li>
              악성코드 방역및 치료, 보안 업데이트, 패치, 취약점 점검 및 조치 등
              다양한 운영&관리 가능
            </li>
          </ul>
        </li>
        <li>
          <h3>보안 강화와 비용 절감을 한 번에</h3>
          <ul>
            <li>기업 상황에 맞는 엔드포인트 통합 보안 솔루션 라인 구축 가능</li>
            <li>기업 보안 담당 관리자의 엔드포인트 보안 관리 부담 최소화</li>
            <li>기업의 생산성과 업무 효율 증대</li>
          </ul>
        </li>
        <li>
          <h3>기업 정보 유출 사전 차단</h3>
          <ul>
            <li>사내 사용자 모니터링, 정책 적용, 인적 지원 가능</li>
            <li>매체 제어 정책을 통한 사내 각종 USB 기반 장치의 모니터링</li>
            <li>IT 자산관리 및 미 허가 소프트웨어 통제</li>
          </ul>
        </li>
        <li>
          <h3>뛰어난 사용성</h3>
          <ul>
            <li>
              조직도 상시 노출 등 직관적인 작업 및 정책 명령 프로세스 지원
            </li>
            <li>한눈에 들어오는 직관적이고 깔끔한 디자인</li>
            <li>추가 보안 제품 구축에 대한 확장성이 고려된 관리 콘솔 UI</li>
          </ul>
        </li>
      </Description>
      <SectionTitle3 title="주요기능" />
      <section className={`${styles.features} inner`}>
        <h3>기업 내 통합 보안관리 체계 구축</h3>
        <img
          src={`${process.env.PUBLIC_URL}/images/business/asm_1.png`}
          alt="주요기능"
        />
      </section>
    </main>
  );
}
