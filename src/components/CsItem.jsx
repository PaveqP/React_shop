import React from 'react'

function CsItem(props) {

    const {
        id, 
        back, 
        name, 
        addItem = Function.prototype,
    } = props;

    let price = Math.floor(Math.random() * 50001)

    return <div className="card" id={id}>
                <div className="card-image">
                    <img src={back} alt={name}/>
                    
                </div>
                <div className="card-content"> 
                    <p>
                        <span className="card-title">{name}</span>
                        {name}
                    </p>
                </div>
                <div className="card-action">
                    <button className="btn" onClick={() => addItem({
                        id,
                        name,
                        price,
                    })}>Купить</button>
                    <span className="right" style={{fontSize: '2rem'}}>{price} руб.</span>
                </div>
            </div>
}

export {CsItem};