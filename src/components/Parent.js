import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {

  const  [showModal, setShowModal] = useState(false);

  console.log(showModal);


  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <Child modalState = {setShowModal} />
      {
        showModal && <div>
          <h3>Modal Content</h3>
         <p>This is the modal content.</p> 
        </div>
      }
    </div>
  )
}

export default Parent
