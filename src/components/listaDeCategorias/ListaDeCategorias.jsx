import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {categorias: []};

    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handlerEventoInput(event) {
    if (event.key == "Enter") {
      let valorCategoria = event.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="categorias">
        <ul className="lista-categorias">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias__itens">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicione categoria"
          className="categorias__input"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
