import React from 'react'

const Button = ({ defaultBtn, text, iconstart, iconend, cName }) => {
  return (
    <>
      <div className='btn-contant'>
        <p>{`${defaultBtn ? defaultBtn : ''}`}</p>
        <button className={`btn ${cName ? cName : ''}`}>
          <span className='material-icons'> {iconstart ? iconstart : ''}</span>
          {text ? text : 'Default'}
          <span className='material-icons'>{iconend ? iconend : ''}</span>
        </button>
      </div>
    </>
  )
}

export default Button
