import ClientCard from "../../components/ClientCard/ClientCard.jsx";
import clients from "../../data/clients.json";

import "./ClientsContainer.css"

function ClientsContainer(){

    return(
        <div className="clients-container">
        <small>/OUR CLIENTS</small>
        <div className="clients-carousel marquee">
          {[...clients, ...clients, ...clients].map((client, index) => {
            return <ClientCard key={`${client.clientName}_${index}`} client={client} />;
          })}
        </div>
      </div>
    )
}

export default ClientsContainer