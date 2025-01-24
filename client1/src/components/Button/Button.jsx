import React from 'react'
import './Button.css'

const Button = ({ text, onClick, style }) => {
  return (
    <button className="contact-button" onClick={onClick} style={{ ...style, position: 'relative' }}>
          {text}
    </button>
  )
}

export default Button