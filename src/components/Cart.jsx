function Cart(props){
    const {quant = 0, handleBasketShow = Function.prototype} = props;
    return  <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
                <i className="material-icons">shopping_cart</i>
                {quant ? <span className="cart-quantity #0d47a1 blue darken-4">{quant}</span> : null}
            </div>
}

export {Cart}