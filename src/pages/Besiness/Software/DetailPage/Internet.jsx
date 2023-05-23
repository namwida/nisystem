import styles from "../Software/Software.module.css";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Description from "../../../../components/Business/Description/Description";

export default function Internet() {
  return (
    <main>
      <SectionTitle title="개요" />
      <BusinessOutline
        h3="안전한 공유 협업을 위한 클라우드 스토리지, 인터넷 디스크"
        p1="문서의 열람과 저장, 공유, 협업, 보안까지 편리하게!"
        p2="안전하고 원활한 업무 환경을 제공하는 구축형 프라이빗 클라우드 솔루션입니다."
        link="https://cdn1.estsecurity.com/brochure/internetdisk/ESTsecurity_Internetdisk_Brochure.pdf"
      />
      <SectionTitle title="특장점" />
      <Description>
        <li>
          <h3>다양한 접속 환경</h3>
          <ul>
            <li>최신 OS와 다양한 웹브라우저 지원</li>
            <li>한국어, 영어, 일어 UI 및 유니코드 지원</li>
            <li>모바일 전용 웹 제공</li>
          </ul>
        </li>
        <li>
          <h3>원활한 문서 공유와 협업</h3>
          <ul>
            <li>부서별/프로젝트별 디스크 생성 가능</li>
            <li>
              게스트폴더, 웹링크 기능으로 외부 협력업체와 원활한 자료 공유
            </li>
          </ul>
        </li>
        <li>
          <h3>편리한 사용 환경</h3>
          <ul>
            <li>웹/전용 탐색기, 윈도우탐색기 지원</li>
            <li>기존 업무 환경과 동일하게 문서 작업 가능</li>
          </ul>
        </li>
        <li>
          <h3>백업 및 유실 방지</h3>
          <ul>
            <li>관리자 지정 스케줄에 따라 사용자 PC를 주기적으로 백업</li>
            <li>
              정상 삭제한 파일도 관리자 복구 가능, 문서 유실 가능성 최소화
            </li>
          </ul>
        </li>
      </Description>
      <SectionTitle title="주요기능" />
      <section className={`${styles.features} inner`}>
        <h3>편리하고 안전한 업무환경을 지원하는 인터넷디스크</h3>
        <img
          src={`${process.env.PUBLIC_URL}/images/business/internetdisk_1.png`}
          alt="주요기능"
        />
      </section>
    </main>
  );
}
