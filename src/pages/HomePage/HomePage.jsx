import homeImage from "../../assets/home.jpg";

import "./HomePage.css";
import clients from "../../data/clients.json";

import { useRef } from "react";
import ClientCard from "../../components/ClientCard/ClientCard.jsx";
import ManifestoSection from "../../components/ManifestoSection/ManifestoSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

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
          <h1>YOUR VISION, OUR MISION</h1>
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

      <ServicesSection ref={exploreRef}/>

      <div className="clients-container">
        <h2>Our clients</h2>
        <div className="clients-carousel marquee">
          {/* {[...clients, ...clients].map((client, index) => {
            return <ClientCard key={index} client={client} />;
          })} */}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
