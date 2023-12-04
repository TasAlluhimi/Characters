import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Chars() {
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get("https://656d8d4fbcc5618d3c2364a0.mockapi.io/chars")
        .then(res=>{
            console.log(res);
            setData(res.data)
        })
        .catch((error)=>{console.error(error)})
    }

    const handleDelete = (id)=>{
        console.log("h");
        axios.delete(`https://656d8d4fbcc5618d3c2364a0.mockapi.io/chars/${id}`)
        .then(()=>{

            getData()
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
    <>
        
        {/* <div className='bg-[rgb(6,13,23)]'> */}
      
      <div className='flex flex-col items-center p-5'>
      <p className='text-center text-3xl p-10'>Characters</p>
      
            <button 
            className='bg-slate-400 p-1 rounded-md mt-3 hover:scale-105'
            >
            <Link to='/AddChars'>
            Add one
            </Link>   
            </button>

      </div>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {data.map((item,index)=>(
          <div key={index} className='w-80 rounded-lg text-center flex flex-col items-center justify-center'>

            <Link to={`/${item.id}`}><div style={{backgroundImage: `url(${item.image})`}} className='focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 h-60 bg-cover w-60'></div></Link>

            <button 
            className='bg-slate-400 p-1 rounded-md mt-3 hover:scale-105'
            onClick={()=>{handleDelete(item.id)}}
            >Delete
            </button>
          </div>
        ))}
      </div>
      {/* </div> */}

    </>
  )
}

export default Chars