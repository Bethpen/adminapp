import React from 'react';
import './products.scss'

const Products = ({ image, net_price, price, name, tax }) => {
  return (
    <article className='products'>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="products-footer">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <h4>{net_price}</h4>
        <p>{tax}</p>
 
      </div>
    </article>
  )
}

export default Products
