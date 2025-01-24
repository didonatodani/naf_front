import homeImage from "../../assets/home.jpg";
import "./HomePage.css";

import { useRef } from "react";
import ManifestoSection from "../../components/ManifestoSection/ManifestoSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ClientsContainer from "../../components/ClientsContainer/ClientsContainer.jsx";

function HomePage() {
  const exploreRef = useRef(null);
  // const scrollUp = useRef(null);

  const servicesArray = [
    "Water Treatment Plants",
    "Structural Calculation",
    "BIM Services",
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="homepage-section">
      <div className="hello-container">
        <div className="hello-left-side">
          <h1>YOUR VISION, OUR&nbsp;MISION</h1>
          <div className="services-array">
            {servicesArray.map((service, index) => {
              return <span key={index}>✅ {service}</span>;
            })}
          </div>

          <button
            onClick={() => {
              scrollToSection(exploreRef);
            }}
            className="explore-btn"
          >
            Explore NAF ▼
          </button>
        </div>
        <img src={homeImage} alt="engineers planning" className="home-img" />
      </div>

      <ManifestoSection ref={exploreRef} />

      <ServicesSection />

      <ClientsContainer/>
    </section>
  );
}

export default HomePage;
