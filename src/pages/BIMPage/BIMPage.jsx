import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const API_URL = import.meta.env.VITE_API_URL;

function BIMPage() {
  const [data, setData] = useState([]);

  // CREATE CUSTOM HOOK TO FETCH DATA!!

  async function fetchBIM() {
    try {
      const response = await axios.get(`${API_URL}/bim`);
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
    fetchBIM();
  }, []);

  return (
    <section className="projects-section section">
      <div className="projects-title-container">
        <h1>BIM PROJECTS</h1>
        <p>very very short description here.</p>
      </div>

      <div className="projects-card-container">
      {/* rendering data */}
      {data.map((projectInfo, index) => {
        return (
          <Link key={index} to={`/bim/${projectInfo._id}`}>
            <ProjectCard projectInfo={projectInfo} />
          </Link>
        );
      })}
      </div>
    </section>
  );
}

export default BIMPage;
