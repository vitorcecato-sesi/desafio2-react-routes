import "./Footer.css"
import logoinstagram from "../assets/instagram.png"
import logofacebook from "../assets/facebook.png"
import logoG3 from "../assets/logoG3.png"

function Footer () {
    return (
        <>

        <section className="infoContatos">

            <section className="redes">

                <section className="info"> {/*classe para deixar o nome do lado da logo */}
                    <img className="imgRedes" src={logoinstagram} />
                    <p> @avocados_viajantes</p>
                </section>

                <section className="info"> 
                    <img className="imgRedes" src={logofacebook} />
                    <p> AvocadosViajantes</p>
                </section>

            </section>

            <section className="contato"> 
                <p> 📞 Contado para Vendas: (19) 91234-1234</p>
                <p> 📩 Email para Contato: avocados.viajantes@gmail.com</p>
            </section>

        </section>

        <section className="informacoes"> 

            <section className="sobreNos"> 
                <p> <h4> 🏢 Sobre a Empresa  </h4> Nós somos uma empresa de viagem que procura o melhor destino para nossos clientes, de acorodo com seus gostos! Somos uma equipe de 6 pessoas que adoram conhecer o mundo, e dessa forma espalhamos conhecimentos para os que tambem são interresados nessa aréa!</p>
            </section>

            <section className="listas"> 
                <h4> 📍 Principais Destinos</h4>
                <a href=""></a> 🌉 Suiça <br/>
                <a href=""> 🗼 Paris </a> <br/>
                <a href=""> 🐀 Disney Word </a> <br/>
                <a href=""> 🗽 New York </a>
            </section>

            <section className="listas"> 
                <h4> 🛫 Companhias Aéreas Internacionais </h4>
                    <a href="https://www.flytap.com/pt-br"> Tap Air </a> <br/>
                    <a href="https://www.copaair.com/pt-br/"> Copa Airlines </a> <br/>
                    <a href="https://wwws.airfrance.com.br/"> Air France </a> <br/>
                    <a href="https://www.aa.com.br/homePage.do?locale=pt_BR"> American Arlines</a> <br/>
                    <a href="https://www.airchina.com.br/BR/PO/Home"> Air China </a> <br/>
                    <a href="https://www.emirates.com/br/portuguese/"> Emirates </a>  
                
            </section>

            <section className="listas">  
                <h4> 🛫 Companhias Aéreas Nacionais </h4>
                <ul>
                    <a href="https://www.voeazul.com.br/br/pt/home"> Azul </a> <br/>
                    <a href="https://www.voegol.com.br/"> VoeGol </a> <br/>
                    <a href="https://www.latamairlines.com/br/pt"> Latam</a> <br/>
                    <a href="https://www.voepass.com.br/empresa/site/"> VoePass </a> <br/>
                    <a href="https://www.avianca.com/pt/"> Avianca</a>            
                </ul>

            </section>

        </section>

        <img className="imgLogo" src={logoG3}/>

        <hr/>

        <section className="integrantes"> 
            <section> 
                <h4> Laura Betti Migliaccio </h4>
                <h4> Lucas Casagrande da Silva </h4>
                <h4> Milena Oliveira Souza </h4>
            </section>

            <section> 
                <h4> Pietro Melle Michelin </h4>
                <h4> Pyetro Joaquim Taborda Nunes </h4>
                <h4> Vitor Geraldo Cecato </h4>
            </section>
            
        </section>


        


        
        </>

    )
}

export default Footer