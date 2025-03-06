import "./CardHome.css"
import { useState } from "react"




function Card (props) {

    const [curtir, setCurtir] = useState("Curtir")
    let contaCurtida = 0

function curtindo() {

    if (curtir === "Curtir"){
        setCurtir("Curtindo")
        contaCurtida++

    }
    else {
        setCurtir("Curtir")   // Alterar o estado do botão para seguir
        contaCurtida--
    }
}



    return (
        <>
        <section className="blocoCard">
            <img>{props.imagem}</img>
            <h2>{props.nomeLugar}</h2>
            <p>{props.breveDescricao}</p>
            <section className="blocoCard2">
            <button onClick={curtindo}>{curtir} {contaCurtida}</button>
            <p>⭐⭐⭐⭐⭐</p>
            </section>
            <P>{props.valor}</P>
        </section>

        </>
    )

}

export default Card