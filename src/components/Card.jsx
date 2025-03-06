import "../pages/style/Card.css"
function Card(props){
    return(
        <>
        <section className="Blocao">

        <section className="boxCard">

            <div className="ImagemETitulo">
            <img className="imagem" src={props.Foto}></img>
            <h1>{props.Titulo}</h1>
            </div>

            <div className="Descricao">
            <p>{props.Descricao}</p>
            </div>

            <div className="Estrelas">
            <p>{props.Estrelas}</p>
            </div>

            <div className="Valor">
            <p>{props.Valor}</p>
            </div>

           <div className="BoxBotao">  
            <button className="Botao">{props.Proximo}</button>
            </div>
    
            
        </section>
        </section>
        </>
    )
}

export default Card