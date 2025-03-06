// Style
    import "./style/Home.css"
//.

// Componentes
    import Header from "../components/Header"
    import Navbar from "../components/NavBar"
    import Card from "../components/CardHome"
//.

// Fotos
    import Interlakqn from "../assets/"
    import NewYork from "../assets/NewYork.png"
//.

function Home(){
    return(
        <>
            <Header />
            <Navbar/>
            <section className="banner">
                <h1>AS <span>MELHORES</span> <br /> VIAGENS DO <span>MUNDO <br /> INTEIRO</span></h1>
            </section>
            <section className="cards">
                <section className="duplaCard">
                    <Card
                        imagem= {Interlakqn}
                        nomeLugar= "Interlakqn - Suiça"
                        breveDescricao= ""
                        direcionar= ""
                        valor= ""
                    />
                    <Card
                        imagem= {Paris}
                        nomeLugar= "Paris - França"
                        breveDescricao= ""
                        direcionar= ""
                        valor= ""
                    />
                </section>

                <section className="duplaCard">
                    <Card
                        imagem= {Disney}
                        nomeLugar= "Disney - Estados Unidos"
                        breveDescricao= ""
                        direcionar= ""
                        valor= ""
                    />
                    <Card
                        imagem= {NewYork}
                        nomeLugar= "Nova Iorque - Estados Unidos"
                        breveDescricao= ""
                        direcionar= ""
                        valor= ""
                    />
                </section>
            </section>
        </>
    )
}

export default Home