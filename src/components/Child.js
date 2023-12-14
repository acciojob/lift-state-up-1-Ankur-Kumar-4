import React from 'react'

const Child = ({modalState}) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={()=>modalState(true)}>Show Modal</button>
      
      
    </div>
  )
}

export default  Child
