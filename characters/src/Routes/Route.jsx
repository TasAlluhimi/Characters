import React from 'react'
import {Routes , Route as R} from 'react-router-dom';
import Chars from '../Pages/Chars';
import CharDetails from '../Pages/CharDetails';
import AddChars from '../Pages/AddChars';

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Chars/>}></R>
            <R path='/:id' element={<CharDetails/>}></R>
            <R path='/AddChars' element={<AddChars/>}></R>
        </Routes>
    </>
  )
}

export default Route