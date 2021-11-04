import React, { Component } from "react";
import CardNota from "../cardNota/";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota
              indice = {index}
              apagarNota = {this.props.apagarNota}
              titulo = {nota.titulo} 
              texto = {nota.texto}
              categoria = {nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
