import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import HomeAbout from "../About/About";
import HomeBanner from "../Banner/Banner";
import HomeBusiness from "../Business/Business";
import HomeCompany from "../Company/Company";
import styles from "./Main.module.css";
import Homereference2 from "../Reference/Reference2";

export default function HomeMain() {
  return (
    <>
      <Header />
      <main className={styles.home_main}>
        <HomeBanner />
        <HomeAbout />
        {/* <HomeReference /> */}
        <Homereference2 />
        <HomeBusiness />
        <HomeCompany />
      </main>
      <Footer />
    </>
  );
}
