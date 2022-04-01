import React, { useState } from 'react'
import { allGiftCards } from './allGiftCards'
import Currencies from './Currencies'
import Header from './Header'

const Card = () => {
    const [searchValue, setSearchValue] = useState("")
  return (
     <div className='body-section'>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <section className='card-section'>
            {allGiftCards
            .filter(giftcard => giftcard.title.match(new RegExp(searchValue, "i")))
            .map((giftcard, index) => (
                <div className='card' key={index}>
                <div className='img-container'>
                    <img src={giftcard.img} alt="" className='card-img' />
                </div>
                <div className='card-body'>
                    <h4>Name: <span>{giftcard.title}</span></h4>
                    <div className='currencies'>
                        <h4>Currencies:</h4>
                        <div className='currency mapping-details'>
                            {giftcard.currencies.map((currency, index) => (
                                <Currencies currency={currency} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            ))} 
        </section>
      </div>
      
  )
}

export default Card