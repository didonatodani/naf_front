import { Link } from "react-router-dom";

function ServiceCard({service}) {
  return (
    <article className="service-card">
      {/* <img src={service.image} alt={`${service.title} image`} /> */}
      <div className="right-side-service">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link>Projects</Link>
      </div>
    </article>
  );
}

export default ServiceCard