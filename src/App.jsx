import "./App.css";
import "./styles/common.css";
import "./styles/reset.css";
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
import Firewall from "./pages/Besiness/Firewall/Firewall";
import AP from "./pages/Besiness/AP/AP";
import Consulting from "./pages/Besiness/Consulting/Consulting";
import Global from "./pages/Besiness/Global/Global";
import Software from "./pages/Besiness/Software/Software";
import Switch from "./pages/Besiness/Switch/Switch";
import MSP from "./pages/Besiness/MSP/MSP";
import Fortinet from "./pages/Besiness/Firewall/Fortinet/Fortinet";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/message" element={<AboutMessage />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/client" element={<AboutClient />} />
        <Route path="/about/vendor" element={<AboutVendor />} />
        <Route path="/about/location" element={<AboutLocation />} />
        <Route path="/business" element={<Firewall />} />
        <Route path="/business/ap" element={<AP />} />
        <Route path="/business/consulting" element={<Consulting />} />
        <Route path="/business/firewall" element={<Firewall />} >
          <Route path="fortinet" element={<Fortinet />} />
        </Route>
        <Route path="/business/global" element={<Global />} />
        <Route path="/business/msp" element={<MSP />} />
        <Route path="/business/software" element={<Software />} />
        <Route path="/business/switch" element={<Switch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
