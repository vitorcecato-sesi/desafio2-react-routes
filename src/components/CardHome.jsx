import "./CardHome.css"
import { useState } from "react"




function Card (props) {

    const [curtir, setCurtir] = useState("Curtir")
    const [contaCurtida, setContaCurtida] = useState (0)

    function curtindo() {

        if (curtir === "Curtir"){
            setCurtir("Curtido")
            setContaCurtida(contaCurtida+1)

        }
        else {
            setCurtir("Curtir")   // Alterar o estado do botão para seguir
            setContaCurtida (contaCurtida-1)
        }
    }

    return (
        <>
        <section className="blocoCard">
            <img className="imagemVia" src={props.imagem}></img>
            <section className="blocoTextos">
            <h2>{props.nomeLugar}</h2>
            <p>{props.breveDescricao}</p>
            </section>
            <section className="blocoCard2">
            <button className="botaoCurtida" onClick={curtindo}>{curtir} <span>{contaCurtida}</span></button>
            <p>⭐⭐⭐⭐⭐</p>
            </section>
            <a href={props.direcionar} className="explorar">Explorar</a>
            <p className="valor">{props.valor}</p>
        </section>

        </>
    )

}

export default Card