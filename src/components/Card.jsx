import "../pages/style/Card.css"
function Card(props){
    return(
        <>
        <section className="Blocao">

        <section className="boxCard">

            <section className="ImagemETitulo">
            <img className="imagem" src={props.Foto}></img>
            <h1>{props.Titulo}</h1>
            </section>

            <section className="Descricao">
            <p>{props.Descricao}</p>
            </section>

            <section className="Estrelas">
            <p>{props.Estrelas}</p>
            </section>

            <section className="Valor">
            <p>{props.Valor}</p>
            </section>

           <section className="BoxBotao">  
            <a className="Botao" href={props.Link}>{props.Proximo}</a>
            </section>
    
            
        </section>
        </section>
        </>
    )
}

export default Card