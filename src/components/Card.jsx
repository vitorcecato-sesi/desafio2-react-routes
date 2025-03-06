import "./Card.css"
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
            <a className="Botao" href={props.Link}>{props.Proximo}</a>
            </div>
    
            
        </section>
        </section>
        </>
    )
}

export default Card