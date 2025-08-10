import React from 'react'
import Product from './Product'
function ProductTab() {
  return (
    <div>
     <Product title="ABC" idx={0}/>
     <Product title="DEF" idx={1}/>
     <Product title="GHI" idx={2}/>
     <Product title="JKL" idx={3}/>
    </div>
  )
}

export default ProductTab
