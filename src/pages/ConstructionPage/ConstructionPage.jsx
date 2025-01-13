import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
    fetchConstruction();
  }, []);
  return (
    <section>
      {/* rendering data */}
      {data.map((projectInfo, index) => {
        return (
          <Link key={index} to={`/construction/${projectInfo._id}`}>
            <ProjectCard projectInfo={projectInfo} />
          </Link>
        );
      })}
    </section>
  );
}

export default ConstructionPage;
