import React from 'react'

export default function ProductDetails({params,}:{
  params:{ProductId:string};
}) {
  return (
    <>
      <h1>Detals about products{params.ProductId}</h1>
    </>
  )
}
