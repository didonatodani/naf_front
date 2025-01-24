import "./ClientCard.css"

function ClientCard ({client}){
    const {clientName, logo} = client;

    return(
        <article className="client-card">
            <img src={logo} alt="" className="client-img"/>
        </article>
    )
}

export default ClientCard