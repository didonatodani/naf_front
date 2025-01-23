import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components and pages imported
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ConstructionPage from "./pages/ConstructionPage/ConstructionPage";
import WoodPage from "./pages/WoodPage/WoodPage";
import BIMPage from "./pages/BIMPage/BIMPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* projects routes */}
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/woodframe" element={<WoodPage />} />
        <Route path="/bim" element={<BIMPage />} />

        {/* only one details page for any type of project */}
        <Route path="/:category/:_id" element={<DetailsPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
