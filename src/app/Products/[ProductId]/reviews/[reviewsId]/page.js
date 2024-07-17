import React from 'react'
import { notFound } from 'next/navigation';


export default function reviewdetail({params}) {
  if (parseInt(params.reviewsId)>1000){
    notFound();
  }
  return (
    <div>
      <h1>reviews {params.reviewsId} for product {params.ProductId}</h1>
    </div>
  )
}
