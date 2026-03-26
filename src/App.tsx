import { Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { HomePage } from './pages/HomePage';
import { IpadRepairPage } from './pages/IpadRepairPage';
import { IphoneBatteryReplacementPage } from './pages/IphoneBatteryReplacementPage';
import { IphoneScreenRepairPage } from './pages/IphoneScreenRepairPage';
import { MobilePhoneRepairIrvinePage } from './pages/MobilePhoneRepairIrvinePage';
import { PhoneRepairOrangeCountyPage } from './pages/PhoneRepairOrangeCountyPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/iphone-screen-repair-irvine"
          element={<IphoneScreenRepairPage />}
        />
        <Route
          path="/iphone-battery-replacement-irvine"
          element={<IphoneBatteryReplacementPage />}
        />
        <Route path="/ipad-repair-irvine" element={<IpadRepairPage />} />
        <Route
          path="/phone-repair-orange-county"
          element={<PhoneRepairOrangeCountyPage />}
        />
        <Route
          path="/mobile-phone-repair-irvine"
          element={<MobilePhoneRepairIrvinePage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
