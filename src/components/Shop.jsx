import {useState, useEffect} from 'react'
import {API_CS_URL, API_KEY, API_URL} from '../config'
import {Preloader} from './Preloader'
import {ItemsList} from './ItemsList'
import { Cart } from './Cart'
import {BasketList} from './BasketList'
import {Alert} from './Alert'
import { CsItemsList } from './ItemsCsList'

function Shop(props) {

    const {mode} = props;

    const [items, setItems] = useState([]);
    const [csItems, setCsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');
    const [csFlag, setCsFlag] = useState(true)
    const [fortFlag, setFortFlag] = useState(true)

    const getFortItems = () => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
        .then(response => response.json())
        .then(data => {
            data.featured && setItems(data.featured);
            setLoading(false);
        })
    }

    const getCsItems = () => {
        fetch(API_CS_URL)
        .then(function(response) 
        {
            return response.json();
        })
        .then(function(data) 
        {
            setCsItems(data)
        })
        .catch(function(err) 
        {
            console.log('Fetch Error :-S', err);
        });
    }

    //useEffect(() =>  {
        //getFortItems();
    //}, []);

    if (mode === 'csgo' && csFlag === true){
        getCsItems()
        setCsFlag(false)
    }
    if (mode === 'fortnite' && fortFlag === true){
        getFortItems()
        setFortFlag(false)
    }

    const addToBacket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0){
            const newItem = {
                ...item,
                quant:1,
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quant: orderItem.quant + 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder)
        }
        setAlertName(item.name);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const deleteItem = (itemId) => {
        const newOrder = order.filter(elem => elem.id !== itemId);
        setOrder(newOrder);
    }

    const plusItem = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuant = el.quant + 1;
                return {
                    ...el,
                    quant: newQuant,
                }
            } else {
                return el;
            }
        })

        setOrder(newOrder);
    }

    const minusItem = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuant = el.quant - 1;
                return {
                    ...el,
                    quant: newQuant >= 0 ? newQuant : 0,
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    return (
        <main className="container content">
            <Cart quant={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading 
                    ? <Preloader/> 
                    : mode === 'fortnite' && <ItemsList items={items} addItem={addToBacket} />
            }
            {
                loading 
                    ? <Preloader/> 
                    : mode === 'csgo' && <CsItemsList items={csItems} addItem={addToBacket}/>
            }
            {
                isBasketShow && <BasketList 
                                    order={order} 
                                    handleBasketShow={handleBasketShow} 
                                    deleteItem={deleteItem}
                                    plusItem={plusItem}
                                    minusItem={minusItem}
                                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
}

export {Shop}