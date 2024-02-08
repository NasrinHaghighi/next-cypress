import React, { Children } from 'react'
import Link from 'next/link'


function CompanyLayout({children}) {
  return (
   <section style={{padding:'1rem' ,border:'1px solid red',width:'50vw', margin:'auto', display: 'flex',
   }}>
<div style={{backgroundColor:'blue'}}>
    <div >
        <nav>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/team'>our team</Link></li>
                <li><Link href='/contact'>Conatct us</Link></li>
            </ul>

        </nav>
    </div>
    <br/>
  
</div>
<div style={{backgroundColor:'yellow', width:'100%'}}>{children}</div>
   </section>
  )
}

export default CompanyLayout