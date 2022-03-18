import ToDoItem from '../todo-item/todo-item'

import './todo-item-list.css'

const ToDoItemList = ({data, onDelete, onToggle}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <ToDoItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggle={() => onToggle(id, 'completed')}/>
        )
    })
    
    return(
        <div className="todo--item--list">
            {elements}
        </div>

    )
}

export default ToDoItemList