import React from 'react'
import { revalidateTag } from 'next/cache'
async function AddProduct() {


  const res=await fetch('http://localhost:8000/product', {cache:'no-cache', next:{tags:['product']}})
  const data=await res.json()


async function AddnewProduct(e) {
  'use server'
  const title= e.get('title')
  const price= e.get('price')
  const newPoduct ={title, price}

  await fetch('http://localhost:8000/product', {method:"POST", body: JSON.stringify(newPoduct), headers: {'Content-Type': 'application/json'}}),
  revalidateTag('product')

}
  return (
    <div style={{margin: 'auto', width: '30%'}}>
      <form action={AddnewProduct}>
        <input type="text" name="title" />
        <br/>
        <input type="text" name="price" />
        <br/>
        <button type="submit">Add Product</button>
      </form>
      <div>
      {data.map((item)=>{
        return <div key={item.id}>{item.title} {item.price}</div>
      })}
      </div>
    </div>
  )
}

export default AddProduct