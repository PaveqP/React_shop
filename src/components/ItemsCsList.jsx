import React from 'react'
import { CsItem } from './CsItem';
import { useState } from 'react';

function CsItemsList(props) {

	const [countOfCards, setCountOfCards] = useState(10)

    const {
        items = {}, 
        addItem = Function.prototype,
    } = props;

    let csitems = []
	let id = Math.floor(Math.random() * 1000000)

    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        if (csitems.length < countOfCards){
            csitems.push(
            {
              name: key,
              back: items[key]
            })
        }
      }
  }

  const SM = () => {
	setCountOfCards(countOfCards + 15)
  }

console.log(csitems)

  return (
    <>
    <div className='items'>
        {
            csitems.map(item => (<CsItem key={id} {...item} addItem={addItem}/>))
        }
    </div>
	<button className="btn" onClick={SM}>Show more</button>
	</>
  )

}

export {CsItemsList};