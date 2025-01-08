import axios from "axios";
import { useState, useEffect } from "react";

function BIMPage() {
  const [data, setData] = useState();

  async function fetchBIM() {
    try {
      const response = await axios.get("http://localhost:5005/bim");
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
    <section>
      {/* rendering data */}
      <p>{JSON.stringify(data)}</p>
    </section>
  );
}

export default BIMPage;
