import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./ProjectsPage.css";

const API_URL = import.meta.env.VITE_API_URL;

function ConstructionPage() {
  const [data, setData] = useState([]);

  // CREATE CUSTOM HOOK TO FETCH DATA!!

  async function fetchConstruction() {
    try {
      const response = await axios.get(`${API_URL}/construction`);
      console.log("Data fetched successfully", response.data);
      return setData(response.data);
    } catch (error) {
      if (error) {
        console.log("error:", error.response.data.message);
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchConstruction();
  }, []);

  return (
    <section className="projects-section section">
      <div className="projects-title-container">
        <h1>CONSTRUCTION PROJECTS</h1>
        <p>very very short description here.</p>
      </div>

      <div className="projects-card-container">
        {/* rendering data */}
        {data.map((projectInfo, index) => {
          return (
            <Link key={index} to={`/construction/${projectInfo._id}`}>
              <ProjectCard projectInfo={projectInfo} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ConstructionPage;
