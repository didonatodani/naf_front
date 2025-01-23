import "./ClientCard.css"

function ClientCard ({client}){
    const {clientName, logo} = client;

    return(
        <article className="client-card">
            <img src={logo} alt="" className="client-img"/>
            <span className="client-name">{clientName}</span>
        </article>
    )
}

export default ClientCard