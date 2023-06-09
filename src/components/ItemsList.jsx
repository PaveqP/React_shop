import {Item} from './Item'
 
function ItemsList(props) {
    const {items = [], addItem = Function.prototype} = props;

    if (!items.length) {
        return <h3> Nothing </h3>
    }

    return  <div className="items">
                {items.map(item => (
                    <Item key={item.id} {...item} addItem={addItem}/>
                ))}
            </div>
}

export {ItemsList}