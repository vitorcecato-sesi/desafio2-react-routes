// Style
    import "./style/Home.css"
//.

// Componentes
    import Header from "../components/Header"
//.

// Fotos
    // import foto1 from "../assets/imgbanner1.png"
    // import foto2 from "../assets/imgbanner2.png"
    // import foto3 from "../assets/imgbanner3.png"
    // import banner from "../assets/banner.png"
//.

function Home(){
    return(
        <>
            <Header />
            
            <section className="banner">
                <h1>AS <span>MELHORES</span> <br /> VIAGENS DO <span>MUNDO <br /> INTEIRO</span></h1>
            </section>
        </>
    )
}

export default Home