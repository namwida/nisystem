import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import PageTitle from "../../../components/PageTitle/PageTitle";
import styles from "./Client.module.css";

export default function AboutClient() {
  return (
    <>
      <Header />
      <section className={styles.about_client}>
        <PageHeader
          title="고객사"
          destription="엔아이시스템은 신뢰와 약속을 바탕으로 다양한 분야에서 여러 기업들과 Partnership을 맺고 사업을 진행하고 있습니다."
        />
        <div className={`${styles.inner} inner`}>
          <div className={styles.domestic}>
            <PageTitle title="국내" />
            <h3>항공사 / IT기업</h3>
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
            <h3>공공기관 / 의료기관</h3>
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
            </ul>
            <h3>통신사 / 제조업</h3>
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
          </div>
          <div className={styles.overseas}>
            <PageTitle title="해외" />
            <h3>IT기업</h3>
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
        </div>
      </section>
      <Footer />
    </>
  );
}
