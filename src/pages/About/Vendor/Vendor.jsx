import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Vendor.module.css";

export default function AboutVendor() {
  return (
    <>
      <Header />
      <main className={styles.about_vendor}>
        <PageHeader
          title="협력사"
          destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야에서 여러 기업들과 Partnership을 맺고 사업을 진행하고 있습니다."
        />
        <div className={`${styles.inner} inner`}>
          <h3>Firewall</h3>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
          </ul>
          <h3>Switch</h3>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
          </ul>
          <h3>AP</h3>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
          </ul>
          <h3>Software</h3>
          <ul>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/eastar_logo.png`}
                alt=""
              />
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
