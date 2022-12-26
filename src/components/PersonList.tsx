import React from 'react'

type PersonListProps={
  names:{
    fName:string,
    id:number
  }[]
}
export const PersonList = (props:PersonListProps) => {
  return (
  <div>
     {props.names.map((name)=>{
   return ( <span>{name.fName}</span>)
   })}
  </div>
  )
}
