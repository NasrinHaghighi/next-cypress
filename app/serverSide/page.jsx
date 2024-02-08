import React from 'react'
import { redirect } from 'next/navigation'



function ServerSide() {
    const session = false
    if(!session){
        redirect('/')
    }
  return (
    <div>ServerSide component</div>
  )
}

export default ServerSide