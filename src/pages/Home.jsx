// Style
    import "./style/Home.css"
//.

// Componentes
    import Header from "../components/Header"
    import Navbar from "../components/NavBar"
    import Card from "../components/CardHome"
    import Footer from "../components/Footer"
//.

// Fotos
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
                <Card
                    imagem= "https://www.travelmate.com.br/wp-content/uploads/2024/01/Chateau-dOex-Suica-1024x767.png"
                    nomeLugar= "Interlakqn - Suiça"
                    breveDescricao= "Interlaken é uma cidade na Suíça, entre os lagos Thun e Brienz, cercada pelos Alpes. Um lugar perfeito para quem busca beleza natural e tranquilidade."
                    direcionar= "http://localhost:5173/interlakqn-suica"
                    valor= ""
                />

                <Card
                    imagem= "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
                    nomeLugar= "Paris - França"
                    breveDescricao= "Paris, a capital da França, é famosa por sua beleza e cultura. Com seus cafés e restaurantes, Paris é um paraíso gastronômico."
                    direcionar= "http://localhost:5173/paris-franca"
                    valor= ""
                />

                <Card
                    imagem= "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/02/comemoracao-disney-e1614010798887.jpg?w=750"
                    nomeLugar= "Disney - Estados Unidos"
                    breveDescricao= "A Disney é o lugar mais mágico para você e sua família!"
                    direcionar= "http://localhost:5173/disney-eua"
                    valor= ""
                />

                <Card
                    imagem= {NewYork}
                    nomeLugar= "Nova Iorque - Estados Unidos"
                    breveDescricao= "Nova York é uma cidade globalmente famosa, conhecida pela sua energia vibrante, a Estátua da Liberdade, Times Square e Central Park."
                    direcionar= "http://localhost:5173/newyork-eua"
                    valor= ""
                />
            </section>
            <Footer />
        </>
    )
}

export default Home