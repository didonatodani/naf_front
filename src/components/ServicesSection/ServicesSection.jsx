import { useState } from "react";
import "./ServicesSection.css";
import ServicesData from "../../data/services.json";
import ServiceCard from "../ServiceCard/ServiceCard";

import WoodIcon from "../../assets/woodframe-icon.svg";
import WaterIcon from "../../assets/construction-icon.svg";
import BimIcon from "../../assets/bim-icon.svg";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(0);

  const serviceIcons = {
    woodframe: WoodIcon,
    bim: BimIcon,
    construction: WaterIcon,
  };

  return (
    <section className="services-section">
      <div className="services-top-part">
        <small>/OUR SOLUTIONS</small>
        <p>
          We provide with ...solutions bla bla blabla bla Lorem ipsum dolor bla
          Lorem ipsum dolor.
        </p>
      </div>
      <div className="solutions-btns-container">
        {ServicesData.map((service, index) => {
          return (
            <button
              key={index}
              className={`service-btn ${
                selectedService === index ? "active" : ""
              }`}
              onClick={() => setSelectedService(index)}
            >
              <img src={serviceIcons[service.path] || ""} alt="service icon" />
              {service.title}
            </button>
          );
        })}
      </div>

      <ServiceCard service={ServicesData[selectedService]} />
    </section>
  );
}

export default ServicesSection;
