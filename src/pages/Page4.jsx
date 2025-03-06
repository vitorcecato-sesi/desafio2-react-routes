import "../pages/style/page4.css"
import Card from "../components/Card"
import Header from "../components/Header"
import NovaYork from "../assets/NewYork.png"
import Footer from "../components/Footer"

function Page4(){
    return (
        <>
        <Header/>
        <center>
        <Card 
         Foto={NovaYork}
         Titulo="Nova York - Estados Unidos"
         Descricao="Nova York é uma cidade globalmente famosa, conhecida pela sua energia vibrante, diversidade cultural e marcos como a Estátua da Liberdade, Times Square e Central Park. Composta por cinco distritos, é um centro financeiro, cultural e artístico, com destaque para a Broadway, museus renomados e uma vida urbana intensa."
         Estrelas="⭐⭐⭐⭐"
         Valor="Valor: R$ 2.389.10"
         Proximo='Proximo'
         Link = "http://localhost:5173/interlaken-suica"
        />
    </center>
    <Footer/>
        </> 
      );
}

export default Page4