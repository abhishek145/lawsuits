import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Navigation from './components/Navigation';
import About from './Pages/About/aboutUs';
import Contact from './Pages/Contact/contactUs';
import NotFound from './Pages/NotFound';
import ScrollToTop from './components/ScrollTotop';
import Footer from './components/Footer';
import FamilyLawPage from './components/lawInfo/familylaw';
import CriminalDefensePage from './components/lawInfo/CriminalDefensePage';
import GuardianAdLitemPage from './components/lawInfo/GuardianAdLitemPage';
import ParentingCoordinatorPage from './components/lawInfo/ParentingCoordinatorPage';
import TrafficViolationsPage from './components/lawInfo/TrafficPage';
import EstatePlanningPage from './components/lawInfo/EstatePlanningPage';
import CollaborativeLawPage from './components/lawInfo/CollaborativeLawPage';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <div className="sticky top-0 z-50" style={{ backdropFilter: "blur(80px)" }}>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/family-law" element={<FamilyLawPage />} />
        <Route path="/criminal-defense" element={<CriminalDefensePage />} />
        <Route path="/guardian-ad-litem" element={<GuardianAdLitemPage />} />
        <Route path="/parenting-coordinator" element={<ParentingCoordinatorPage />} />
        <Route path="/traffic-violations" element={<TrafficViolationsPage />} />
        <Route path="/estate-planning" element={<EstatePlanningPage />} />
        <Route path="/collaborative-law" element={<CollaborativeLawPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="sticky top-0 z-50" style={{ backdropFilter: "blur(80px)" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
