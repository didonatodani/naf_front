function ProjectCard({ projectInfo }) {
  const { project, images } = projectInfo;
  return (
    <div>
      <h3>{project}</h3>
      <img src={images} alt="" width={120}/>
    </div>
  );
}

export default ProjectCard;
