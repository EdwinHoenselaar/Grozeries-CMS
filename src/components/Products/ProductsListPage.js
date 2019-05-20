import React from 'react'
import { Link } from 'react-router-dom'

import { Badge, Table } from 'evergreen-ui'

export default function Product(props) {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell flexGrow={2}>
            Product
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexGrow={2}>
            Description
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexGrow={0.5}>
            Price
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Allergens
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Priced by
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexGrow={0.5}>
            Quantity
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexGrow={0.5}>
            In stock
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {props.products.map(product => (
            <Table.Row key={product.id} isSelectable onSelect={() => alert(product.name)}>
              <Table.TextCell flexGrow={2}>{product.product_name}</Table.TextCell>
              <Table.TextCell flexGrow={2}>{product.description}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{product.price}</Table.TextCell>
              <Table.TextCell>{product.allergens}</Table.TextCell>
              <Table.TextCell>{product.prices_by === 'weight' ? <Badge color='blue'>weight</Badge> : <Badge color='orange'>per piece</Badge>}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{product.quantity}</Table.TextCell>
              <Table.TextCell flexGrow={0.5}>{product.in_stock === true ? <Badge color='green'>YES</Badge> : <Badge color='red'>NO</Badge>}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
