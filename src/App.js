import { Component } from 'react';

import ToDoInput from './components/input-panel/input-panel'
import ToDoItemList from './components/todo-item-list/todo-item-list'
import TaskFilter from './components/task-filter/task-filter'

import './App.css';

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {
        data: [],
        term: '',
        filter: 'all'
    }
    this.maxId = 1;
  }

  addItem = (label) => {
    const newItem = {
        label, 
        completed: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggle = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id){
          return{...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
          data: data.filter(item => item.id !== id)
      }
    })
  }

  clearCompleted = () => {
    this.setState(({data}) => {
      return {
          data: data.filter(item => item.completed === false)
      }
    })
  }

  filterPost = (items, filter) => {
    switch (filter) {
        case 'active':
            return items.filter(item => item.completed === false);
        case 'completed':
            return items.filter(item => item.completed === true)
        default: 
            return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  checkAll = () => {
    const {data} = this.state
    let checkedCouter = 0
    data.forEach(item => {
      if (item.completed) {
        checkedCouter++
      }
    }) 
    
    this.setState(({data}) => ({
      data: data.map((item) => {
        if (checkedCouter === 0){
          return{...item, completed: true}
        } else if (checkedCouter === data.length){
          return{...item, completed: false}
        } else{
          return{...item, completed: true}
        }
      })
    }))
  }




  render() {
    const {data, filter} = this.state
    const visibleData = this.filterPost(data, filter)
    
    return (
      <>
        <h1 className="title">todos</h1>

        <div className='mane--container'>
          <ToDoInput data={data} onAdd={this.addItem} checkAll={this.checkAll}/>
          <ToDoItemList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggle={this.onToggle}/>
          
          <TaskFilter data={data} filter={filter} onFilterSelect={this.onFilterSelect} clearCompleted={this.clearCompleted}/>
        </div>
      </>
    )
  }
}

export default App
