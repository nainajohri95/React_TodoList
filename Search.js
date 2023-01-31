import React from 'react'
import {BsSearch} from 'react-icons/bs'

export default function Search({handleSearchText}) {
  return (
    <div className='search-box'>
       < BsSearch/>
       <input onChange={(e) => {handleSearchText(e.target.value)}} type="text" placeholder='Search here...' />
    </div>
  )
}

  