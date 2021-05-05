import React from "react"
import productData from './productData';
import Product from './Product';
function App(){
  const productComponents=productData.map(item=> <Product key={item.id} product ={item} />)
  
  
  
  return(
    <div>
          {productComponents}
    </div>
  )
};
export default App;
