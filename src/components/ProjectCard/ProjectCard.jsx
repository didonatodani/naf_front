import "./ProjectCard.css";
import plusImg from "../../assets/plus.png"

function ProjectCard({ projectInfo }) {
  const { project, images } = projectInfo;
  return (
    <div className="project-card-container">
      <img src={images} alt="project image" className="project-img" />
      <h3 className="project-title">{project}</h3>
      <div className="overlay">
        <img src={plusImg} alt="see more icon" className="more-icon"/>
      </div>
    </div>
  );
}

export default ProjectCard;
