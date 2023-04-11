import {BasketItem} from './BasketItem'
import { Item } from './Item';

function BasketList(props) {
    const {
        order = [], 
        handleBasketShow = Function.prototype,
        deleteItem = Function.prototype,
        plusItem = Function.prototype,
        minusItem = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, element) => {
        return sum + element.price * element.quant
    }, 0);

    return  <ul className="collection basket-list">
                <li className="collection-item active">Корзина</li>
                {
                    order.length ? order.map(item => (
                        <BasketItem 
                            key={item.id} 
                            {...item} 
                            deleteItem={deleteItem}
                            plusItem={plusItem}
                            minusItem={minusItem}
                        />
                    )) : <li className="collection-item">Корзина пуста</li>
                }
                <li className="collection-item active" style={{'margin-top':'10px'}}>
                    Стоимость: {totalPrice} руб.
                </li>
                <li className="collection-item ">
                    <button className="btn-small"> Оформить заказ </button>
                </li>
                <i className='material-icons basket-close' onClick={handleBasketShow}> close </i>
            </ul>
}

export {BasketList}