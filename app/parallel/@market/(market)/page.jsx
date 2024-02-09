import React from 'react'
import {delay}  from '../../../lib/utiles'
async function MarketPage() {
    await delay(3000)
  return (
    <div style={{backgroundColor:'green', width:'30%'}}>Market Page</div>
  )
}

export default MarketPage