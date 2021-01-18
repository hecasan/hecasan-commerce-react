import React from 'react'
import './index.css';
import data from './data';
import Produto from './components/Produto.js';


function App() {
  return (
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
          <div>
            <div className="row center">
              <>
                {
                  data.produtos.map(produto => (

                    <Produto key={produto._id} produto={produto} />


                  ))
                }
              </>


            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>

    </div>
  );
}

export default App;
