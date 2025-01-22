import "./ServicesSection.css";
import ServicesData from "../../data/services.json";

import ServiceCard from "../ServiceCard/ServiceCard";

function ServicesSection() {
  return (
    <section className="services-section">
      <small>OUR SOLUTIONS</small>
      <p>We provide with ...solutions bla bla blabla bla Lorem ipsum dolor.</p>
      <div className="solutions-btns-container">
        {ServicesData.map((service, index) => {
          return <button key={index} className="service-btn">{service.title}</button>;
        })}
      </div>
      {ServicesData.map((service, index) => {
        return (
            <ServiceCard key={index} service={service}/>
        );
      })}
    </section>
  );
}

export default ServicesSection;
