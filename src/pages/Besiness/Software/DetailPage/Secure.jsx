import styles from "../Software/Software.module.css";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import BusinessAdvantages from "../../../../components/Business/Advantages/Advantages";
import BusinessOutline from "../../../../components/Business/Outline/Outline";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Description from "../../../../components/Business/Description/Description";
import SectionTitle3 from "../../../../components/SectionTitle3/SectionTitle3";
import { BsBoundingBoxCircles, BsCollection, BsFileEarmarkLock, BsFileLock, BsHddStack } from "react-icons/bs";

export default function Secure() {
  return (
    <main>
      <SectionTitle3 title="개요" />
      <BusinessOutline
        h3="문서중앙화를 통해 내부 자료 유출방지 솔루션"
        p1="시큐어디스크는 사용자PC에 자료 저장을 금지시켜 내부자료 유출을 원천차단함과 동시에 문서중앙화와 업무효율성을 보장하는 전사적 파일보안 솔루션입니다."
        link="https://cdn1.estsecurity.com/brochure/securedisk/ESTsecurity_Securedisk_Brochure.pdf"
      />
      <BusinessAdvantages>
        <SectionTitle3 title="특장점" />
        <ul className="inner">
          <li>
            <div>
              <BsBoundingBoxCircles />
            </div>
            <div>
              <h3>내부 자료 유출 원천 차단</h3>
              <p>사용자 PC 자료를 중앙 서버로 자동 이관 및 저장</p>
            </div>
          </li>
          <li>
            <div>
              <BsFileLock />
            </div>
            <div>
              <h3>서버 및 전송 구간 암호화</h3>
              <p>물리적인 디스크 유출 또는 해킹에 의한 데이터 유출 방지</p>
            </div>
          </li>
          <li>
            <div>
              <BsCollection />
            </div>
            <div>
              <h3>문서의 버전 관리 및 복원</h3>
              <p>랜섬웨어 감염, 사용자 실수 또는 변경/삭제된 파일 복원</p>
            </div>
          </li>
        </ul>
      </BusinessAdvantages>
      <SectionTitle3 title="주요기능" />
      <section className={`${styles.features} inner`}>
        <h3>문서중앙화로 자료 유출 및 유실 원천 차단</h3>
        <img
          src={`${process.env.PUBLIC_URL}/images/business/securedisk_1.png`}
          alt="주요기능"
        />
      </section>
    </main>
  );
}
