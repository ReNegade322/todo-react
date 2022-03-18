import './task-filter.css'

const TaskFilter = ({data, onFilterSelect, clearCompleted}) => {
    
    let taskLeft = 0
    data.forEach(elem => {
        if(elem.completed === false){
            taskLeft++
        }
    });

    let clazz = 'task--filter'
    if ( data.length === 0) {
        clazz += ' hide--filter'
    }

    let clearClass = 'clear--items'
    if (taskLeft === data.length) {
        clearClass += ' hide--filter'
    }

    return (
        <div className={clazz}>
            <span className='items--counter'>{taskLeft} items left</span>
            
            <div className='filter--btn--group'>
                <button className='filter--btn btn--pressed'
                        onClick={() =>onFilterSelect('all')}>
                All</button>
                <button 
                    className='filter--btn btn--pressed' 
                    onClick={() =>onFilterSelect('active')}>
                Active</button>
                <button 
                    className='filter--btn btn--pressed'
                    onClick={() =>onFilterSelect('completed')}>
                Completed</button>
            </div>

            <button className={clearClass} onClick={clearCompleted}>Clear completed</button>
        </div>
    )
}

export default TaskFilter