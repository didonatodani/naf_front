import AboutCard from "../../components/AboutCard/AboutCard";
import partners from "../../data/partners.json";
import staff from "../../data/staff.json";

import "./AboutPage.css"

function AboutPage() {
  return (
    <section className="about-section section">
      <h1>WE ARE....</h1>
      <p>
        manifesto Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem laboriosam, id quasi laborum quibusdam possimus sunt
        reiciendis, ab est sed maxime nihil quisquam quas ipsum error temporibus
        dolore, libero accusantium! Modi mollitia ab dolorem illo quo
        blanditiis, magni aliquam vitae obcaecati enim culpa, quos magnam quam
        vero eveniet exercitationem saepe qui repellat! Consectetur nisi, facere
        rerum impedit quo dolorem minima!
      </p>
      <h2>OUR STAFF</h2>
      <div className="staff-container">
        {partners.map((member, index) => {
          return <AboutCard key={index} member={member} />;
        })}
      </div>
      <div className="staff-container">
        {
          staff.map((member, index)=>{
            return <AboutCard key={index} member={member}/>
          })
        }
      </div>
    </section>
  );
}

export default AboutPage;
