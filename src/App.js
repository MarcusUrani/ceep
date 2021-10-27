import { Component } from "react";
import FormularioCadastro from "./components/formularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/listaDeNotas/ListaDeNotas";
import "./components/Assets/index.css"
import "./components/Assets/App.css"

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
