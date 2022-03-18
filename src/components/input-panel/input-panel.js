import { Component } from 'react'

import "./input-panel.css"

class ToDoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: "",
        }
    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label.length < 3) return;
        this.props.onAdd(this.state.label);
        this.setState({
            label: '',
        })
    }
    
    render() {
        const {label} = this.state
        let clazz = 'checkbox--filler'
        if ( this.props.data.length === 0) {
            clazz += ' hide--filler'
        }

        return (
            <form 
                className='todo-input--form'
                onSubmit = {this.onSubmit}>
                <label className={clazz} onClick={this.props.checkAll}/>
                <input type="text" 
                       placeholder='What needs to be done?' className="todo-input" 
                       name='label'
                       value={label} 
                       onChange={this.onValueChange}/>
            </form>
        )
    }
}

export default ToDoInput