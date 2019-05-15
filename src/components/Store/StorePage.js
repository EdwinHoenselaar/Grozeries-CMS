import React from 'react'

export default function Store(props) {
  
  const {storename, storedescription, imageurl, storeId} = props.store[0]
  if(props)
  return ( 
    <div classname="store">
      <h3 key={storeId} className='store-name'> Store: {storename}</h3>
      <h4 key={storeId} className='store-description'> Description: {storedescription}</h4>
      <img key={storeId} src={imageurl} className='store-image' width="500" height="250" alt={storename}/>
    </div>)
  
    else return 'Loading Store...'  
  }
  