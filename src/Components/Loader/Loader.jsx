import React from 'react'
import loader from "../../assets/loader.gif"
import "./loader.css"

export const Loader = ({greeting}) => {
  return (
    <div className='loaderInicio'>
        <img src={loader} className="loader"/>
        <p className='loading'>{greeting}</p> 
      </div>
  )
}
