import React, { useEffect } from 'react'
import { CsItem } from './CsItem';
import { useState } from 'react';

function CsItemsList(props) {

    const {
        items = {}, 
        addItem = Function.prototype,
    } = props;

    const [csItems, setCsItems] = useState([])
    const [countOfCards, setCountOfCards] = useState(5)

    for (var key in items) {
      if (csItems.length < 800){
        if (items.hasOwnProperty(key)) {
            let id = Math.floor(Math.random() * 1000000)
            let price = Math.floor(Math.random() * 50001)
            setCsItems(csItems.push({
              price: price,
              id: id,
              name: key,
              back: items[key]
            }))
        }
      }
    }

  const SM = () => {
	  alert('it`s prototipe')
  }

console.log(csItems.length, 'dlina ')

  return (
    <>
    <div className='items'>
        {
           csItems.map(item => (<CsItem key={item.id} {...item} addItem={addItem}/>))
        }
    </div>
	<button className="btn" onClick={SM}>Show more</button>
	</>
  )

}

export {CsItemsList};