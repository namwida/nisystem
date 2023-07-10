import styles from "../Software/Software.module.css";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Description from "../../../../components/Business/Description/Description";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsFilePlus, BsGlobe, BsHddNetwork, BsHddStack } from "react-icons/bs";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";

export default function Internet() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="안전한 공유 협업을 위한 클라우드 스토리지, 인터넷 디스크"
        p1="문서의 열람과 저장, 공유, 협업, 보안까지 편리하게!"
        p2="안전하고 원활한 업무 환경을 제공하는 구축형 프라이빗 클라우드 솔루션입니다."
        link="https://cdn1.estsecurity.com/brochure/internetdisk/ESTsecurity_Internetdisk_Brochure.pdf"
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsGlobe />
            </div>
            <div>
              <h3>다양한 접속 환경</h3>
              <p>최신 OS와 다양한 웹브라우저 지원</p>
            </div>
          </li>
          <li>
            <div>
              <BsFilePlus />
            </div>
            <div>
              <h3>원활한 문서 공유와 협업</h3>
              <p>부서별/프로젝트별 디스크 생성 가능</p>
            </div>
          </li>
          <li>
            <div>
              <BsHddNetwork />
            </div>
            <div>
              <h3>백업 및 유실 방지</h3>
              <p>관리자 지정 스케줄에 따라 사용자 PC를 주기적으로 백업</p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
      <SectionTitle3 title="주요기능" />
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
