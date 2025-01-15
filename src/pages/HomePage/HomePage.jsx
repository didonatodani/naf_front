import arrowDown from "../../assets/arrow-down.svg";
import "./HomePage.css"

import { useRef } from "react";

function HomePage() {
  const exploreRef = useRef(null);
  // const scrollUp = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };



  return (
    <section className="section">
      <div className="h1-container">
        <h1>YOUR VISION, OUR MISION</h1>
        <button onClick={()=>{scrollToSection(exploreRef)}} className="explore-btn">
          Explore NAF <img src={arrowDown} alt="arrow down icon" id="explore-btn-arrow"/>
        </button>
      </div>
      <div className="manifesto-container" ref={exploreRef}>
        <h2>Manifesto</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi labore quam quis, illo eius excepturi? Maxime facere doloremque accusantium quidem unde necessitatibus, laboriosam officia enim neque minima, soluta illo explicabo.
        Sed delectus accusantium temporibus aspernatur. Voluptatem, veritatis! Fugiat, perspiciatis nesciunt. Alias officiis tenetur aliquam, natus ut odit tempore? Mollitia facere autem rerum? Libero suscipit, quam dolore possimus perspiciatis quibusdam quae!
        Totam enim consequatur dolore quasi, quae saepe deleniti praesentium est fugit commodi nulla possimus sed, a corporis. Rem aut, at, dolore quo, veniam modi possimus ex exercitationem esse necessitatibus vel.</p>
      </div>
      <div></div>
    </section>
  );
}

export default HomePage;
