import React from 'react'
import {BsPlus} from 'react-icons/bs'
import { json } from 'react-router-dom'

function ListItem({data,setList,setLoc}) {
    const add = ()=>{
        localStorage.setItem('location' , JSON.stringify(data))
        setLoc(data)
        // console.log("Ite hkjgk hkjkjk khkjhkjjkjh kjhkjkhkjhs")
        setList([])
    }
  return (
    <div className='list-item'>
        <p>{data.name} , {data.admin1}</p>
        <button onClick={add}><BsPlus /></button>
    </div>
  )
}

export default ListItem