import React from 'react'

export default function productlist({ params,}:{
    params:{productId:string};

}) {
  return (
    <div>
      <h1>Details about product{params.productId}</h1>
    </div>
  )
}

// To used Next js usig folder name we are maintained as a props throght changed  
// 1 to 100 times aap ye use kar sakte hai as a folder ka nam deke or use props send karke!!