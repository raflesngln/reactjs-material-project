import React from 'react';
import './progressloader.css';

const ProgressLoader1=()=>{
  return(
    <div className="box-progress">
      <div data-loader="ball-auto"></div>
    </div>
  )
}
const ProgressLoader2=()=>{
  return(
    <div className="box-progress">
      <div data-loader="circle-side"></div>
    </div>
  )
}
const ProgressLoader3=()=>{
  return(
    <div className="box-progress">
      <div data-loader="ball-scale"></div>
    </div>
  )
}
const ProgressLoader4=()=>{
  return(
    <div className="box-progress">
      <div data-loader="ball-fade"></div>
    </div>
  )
}



export{ProgressLoader1,ProgressLoader2,ProgressLoader3,ProgressLoader4}