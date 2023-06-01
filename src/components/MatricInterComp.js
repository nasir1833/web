import React from 'react'
import CategoryRender from './CategoryRender'

export default function MatricInterComp(props) {
  return (
    <>
        <CategoryRender arrayOfCategory={props.matricninter}/>
    </>
  )
}
