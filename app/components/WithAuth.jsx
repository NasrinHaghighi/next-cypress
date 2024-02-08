'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react';

const session =false
function WithAuth(Component) {
   return function WithAuthComponent(props) {
    useEffect(() => {
        if (!session) {
            redirect('/')
        }
     },[])
     if (!session) {
        return null
     }
      return <Component {...props}/>
   }

}

export default WithAuth