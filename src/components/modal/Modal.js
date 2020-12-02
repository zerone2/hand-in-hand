import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

const Modal = ({ visible, onClose, children }) => {
  return (
    <>
      <div className={'modal-overlay'} style={{ display: visible ? 'block' : 'none' }} onClick={onClose} />
      <div className={'modal-wrapper'} style={{ display: visible ? 'flex' : 'none' }}>
        {children}
      </div>
    </>
  )
}

const ModalPortal = ({ children }) => {
  const el = document.getElementById('modal-root')
  return el && ReactDOM.createPortal(children, el)
}

export default Modal
