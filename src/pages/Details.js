import React from 'react'
import { useLocation, useParams } from 'react-router'

const Details = () => {
  const { id } = useParams();
  const data = useLocation();
  console.log(id);
  console.log(data);

  const { state } = useLocation();



  return (
    <div>
      <h1>{state.name}</h1>
      <img src={state.image} alt="sdaf" />
      <p>{state.detail.substring(0, 5) + "...."}</p>
    </div>
  )
}

export default Details
