import React from 'react'
import Rating from './Rating'

export default function Produto(props) {
  const { produto } = props;
  return (
    <div>
      <div key={produto._id} className="card">
        <a href={`/produto/${produto._id}`}>
          <img className="medium" src={produto.image} alt={produto.name} />
        </a>
        <div className="card-body">
          <a href={`/produto/${produto._id}`}>
            <h2>{produto.name}</h2>
          </a>

          <div className="price">R$ {produto.price},00</div>
          <Rating rating={produto.rating} numReviews={produto.numReviews} />
        </div>
      </div>
    </div>
  )
}
