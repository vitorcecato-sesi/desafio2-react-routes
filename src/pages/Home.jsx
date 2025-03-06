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
    import Paris from "../assets/"
    import Disney from "../assets"
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
                        breveDescricao= "A Disney é um lugar mágico onde sonhos ganham vida! Com parques temáticos incríveis, personagens encantados e atrações para todas as idades, oferece experiências inesquecíveis para toda a família. Seja em Orlando, Paris, Tóquio ou outras localizações, a Disney é um destino perfeito para quem busca diversão, aventura e momentos de pura fantasia."
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