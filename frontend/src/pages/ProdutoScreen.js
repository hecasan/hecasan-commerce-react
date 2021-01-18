import React from 'react'
import data from './../data';
import Rating from './../components/Rating';
import { Link } from 'react-router-dom'


export default function ProdutoScreen(props) {
  const produto = data.produtos.find((x) => x._id === props.match.params.id);
  if (!produto) {
    return <div>Produto não encontrado</div>
  }
  return (
    <div>
      <Link to="/"> <span class="voltarProdutos">Voltar ao produtos</span></Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={produto.image} alt={produto.name} />

        </div>
        <div className="col-1">
          <ul>
            <li><h1>{produto.name}</h1></li>
            <Rating rating={produto.rating} numReviews={produto.numReviews} />

            <li>{produto.description}</li>
            <li>Valor: R$ {produto.price},00</li>
          </ul>

        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>
                    Preço:
                  </div>
                  <div className="preco"> R$ {produto.price},00</div>

                </div>
              </li>

              <li>
                <div className="row">
                  <div>
                    Status:
                  </div>
                  <div className="estoque">{produto.countInStock > 0 ? (<span className="produtoEmEstoque"> Em Estoque</span>) : (<span className="produtoForaDeEstoque"> Produto Esgotado</span>)} ({produto.countInStock}) </div>
                </div>
              </li>
              <li>
                <button className="primary block" >Adicionar ao Carrinho</button>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}
