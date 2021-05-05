import React from 'react';
function Product(props){
  return(
    <div>
        <h1>name:{props.product.value}</h1>
        <h1>email:{props.product.email}</h1>
    </div>
  )
}
export default Product;