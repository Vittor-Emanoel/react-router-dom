import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";

console.log(window.location)

const pagina  = window.location.pathname === '/' ? <div><Inicio /></div> : <div><SobreMim /></div>
function App() {
  return (
    <>
     {pagina}
    </>
  );
}

export default App;
