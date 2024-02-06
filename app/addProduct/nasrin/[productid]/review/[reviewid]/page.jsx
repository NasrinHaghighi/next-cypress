import React from 'react'

function ReviewDetails({params} ) {
    const {productid, reviewid} = params
  return (
    <div>product {productid} review {reviewid}</div>
  )
}

export default ReviewDetails