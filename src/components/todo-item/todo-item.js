

import './todo-item.css'

const ToDoItem = (props) => {
    const {label, completed, onDelete, onToggle} = props
    let checkboxStyles = 'check--container';
    let textStyles = 'todo--text';

    if (completed) {
        textStyles += ' completed--text'
        checkboxStyles += ' active'
    }
    
    return(
        <div className="todo--item">
            <label className={checkboxStyles}>
            <input type="checkbox" className='checkbox--none' onChange={onToggle}/>
            </label>
            <h2 className={textStyles}>{label}</h2>
            <button id="close" onClick={onDelete}></button>
        </div>
    )
}

export default ToDoItem