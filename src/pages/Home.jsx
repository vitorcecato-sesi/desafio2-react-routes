// Style
    import "./style/Home.css"
//.

// Componentes
    import Header from "../components/Header"
    import Navbar from "../components/NavBar"
//.

function Home(){
    return(
        <>
            <Header />
            <Navbar/>
            <section className="banner">
                <h1>AS <span>MELHORES</span> <br /> VIAGENS DO <span>MUNDO <br /> INTEIRO</span></h1>
            </section>
        </>
    )
}

export default Home