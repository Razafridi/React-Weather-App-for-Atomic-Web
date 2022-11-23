import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import ListItem from './listitem'

function SearchBar({loc , setLoc}) {



  const [searchData , setSearchData] = useState('')
  const [list , setList] = useState([])
  
  
  const search = async (text)=>{
    setSearchData(text.target.value);
    await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchData}`)
    .then((res) => res.json())
    .then((data)=> display(data))
    .catch((e) => console.log(e))
  }

  const display = (data)=>{
    if(data.results){
      setList(data.results)
    }
    if(searchData === ""){
      setList([])
    }
  }
  return (
    <div className='search-bar'>
        <div className='input-area'>
            <div className='icon'><BsSearch /></div>
            <input  onChange={search} type='text' />
        </div>

        {
          list.length > 0 ? (
            <div className='list-view'>
          {
            list.map((item)=> <ListItem key={item.id} data={item} setLoc={setLoc} setList={setList} />)
          }
        </div>
          ): ""
        }
    </div>
  )
}

export default SearchBar