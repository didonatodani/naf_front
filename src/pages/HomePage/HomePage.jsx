import homeImage from "../../assets/home.jpg";
import constructionImg from "../../assets/construction.jpg";
import bimImg from "../../assets/bim.png";
import woodImg from "../../assets/wood.png";
import "./HomePage.css";
import clients from "../../data/clients.json";

import { Link } from "react-router-dom";
import { useRef } from "react";
import ClientCard from "../../components/ClientCard/ClientCard";
import ManifestoSection from "../../components/ManifestoSection/ManifestoSection";

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

      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-article-container">
          {/* crear un array y map para hacer estos componentes */}
          <Link to={"/services"}>
            <article className="services-article">
              <h3 className="services-article-title">Construction →</h3>
              <img
                src={constructionImg}
                alt="construction image"
                className="services-article-img"
              />
            </article>
          </Link>
          <Link to={"/services"}>
            <article className="services-article">
              <h3 className="services-article-title">Wood Frame →</h3>
              <img
                src={woodImg}
                alt="wood frame image"
                className="services-article-img"
              />
            </article>
          </Link>
          <Link to={"/services"}>
            <article className="services-article">
              <h3 className="services-article-title">BIM Services →</h3>
              <img
                src={bimImg}
                alt="BIM image"
                className="services-article-img"
              />
            </article>
          </Link>
        </div>
      </div>
      <div className="clients-container">
        <h2>Our clients</h2>
        <div className="clients-carousel marquee">
          {[...clients, ...clients].map((client, index) => {
            return <ClientCard key={index} client={client} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
