import React, { useEffect, useState } from 'react'
import TableHead from './tableHead'
import Tablebody from './tablebody'

function Table1() {

    const [data,setData]=useState (  [{
        name:'pranav',
        weight:'80',
        skills:'React',
        education:'Bsc+Masai',
        id:1
      },
      
      { 
        name:'abhi',
        weight:'75',
        skills:'node',
        education:'12th',
        id:2
      
      }
      ,
      {
        name:'surya',
        weight:'72',
        skills:'Frontend',
        education:'Masai',
        id:3
    
        
      },
      {
        name:'shubham',
        weight:'70',
        skills:'Frontend',
        education:'Bcom',
        id:4
        
        
      },
      { 
        name:'ayush sir',
        weight:'75',
        skills:'All rounder',
        education:'Not Predictable',
        id:5
      
      } ,{ 
        name:'abhi jha',
        weight:'75',
        skills:'react',
        education:'ba',
        id:6
      
      },
      { 
        name:'dinesh sir',
        weight:'75',
        skills:'node',
        education:'bsc',
        id:7
      
      }, { 
        name:'saharsh sir',
        weight:'75',
        skills:'Full stack',
        education:'btech',
        id:8
      
      }, { 
        name:'abhi',
        weight:'75',
        skills:'node',
        education:'12th',
        id:9
      
      }
      ])

      const [newData,setnewData]=useState([]);
      const [initial,setInitial]=useState(1);
      const [final,setFinal]=useState(5 );

      const [count,setCount]=useState(1);
      const [totalPage,setTotalPage]=useState();
      const setter1=(payload)=>{
        setnewData(payload);
      } 
      useEffect(()=>{

        let final1=data.filter((ele,index)=>{
            return index>=initial && index<=final
        })
        setnewData(final1);

      },[initial,final,data])
      useEffect(()=>{

        let initialvalue=5*(count-1)+1;
            let finalValue=6*(count)-1;

            setInitial(initialvalue)
            setFinal(finalValue)

      },[count])


      console.log(initial);
      console.log(final)

      useEffect(()=>{

        let a=data?.length%5;
        if(a==0)
        {
            let a=parseInt(data?.length/5);
            setTotalPage(a)
        }
        else{
            let a=parseInt(data?.length/5)+1;
            setTotalPage(a);
        }


      },[data])

    const handle1=()=>{
        

        let newarr=[...newData].sort((a,b)=>{
            return a.name.length-b.name.length
        })
      
        console.log(newarr) 
        setter1(newarr)

 
    }
     
    const handle2=()=>{

        let newarr=[...newData].sort((a,b)=>{
            return a.weight-b.weight
        })
      
        console.log(newarr) 
        setter1(newarr)

 
    }
    const handle3=()=>{

        let newarr=[...newData].sort((a,b)=>{
            return a.skills.length-b.skills.length
        })
      
        console.log(newarr) 
        setter1(newarr)

 
    }
    const handle4=()=>{

        let newarr=[...newData].sort((a,b)=>{
            return a.name.length-b.name.length
        })
      
        console.log(newarr) 
        setter1(newarr)

 
    }
    const handler=(payload)=>{

    setData(payload)

    }


  return (

    <div style={{width:'60%',margin:'auto',marginTop:'80px'}}> 

        <table className='table' style={{border:'1px solid'}}> 
            <TableHead setter1={handle1} setter2={handle2} setter3={handle3} setter4={handle4}/>
            {newData.map((ele,index)=>{

              return<Tablebody name={ele.name} weight={ele.weight} skills={ele.skills}  index={ele.id} education={ele.education} data={data} handler={handler} />
            })
             
}       
           
        </table>
        <div style={{textAlign:'center'}}>
        <button onClick={()=>{
            setCount((prev)=>prev-1)

        

        }} disabled={count<=1} >Prev</button>
        <button >{count}</button>
        <button onClick={()=>{
            setCount((prev)=>prev+1)
             
            

        }} disabled={count>=totalPage} >Next</button>
        <button>Total Pages:{totalPage}</button>
          </div>

    </div>
  )
}

export default Table1
