import React from 'react'
import './Product.css'
import Price from './Price'
function Product(props) {
    let oldPrices=["123", "456", "789", "900"];
    let newPrices=["432", "554", "323", "8898"];
  return (
    <div className='Product'>
      <h3>{props.title}</h3>
      <p>Description</p>
      <Price oldPrice={props.oldPrices[props.idx]} newPrice={props.newPrices[props.idx]}></Price>
    </div>
  )
}

export default Product
