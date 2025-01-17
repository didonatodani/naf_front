import arrowDown from "../../assets/arrow-down.svg";
import constructionImg from "../../assets/construction.jpg";
import bimImg from "../../assets/bim.png";
import woodImg from "../../assets/wood.png";
import "./HomePage.css";
import clients from "../../data/clients.json";

import { Link } from "react-router-dom";
import { useRef } from "react";
import ClientCard from "../../components/ClientCard/ClientCard";

function HomePage() {
  const exploreRef = useRef(null);
  // const scrollUp = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="section">
      <div className="h1-container">
        <h1>YOUR VISION, OUR MISION</h1>
        <button
          onClick={() => {
            scrollToSection(exploreRef);
          }}
          className="explore-btn"
        >
          Explore NAF{" "}
          <img src={arrowDown} alt="arrow down icon" id="explore-btn-arrow" />
        </button>
      </div>
      <div className="manifesto-container" ref={exploreRef}>
        <h2>NOSOTROS</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi labore
          quam quis, illo eius excepturi? Maxime facere doloremque accusantium
          quidem unde necessitatibus, laboriosam officia enim neque minima,
          soluta illo explicabo. Sed delectus accusantium temporibus aspernatur.
          Voluptatem, veritatis!
        </p>

        <Link to={"/about"}>
          <button>boton a about page</button>
        </Link>
      </div>
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
