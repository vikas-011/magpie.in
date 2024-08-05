import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Stay from "./pages/StayPages/Stay";
import Dining from "./pages/DinningPage/Dining";
import Wedding from "./pages/WeddingPage/Wedding";
import ContactUs from "./pages/ContactUsPages/ContactUs";
import Membership from "./pages/MembershipPage/Membership";
import Activities from "./pages/ActivitiesPages/Activities";
import Gallery from "./pages/Gallery/Gallery";
import RoomDetails from "./components/RoomComponent/RoomDetails";
import StickyElement from "./components/StickyElement/StickyElement";
function App() {
  return (
    <Router>
      <StickyElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/room-details" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
}
export default App;