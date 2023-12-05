import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function CharDetails() {

    const {id} = useParams()
    const [data, setData] = React.useState([])

    const navigate = useNavigate();

    React.useEffect(()=>{
        
        axios.get("https://656d8d4fbcc5618d3c2364a0.mockapi.io/chars")
        // axios.get("http://localhost:3000/Chars")
        .then((response)=>{
            // console.log(response.data);
            const charData = response.data.find((item)=>item.id == id)
            setData(charData);
        
    })
        .catch((error)=>{console.error(error)})
    }, [])


  return (
    <>
        <div className='flex flex-wrap items-center justify-center h-full'> 


<div className='w-80 rounded-lg text-center flex flex-col items-center justify-center'>
    <p className='p-2'>{data.name}</p>
    <img src={data.image} className='focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105' alt={data.name} />
    <p className='p-2'> Hair Color: {data.hair}</p>
    <p className='p-2'> Statue: {data.status}</p>
    <p className='p-2'> Species: {data.species}</p>
    <p className='p-2'> Gender: {data.gender}</p>
    <p className='p-2'> Origin: {data.origin}</p>

    <button
              className="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 mt-5"
              type="button" onClick={()=>{{navigate('/')}}}
            >
              Back
    </button>

</div>
 </div>
    </>
  )
}

export default CharDetails