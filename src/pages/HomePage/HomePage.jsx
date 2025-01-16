import arrowDown from "../../assets/arrow-down.svg";
import constructionImg from "../../assets/construction.jpg";
import bimImg from "../../assets/bim.png";
import woodImg from "../../assets/wood.png";
import "./HomePage.css";

import { Link } from "react-router-dom";
import { useRef } from "react";

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
        <h2>Manifesto</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi labore
          quam quis, illo eius excepturi? Maxime facere doloremque accusantium
          quidem unde necessitatibus, laboriosam officia enim neque minima,
          soluta illo explicabo. Sed delectus accusantium temporibus aspernatur.
          Voluptatem, veritatis! Fugiat, perspiciatis nesciunt. Alias officiis
          tenetur aliquam, natus ut odit tempore? Mollitia facere autem rerum?
          Libero suscipit, quam dolore possimus perspiciatis quibusdam quae!
          Totam enim consequatur dolore quasi, quae saepe deleniti praesentium
          est fugit commodi nulla possimus sed, a corporis. Rem aut, at, dolore
          quo, veniam modi possimus ex exercitationem esse necessitatibus vel.
        </p>
      </div>
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-article-container">
          <Link to={"/construction"}>
            <article className="services-article">
              <h3 className="services-article-title">Construction →</h3>
              <img
                src={constructionImg}
                alt="construction image"
                className="services-article-img"
              />
            </article>
          </Link>
          <Link to={"/woodframe"}>
            <article className="services-article">
              <h3 className="services-article-title">Wood Frame →</h3>
              <img
                src={woodImg}
                alt="wood frame image"
                className="services-article-img"
              />
            </article>
          </Link>
          <Link to={"/bim"}>
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
    </section>
  );
}

export default HomePage;
