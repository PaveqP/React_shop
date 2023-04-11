function BasketItem(props) {
    const {
        id,
        name,
        price, 
        quant,
        deleteItem = Function.prototype,
        plusItem = Function.prototype,
        minusItem = Function.prototype,
    } = props;

    return  <li classNameName="collection-item">
                {name} x {quant} = {price * quant} руб.
                <div style={{'margin-top': '5px'}}>

                    <button style={{'margin-right': '10px'}} onClick={() => plusItem(id)}>+</button>
                    <button onClick={() => minusItem(id)}>-</button>

                    <span className="secondary-content" onClick={() => deleteItem(id)}>
                    <i className="material-icons bi-close">
                        close
                    </i>
                </span>
                </div>
            </li>
}

export {BasketItem}