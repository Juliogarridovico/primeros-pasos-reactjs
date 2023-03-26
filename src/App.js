
import BucleDentroReact from "./Components/BucleDentroReact";
import ResultadoFinal from "./Components/ComunicarComponentes/ResultadoFinal";
import Estados from "./Components/Estados";
import Operadorterniario from "./Components/Operadorterniario";
import Usuario from "./Components/Usuario";


function App() {
  return (
    <div className="App">
      <Usuario ejemploPropNombre="Julioa" />
      <Estados/>
      <Operadorterniario/>
      <ResultadoFinal/>
      <BucleDentroReact/>
    </div>
  );
}

export default App;
