import React from 'react'

type HelloProps={
    name:string
}
export const Hello = (props:HelloProps) => {
  return (
    <h2>Hello {props.name}</h2>
  )
}
