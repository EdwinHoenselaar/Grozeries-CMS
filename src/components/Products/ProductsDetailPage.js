import React from 'react'
import Uploader from '../Uploader/Uploader';

export default function ProductsDetailPage(props) {

  return (
    <form type="submit" onSubmit={props.onSubmit}>
      <input 
        name="product_name"
        onChange={props.onChange}
        value={props.values.product_name}
      />
      <input 
        name="description"
        onChange={props.onChange}
        value={props.values.description}      
      />
      <input 
        name="price"
        onChange={props.onChange}
        value={props.values.price}      
      />
      <input 
        name="ingredients"
        onChange={props.onChange}
        value={props.values.ingredients}     
      />
      <input 
        name="allergens"
        onChange={props.onChange}
        value={props.values.allergens}      
      />
      <input 
        name="prices_by"
        onChange={props.onChange}
        value={props.values.prices_by}      
      />
      <input 
        name="quantity"
        onChange={props.onChange}
        value={props.values.quantity}
      />
      <input
        type="boolean" 
        name="in_stock"
        onChange={props.onChange}
        value={props.values.in_stock}
      />     
      
      <Uploader
          id='file'
          name='image'
          onChange={(file) => {
            if (file) {
              file.done(info => props.setUrl(info.cdnUrl))
            }
          }}
          />

      <button>submit</button>
    </form>
  )
}
// label="Title:"
// margin="normal"
// variant="outlined"          
// onChange={props.onChange} 
// name="title" 
// value={props.values.title}>

// product_name
// description
// price
// ingredients
// allergens
// prices_by
// quantity
// in_stock