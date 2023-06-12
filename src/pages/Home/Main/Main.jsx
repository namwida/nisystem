import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import HomeAbout from "../About/About";
import HomeBanner from "../Banner/Banner";
import HomeBusiness from "../Business/Business";
import HomeCompany from "../Company/Company";
import styles from "./Main.module.css";
import Homereference2 from "../Reference/Reference2";
import HomeBusiness2 from "../Business2/Business2";
import Customer from "../Customer/Customer";

export default function HomeMain() {
  return (
    <>
      <Header />
      <main className={styles.home_main}>
        <HomeBanner />
        {/* <HomeAbout /> */}
        {/* <HomeReference /> */}
        <HomeBusiness2 />
        <Homereference2 />
        <Customer />
        {/* <HomeBusiness /> */}
        {/* <HomeCompany /> */}
      </main>
      <Footer />
    </>
  );
}
