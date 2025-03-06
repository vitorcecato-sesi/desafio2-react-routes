function Card(props){
    return(
        <>
        <section className="boxCard">
            <img className="imagemViagem" src={props.foto}></img>
            <h1>{props.Titulo}</h1>
            <p>{props.Descricao}</p>
            <p>{props.Estrelas}</p>
            <p>{props.Valor}</p>
        </section>
        </>
    )
}

export default Card