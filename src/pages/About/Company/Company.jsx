import { AiOutlineSafety, AiTwotoneIdcard } from "react-icons/ai";
import { BsAward, BsGlobeAmericas, BsHandThumbsUp, BsHexagonHalf } from "react-icons/bs";
import Layout from "../../../components/Layout/Layout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Company.module.css";

export default function AboutCompany() {
  return (
    <Layout>
      <PageHeader
        gnbname="about"
        title="엔아이시스템 소개"
        destription="Network 전문인력을 통해 전문화된 서비스를 제공합니다."
      />
      <main className={styles.about_company}>
        <OutlineSection />
        <MissionAndVisionSection />
      </main>
    </Layout>
  );
}

function OutlineSection() {
  return (
    <>
      <SectionTitle title="개요" />
      <section className={`${styles.outline_section} inner`}>
        <table>
          <tr>
            <th>회사명</th>
            <td>㈜엔아이시스템</td>
          </tr>
          <tr>
            <th>사업분야</th>
            <td>네트워크보안 시스템 구축 및 운용 유지</td>
          </tr>
          <tr>
            <th>설립일</th>
            <td>2021년 12월</td>
          </tr>
          <tr>
            <th>대표전화</th>
            <td>1666-2869</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              경기도 의왕시 성고개로 53, A동 805호 (포일동, 에이스청계타워)
            </td>
          </tr>
        </table>
        {/* <p>
          ㈜엔아이시스템의 홈페이지를 찾아주셔서 감사합니다. ㈜엔아이시스템은
          2021년 12월에 설립하여 최고의 네트워크보안 기술력으로 보안시스템의
          구축과 컨설팅을 제공하는 정보보안 전문기업 입니다. 2000년부터 방화벽,
          침입탐지시스템으로 시작했던 베테랑을 비롯하여 10여년이상의 숙력된
          인력이 네트워크보안의 핵심 운영노하우를 접목하여 국내외 00여개 기업에
          정보보안 서비스를 제공하고 있습니다.
        </p>
        <p>
          ‘행복한 기업문화’, ‘혁신적 사고’, ‘공정한 분배’를 바탕으로 고객과
          직원의 가치를 최우선으로 생각하며, 모든 임직원은 열정과 신뢰를
          바탕으로 최고의 서비스를 약속 드립니다. ‘행복한 기업문화’, ‘혁신적
          사고’, ‘공정한 분배’를 바탕으로 고객과 직원의 가치를 최우선으로
          생각하며, 모든 임직원은 열정과 신뢰를 바탕으로 최고의 서비스를 약속
          드립니다.
        </p> */}
      </section>
    </>
  );
}

function MissionAndVisionSection() {
  return (
    <>
      <SectionTitle title="미션 및 비전" />
      <section>
        <div className={styles.mission_box}>
          <div className="inner">
            <h3>미션</h3>
            <p>
              전문성있는 네트워크 기술로
              <br /> 모두에게 가치있는 경험을 제공한다
            </p>
            <p>
              With professional network technology
              <br /> provide a valuable experience for everyone
            </p>
          </div>
        </div>
        <div className={`${styles.vision_box} inner`}>
          <h3>비전</h3>
          <p className={styles.destription_ko}>
            누구나 함께 일하고 싶어하는
            <br /> 최고의 네트워크 기업
          </p>
          <p className={styles.destription_en}>
            The best network company
            <br /> anyone wants to work with
          </p>
          <ul className={styles.item_list}>
            <li>
              <div className={styles.vision_image_box}>
                <BsAward size="70"/>
              </div>
              <div className={styles.vision_test_box}>
                <p>전문성</p>
                <p>고객의 성공을 위해 최고의 기술에 집중한다.</p>
              </div>
            </li>
            <li>
              <div className={styles.vision_image_box}>
                <BsHexagonHalf size="70" />
              </div>
              <div className={styles.vision_test_box}>
                <p>신뢰성</p>
                <p>누구나 믿고 맡길 수 있는 기업이 되도록 노력한다.</p>
              </div>
            </li>
            <li>
              <div className={styles.vision_image_box}>
                <BsGlobeAmericas size="70" />
              </div>
              <div className={styles.vision_test_box}>
                <p>도전성</p>
                <p>핵심 분야에서 최고 수준의 전문가로 성장한다.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}