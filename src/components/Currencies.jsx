import React from 'react'

const Currencies = ({currency, index}) => {
  return (
    <div className='currency-space mapping-details'>
          <div key={index} className='currency-child box-shadow'>
              {currency}
          </div>
        </div> 
  )
}

export default Currencies