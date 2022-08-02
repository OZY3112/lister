import React from 'react'

export default function Note({note}: any) {
  return (
    <div className="w-3/4"
    >{note?.content}</div>
  )
}
