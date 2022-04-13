import React from 'react'
import './Modal.css'

const Modal = ({handleClose}) => {
  return (
    <div className='modal-bg'>
        <div className="modal">
            
            <button onClick={handleClose}>Close</button>
        </div>
    </div>
  )
}

export default Modal