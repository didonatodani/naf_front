import { Link } from "react-router-dom";
import { forwardRef } from "react";

import "./ManifestoSection.css";

function ManifestoSection(props, ref) {
  return (
    <section className="manifesto-section" ref={ref}>
      <div className="manifesto-top-part">
        <small>/ABOUT US</small>
        <p>
          We are a global leader in Engineering, Procurement, and Construction
          (EPC) services, committed to delivering innovative and sustainable
          solutions across multiple industries. Bla bla bla bla bla.
        </p>
      </div>
      <div className="manifesto-lower-part">
        <div className="data-grid">
          <div className="data1 data-div">DATA 1%</div>
          <div className="data2 data-div ">DATA 2%</div>
          <div className="data3 data-div">DATA 3&</div>
        </div>

        <Link to={"/about"} className="staff-btn">
          Meet our staff ►
        </Link>
      </div>
    </section>
  );
}

export default forwardRef(ManifestoSection);
