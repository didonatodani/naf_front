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
    fetchBIM();
  }, []);

  return (
    <section className="section">
      {/* rendering data */}
      {data.map((projectInfo, index) => {
        return (
          <Link key={index} to={`/bim/${projectInfo._id}`}>
            <ProjectCard projectInfo={projectInfo} />
          </Link>
        );
      })}
    </section>
  );
}

export default BIMPage;
