import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddChars() {

    const navigate = useNavigate()

    const [inputs, setInputs] = React.useState({
        name: '',
        image: '',
        hair: '',
        status: '',
        species: '',
        gender: '',
        origin: '',
    })

    const addInputs = (event)=>{
        setInputs({...inputs,
            [event.target.name]: event.target.value
        })
    }
    const handleAdd = ()=>{
        axios.post('https://656d8d4fbcc5618d3c2364a0.mockapi.io/chars', {
            name: inputs.name,
            image: inputs.image,
            hair: inputs.hair,
            status: inputs.status,
            species: inputs.species,
            gender: inputs.gender,
            origin: inputs.origin,
        })
        .then((response)=>{
            console.log("added");
            navigate('/')

        })
    }

  return (
    <>

    <div className='flex flex-col h-screen items-center justify-center'> 
        <input 
        className='border p-1 rounded-md'
        type="text"
        name='name'
        value={inputs.name}
        placeholder='add char name'
        onChange={addInputs}
         />

        <input 
        className='border p-1 rounded-md mt-3'
        type="text"
        name='image'
        value={inputs.image}
        placeholder='add char image'
        onChange={addInputs}
         />

        <input 
        className='border p-1 rounded-md mt-3'
        type="text"
        name='hair'
        value={inputs.hair}
        placeholder='add char hair color'
        onChange={addInputs}
         />

        <input 
        className='border p-1 rounded-md mt-3'
        type="text"
        name='status'
        value={inputs.status}
        placeholder='add char status'
        onChange={addInputs}
         />
         
         <input 
         className='border p-1 rounded-md mt-3'
         type="text"
         name='species'
         value={inputs.species}
         placeholder='add char species'
         onChange={addInputs}
          />
          
          <input 
          className='border p-1 rounded-md mt-3'
          type="text"
          name='gender'
          value={inputs.gender}
          placeholder='add char gender'
          onChange={addInputs}
           />
           
           <input 
           className='border p-1 rounded-md mt-3'
           type="text"
           name='origin'
           value={inputs.origin}
           placeholder='add char origin'
           onChange={addInputs}
            />

            <button 
            className='bg-slate-400 p-1 rounded-md mt-3 hover:scale-105'
            onClick={()=>{handleAdd()}}
            >Add
            </button>
    </div>
    </>
  )
}

export default AddChars