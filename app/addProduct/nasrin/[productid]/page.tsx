import React from 'react'




function ProductDetails({params }: {params: { productid: string }}) {


  return (
    <>
    <div>ProductDetails{params.productid} </div>
    </>
  )
}

export default ProductDetails