import styles from "../Software/Software.module.css";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsBox2, BsHddStack, BsLayoutTextWindowReverse, BsLock, BsMenuButtonWide } from "react-icons/bs";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";

export default function ASM() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="기업 통합 보안 관리의 중심, ASM"
        p1="ASM(ALYac Security Manager)은 관리자가 기업 내 알약 제품군이 설치된 PC에 대한 통합적인 보안 관리 및 자산관리, 보안 정책 적용을 수행하도록 하는 통합 중앙 관리 솔루션입니다."
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsLayoutTextWindowReverse />
            </div>
            <div>
              <h3>효율적인 사내 보안 통합 관리</h3>
              <p>
                ESTsecurity의 다양한 엔드포인트 제품과 ASM의 연동을 통한 통합
                관리 가능
              </p>
            </div>
          </li>
          <li>
            <div>
              <BsLock />
            </div>
            <div>
              <h3>보안 강화와 비용 절감을 한 번에</h3>
              <p>기업 상황에 맞는 엔드포인트 통합 보안 솔루션 라인 구축 가능</p>
            </div>
          </li>
          <li>
            <div>
              <BsBox2 />
            </div>
            <div>
              <h3>기업 정보 유출 사전 차단</h3>
              <p>사내 사용자 모니터링, 정책 적용, 인적 지원 가능</p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
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
