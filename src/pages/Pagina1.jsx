import Card from "../components/Card"

function Pagina1 () {
    return (
      <>
      <center>
      <Card 
       Foto="data:image/png;base64,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"
       Titulo="Teste"
       Descricao=""
       Estrelas="⭐⭐"
       Valor="Valor:"
       Proximo='Proximo'
      />
  </center>
      </>
    );
  }
  
  export default Pagina1;
  