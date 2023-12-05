import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateChar() {

    const navigate = useNavigate()

    const addInputs = (event)=>{
        setData({...data,
            [event.target.name]: event.target.value
        })
    }
    
    const {id} = useParams()
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        
        axios.get(`https://656d8d4fbcc5618d3c2364a0.mockapi.io/chars/${id}`)
        // axios.get(`http://localhost:3000/Chars/${id}`)
        .then((response)=>{
            console.log(response.data);
            // const charData = response.data.find((item)=>item.id == id)
            setData(response.data);
        
    })
        .catch((error)=>{console.error(error)})
    }, [])

    const handleUpdate = ()=>{
        axios.put(`https://656d8d4fbcc5618d3c2364a0.mockapi.io/chars/${id}`, {
        // axios.put(`http://localhost:3000/Chars/${id}`, {
            name: data.name,
            image: data.image,
            hair: data.hair,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin,
        })
        .then((response)=>{
            console.log("updated!");
            navigate(`/${id}`)

        })
    }

  return (
    <>
        <div className='flex flex-col h-screen items-center justify-center'> 
        <input 
        className='border p-1 rounded-md'
        type="text"
        name='name'
        value={data.name}
        placeholder='add char name'
        onChange={addInputs}
         />

        <input 
        className='border p-1 rounded-md mt-3'
        type="text"
        name='image'
        value={data.image}
        placeholder='add char image'
        onChange={addInputs}
         />

        <input 
        className='border p-1 rounded-md mt-3'
        type="text"
        name='hair'
        value={data.hair}
        placeholder='add char hair color'
        onChange={addInputs}
         />

        <input 
        className='border p-1 rounded-md mt-3'
        type="text"
        name='status'
        value={data.status}
        placeholder='add char status'
        onChange={addInputs}
         />
         
         <input 
         className='border p-1 rounded-md mt-3'
         type="text"
         name='species'
         value={data.species}
         placeholder='add char species'
         onChange={addInputs}
          />
          
          <input 
          className='border p-1 rounded-md mt-3'
          type="text"
          name='gender'
          value={data.gender}
          placeholder='add char gender'
          onChange={addInputs}
           />
           
           <input 
           className='border p-1 rounded-md mt-3'
           type="text"
           name='origin'
           value={data.origin}
           placeholder='add char origin'
           onChange={addInputs}
            />

            <button 
            className='bg-slate-400 p-1 rounded-md mt-3 hover:scale-105'
            onClick={()=>{handleUpdate()}}
            >Update
            </button>
    </div>
    </>
  )
}

export default UpdateChar