import React from 'react'
import Uploader from '../Uploader/Uploader';

import { TextInputField, Label, Textarea, Select, Button } from 'evergreen-ui'

export default function ProductsDetailPage(props) {

  return (
    <form type="submit" onSubmit={props.onSubmit}>
      <TextInputField
        width="80%"
        name="product_name"
        label="Product name"
        placeholder="Green Apple"
        onChange={props.onChange}
        value={props.values.product_name}
      />
      <TextInputField
        width="80%"
        name="description"
        label="Short description"
        placeholder="Delicious Granny Smith Apples."
        onChange={props.onChange}
        value={props.values.description}
      />
      <Label
        htmlFor="ingredients"
        marginBottom={4}
        display="block"
      >
        Ingredients
      </Label>
      <Textarea
        width="80%"
        id="ingredients"
        name="ingredients"
        onChange={props.onChange}
        value={props.values.ingredients}
        placeholder="Sugar, wheat, yeast, water."
      />
      <TextInputField
        width="80%"
        name="allergens"
        label="Allergens"
        hint='Enter allergens, comma separated if multiple.'
        placeholder="Peanuts"
        onChange={props.onChange}
        value={props.values.allergens}
      />
      <div className='add-product-row'>
        <div className='add-product-row-individual'>
          <Label
            htmlFor="prices_by"
            marginBottom={4}
            display="block"
          >
            Priced by
          </Label>
          <Select id="prices_by" name="prices_by" value={props.values.prices_by} onChange={props.onChange}>
            <option value="weight">weight</option>
            <option value="piece">piece</option>
          </Select>
        </div>
        <div className='add-product-row-individual'>
          <TextInputField
            name="price"
            type='number'
            label="Price"
            hint='Enter amount of money.'
            placeholder="24"
            onChange={props.onChange}
            value={props.values.price}
          />
        </div>
        <div className='add-product-row-individual'>
          <TextInputField
            name="quantity"
            type='number'
            label="Quantity"
            hint='Enter amount.'
            placeholder="2"
            onChange={props.onChange}
            value={props.values.quantity}
          />
        </div>
        <div className='add-product-row-individual'>
          <Label
            htmlFor="in_stock"
            marginBottom={4}
            display="block"
          >
            In stock
          </Label>
          <Select id="in_stock" name="in_stock" value={props.values.in_stock} onChange={props.onChange}>
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </Select> 
        </div>
        <div className='add-product-row-individual'>
          <Label
            htmlFor="file"
            marginBottom={4}
            display="block"
            >
            Pick image
          </Label>
          <Uploader
            id='file'
            name='image'
            onChange={(file) => {
              if (file) {
                file.done(info => props.setUrl(info.cdnUrl))
              }
            }}
          />
        </div>
      </div>

      <Button>submit</Button>
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