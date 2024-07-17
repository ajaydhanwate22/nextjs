import React from 'react'

export default function docs({ params,}:
  {
    params:{
      slug:string[];
    };
  }) {
    if(params.slug?.length===2){
      return 
      <h1>Veiwing docs for feutures {params.slug[0]} and comcept {params.slug[1]}</h1>
    } else if (params.slug?.length===1){
      return 
      <h1>Veiwing docs for features {params.slug[0]}</h1>
    }
  return (
    <>
      <h1>Docs Home Page</h1>
    </>
  )
}
