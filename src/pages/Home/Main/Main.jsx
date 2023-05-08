import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import HomeAbout from "../About/About";
import HomeBanner from "../Banner/Banner";
import HomeBusiness from "../Business/Business";
import HomeCompany from "../Company/Company";
import styles from "./Main.module.css";
import HomeReference from "../Reference/Reference";

export default function HomeMain() {
  return (
    <>
      <Header />
      <main className={styles.home_main}>
        <HomeBanner />
        <HomeAbout />
        <HomeReference />
        <HomeBusiness />
        <HomeCompany />
      </main>
      <Footer />
    </>
  );
}
