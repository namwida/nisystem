import "./App.css";
import "./styles/common.css";
import "./styles/reset.css";
import "./styles/variable.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeMain from "./pages/Home/Main/Main";
import AboutCompany from "./pages/About/Company/Company";
import AboutMessage from "./pages/About/Message/Message";
import AboutHistory from "./pages/About/History/History";
import AboutClient from "./pages/About/Client/Client";
import AboutVendor from "./pages/About/Vendor/Vendor";
import AboutLocation from "./pages/About/Location/Location";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./ScrollToTop";
import Firewall from "./pages/Besiness/Firewall/Firewall/Firewall";
import AP from "./pages/Besiness/AP/AP/AP";
import Consulting from "./pages/Besiness/Consulting/Consulting";
import Software from "./pages/Besiness/Software/Software/Software";
import Switch from "./pages/Besiness/Switch/Switch/Switch";
import MSP from "./pages/Besiness/MSP/MSP";
import Customer from "./pages/Customer/Customer";
import Employment from "./pages/Employment/Employment";
import FirewallFortinet from "./pages/Besiness/Firewall/DetailPage/Fortinet";
import SwitchCisco from "./pages/Besiness/Switch/DetailPage/Cisco";
import SwitchExtreme from "./pages/Besiness/Switch/DetailPage/Extreme";
import SwitchFortinet from "./pages/Besiness/Switch/DetailPage/Fortinet";
import SwitchZyxel from "./pages/Besiness/Switch/DetailPage/Zyxel";
import APCisco from "./pages/Besiness/AP/DetailPage/Cisco";
import APFortinet from "./pages/Besiness/AP/DetailPage/Fortinet";
import APZyxel from "./pages/Besiness/AP/DetailPage/Zyxel";
import APAruba from "./pages/Besiness/AP/DetailPage/Aruba";
import ASM from "./pages/Besiness/Software/DetailPage/ASM";
import Secure from "./pages/Besiness/Software/DetailPage/Secure";
import Internet from "./pages/Besiness/Software/DetailPage/Internet";
import Partner from "./pages/About/Partner/Partner";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomeMain />} />
        {/* 회사소개 */}
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/message" element={<AboutMessage />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/partner" element={<Partner />} />
        <Route path="/about/client" element={<AboutClient />} />
        <Route path="/about/vendor" element={<AboutVendor />} />
        <Route path="/about/location" element={<AboutLocation />} />
        {/* 사업소개 */}
        <Route path="/business/firewall" element={<Firewall />}>
          <Route path="fortinet" element={<FirewallFortinet />} />
        </Route>
        <Route path="/business/switch" element={<Switch />}>
          <Route path="cisco" element={<SwitchCisco />} />
          <Route path="extreme" element={<SwitchExtreme />} />
          <Route path="fortinet" element={<SwitchFortinet />} />
          <Route path="zyxel" element={<SwitchZyxel />} />
        </Route>
        <Route path="/business/ap" element={<AP />}>
          <Route path="cisco" element={<APCisco />} />
          <Route path="fortinet" element={<APFortinet />} />
          <Route path="zyxel" element={<APZyxel />} />
          <Route path="aruba" element={<APAruba />} />
        </Route>
        <Route path="/business/est" element={<Software />}>
          <Route path="asm" element={<ASM />} />
          <Route path="secure" element={<Secure />} />
          <Route path="internet" element={<Internet />} />
        </Route>
        <Route path="/business/consulting" element={<Consulting />} />
        <Route path="/business/msp" element={<MSP />} />
        {/* 고객문의 */}
        <Route path="/customer" element={<Customer />} />
        {/* 채용 */}
        <Route path="/employment" element={<Employment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
