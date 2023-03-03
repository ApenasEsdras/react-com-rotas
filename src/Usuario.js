import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class Usuario extends Component {
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

export default Usuario;
