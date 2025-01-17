import { useEffect } from "react";

function ServicesPage(){

    // scrolleamos al servicio deseado o hacemos una pagina por servicio?
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <section className="section">
            <h1>SERVICES TITLE</h1>
            <p>short description, highlighting NAF's possibilities</p>


        </section>
    )
}

export default ServicesPage