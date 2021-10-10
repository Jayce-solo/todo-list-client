import React from "react";
import axios from "axios";
import TodoForm from "./ToDoForm";
import TodoList from "./TodoList";

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    // this.textInput = null
    this.state = {
      todoItems: []
    }
  }

  componentDidMount() {
    const that = this;
    axios.get('http://localhost:8000/items').then(res => {
      that.setState({
        todoItems: [...res.data]
      })
    })
  }

  /*
    添加一个
    PS：之前的老方法
  */
  // addTodoItem = () => {
  //   const newTodoItem = {
  //     id: this.state.todoItems.length,
  //     value: this.textInput.value,
  //     done: false,
  //     delete: false
  //   };
  //   this.setState({
  //     todoItems: [...this.state.todoItems, newTodoItem]
  //   })
  // }

  addTodoItem = (todoItemValue) => {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: todoItemValue,
      done: false,
      delete: false
    };
    const that = this;
    axios.post('http://localhost:8000/items', { todoItem: newTodoItem }).then(res => {
      that.setState({
        todoItems: [...res.data]
      });
    });
  }

  /*
  删除一个
*/
  deleteTodoItem = (item) => {
    console.log(item);
    const that = this;
    axios.delete('http://localhost:8000/items', {
      data: {
        id: item.id
      }
    }).then(res => {
      that.setState({
        todoItems: [...res.data]
      });
    });
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>TodoList</h1>
  //       <div>

  //         <input type="text" placeholder="输入一些东西" ref={(input) => { this.textInput = input }}></input>
  //         <button type="submit" onClick={this.addTodoItem}>添加</button>
  //       </div>
  //       <ul>{
  //         this.state.todoItems.map(item => {
  //           if (item.delete) return;
  //           return (
  //             <li key={item.id}>
  //               <label>{item.value}</label>
  //               <button onClick={() => {
  //                 this.deleteTodoItem(item)
  //               }}>删除</button>
  //             </li>
  //           )
  //         })

  //       }</ul>
  //     </div>
  //   );

  // }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm
          addTodoItem={this.addTodoItem}
        />
        <TodoList todoItems={this.state.todoItems}
          deleteItem={this.deleteTodoItem} />
      </div>
    )
  }
}
