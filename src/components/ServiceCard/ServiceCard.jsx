import { Link } from "react-router-dom";
import "./ServiceCard.css"
function ServiceCard({service}) {
  return (
    <article className="service-card">
      <img src={service.image} alt={`${service.title} image`} className="service-img"/>
      <div className="right-side-service">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={`/${service.path}`}>Check our projects ►</Link>
      </div>
    </article>
  );
}

export default ServiceCard