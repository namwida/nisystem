import { AiOutlineSafety, AiTwotoneIdcard } from "react-icons/ai";
import {
  BsAward,
  BsGlobeAmericas,
  BsHandThumbsUp,
  BsHexagonHalf,
} from "react-icons/bs";
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
          <div className={`${styles.inner} inner`}>
            <div className={styles.mission}>
              <h3>Mission</h3>
              <p className={styles.destription_ko}>
                전문성있는 네트워크 기술로<br/> 모두에게 가치있는 경험을 제공
              </p>
              <p className={styles.destription_en}>
                With professional network technology provide<br/> a valuable
                experience for everyone
              </p>
            </div>
            <div className={styles.vision}>
              <h3>Vision</h3>
              <p className={styles.destription_ko}>
                누구나 함께 일하고 싶어하는<br/> 최고의 네트워크 기업
              </p>
              <p className={styles.destription_en}>
                The best network company<br/> anyone wants to work with
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.vision_box} inner`}>
          {/* <ul className={styles.item_list}>
            <li>
              <div className={styles.vision_image_box}>
                <BsAward size="70" />
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
          </ul> */}
        </div>
      </section>
    </>
  );
}
