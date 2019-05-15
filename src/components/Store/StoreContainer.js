import React, { Component } from 'react'
import StorePage from './StorePage';

export default class StoreContainer extends Component {
  render() {

    const props = {
      store: [
        {
          storeId: 1,
          storename: 'Klomp & Hooi',
          storedescription: 'Oh my lord, fucking lekkere kaas weet je wel. Uit Hillywoooooodddd!',
          imageurl: 'https://bit.ly/2Vq4mkT'
        }
      ]
    }
    
    return (
      <div className='store'>
        <h1>Store</h1>
        <StorePage store={props.store}/>
      </div>
    )
  }
}



