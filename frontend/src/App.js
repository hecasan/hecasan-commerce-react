import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import HomeScreen from './pages/HomeScreen.js';
import ProdutoScreen from './pages/ProdutoScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">Hecasan</a>
            </div>
            <div>
              <a href="/carrinho-de-compras">Carrinho</a>
              <a href="/logar">Entrar</a>
            </div>
          </header>
          <main>
            <Route path="/produto/:id" component={ProdutoScreen} />
            <Route path="/" component={HomeScreen} exact />
          </main>
          <footer className="row center">Todos os direitos reservados - Hecasan Portas e Janelas de Alumínio</footer>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
