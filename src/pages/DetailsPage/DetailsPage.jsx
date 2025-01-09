// dynamic for all projects

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

function DetailsPage() {
  const [data, setData] = useState();
 
  const { category, _id } = useParams();

  async function fetchProjectDetails() {
    try {
      const response = await axios.get(`${API_URL}/${category}/${_id}`);
      // console.log("url working properly", `${API_URL}/${category}/${_id}`);

      return setData(response.data);
    } catch (error) {
      if (error) {
        console.log("error:", error.response.data.message);
      }
    }
  }

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  console.log("this is the data to render", data)
  
  return (
    <section>
      {data && (
        <>
          <h2>{data.project}</h2>
          <img src={data.images[0]} alt="" width={150} />
          <p>{data.description}</p>
        </>
      )}
    </section>
  );
}

export default DetailsPage;
