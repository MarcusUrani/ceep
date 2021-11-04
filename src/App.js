import { Component } from "react";
import FormularioCadastro from "./components/formularioCadastro";
import Categorias from "./dados/Categorias";
import ListaDeNotas from "./components/listaDeNotas";
import ListaDeCategorias from "./components/listaDeCategorias";
import "./components/Assets/index.css";
import "./components/Assets/App.css";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias = {this.categorias.categorias} criarNota={this.notas.adicionarNota} />
        <main className="conteudo-principal">
          <ListaDeCategorias
          adicionarCategoria = {this.categorias.adicionarCategoria}
          categorias={this.categorias.categorias} />
          <ListaDeNotas
            apagarNota={this.notas.deletarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
