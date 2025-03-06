import Header from "../components/Header"
import Card from "../components/Card"

function Pagina1 () {
    return (
      <>
      <Header/>
      <center>
      <Card 
       Foto="https://www.travelmate.com.br/wp-content/uploads/2024/01/Chateau-dOex-Suica-1024x767.png"
       Titulo="Interlaken - Suiça"
       Descricao="Interlaken é uma cidade na Suíça, entre os lagos Thun e Brienz, cercada pelos Alpes. É conhecida por suas paisagens deslumbrantes e atividades ao ar livre, como passeios de balão, caminhadas e esportes de aventura. Um lugar perfeito para quem busca beleza natural e tranquilidade."
       Estrelas="estrelas aqui"
       Valor="Valor: R$ 4.569.20"
       Proximo='Proximo'
       Link = ""
      />
  </center>
      </>
    );
  }
  
  export default Pagina1;
  