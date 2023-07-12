import React from 'react'

function Tablebody({name,weight,skills,education,index,data,handler}) {
  return (
    <tbody >
     
      <tr  key={index}><td>{name}</td>
                <td>{weight}</td>
                <td>{skills}</td>
               <td>{education}</td>
               <td><button onClick={()=>{
    
              let arrnew=data.filter((ele)=>{
                    return ele.id!==index
                })
 
                handler(arrnew)
  
 
               }}>Delete</button></td>

     </tr>
 
 </tbody>
  )
}

export default Tablebody