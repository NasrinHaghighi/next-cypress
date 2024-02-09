





export default function RootLayout({ children,  team ,market}) {



  return (
   <div style={{border:'1px solid red', width:'80%', margin:'auto',  padding:'1rem'}}>
    {children}
  
    <div style={{display:'flex', justifyContent:'space-around'}}>

{team}  
{market}
    </div>
  
   </div>
  )
}