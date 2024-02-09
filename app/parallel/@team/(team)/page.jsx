import React from 'react'
import {delay}  from '../../../lib/utiles'


async function TeamPage() {
    await delay(5000)
   
  return (
    <div style={{backgroundColor:'red', width:'30%'}}>TeamPage</div>
  )
}

export default TeamPage