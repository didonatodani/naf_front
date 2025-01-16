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
    <section className="section">
      <h1>BIM Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure, earum, possimus, ad accusamus molestias corrupti molestiae quod ullam doloremque nisi architecto vero quisquam dolorum nulla! Modi officia magnam laudantium.
      Numquam quidem officia officiis natus dolore inventore consectetur laboriosam doloribus eaque qui quasi voluptate ullam, ex facere dignissimos repellendus exercitationem quis ut voluptas? Asperiores, eum iste! Reprehenderit odit possimus officiis.
      </p>
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
