import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'


class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Link to="/">Ir para a página home \o/</Link>
          Exemplo de Página Sobre :)
        </p>
      </div>
    );
  }
}

export default Sobre;
